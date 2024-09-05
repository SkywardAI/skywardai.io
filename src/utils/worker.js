import { Wllama } from "@wllama/wllama/esm/index"
import { Template } from '@huggingface/jinja';
import { useState, useEffect } from 'react';

import wllamaSingleJS from '@wllama/wllama/src/single-thread/wllama.js?url';
import wllamaSingle from '@wllama/wllama/src/single-thread/wllama.wasm?url';
import wllamaMultiJS from '@wllama/wllama/src/multi-thread/wllama.js?url';
import wllamaMulti from '@wllama/wllama/src/multi-thread/wllama.wasm?url';
import wllamaMultiWorker from '@wllama/wllama/src/multi-thread/wllama.worker.mjs?url';

const CONFIG_PATHS = {
    'single-thread/wllama.js': wllamaSingleJS,
    'single-thread/wllama.wasm': wllamaSingle,
    'multi-thread/wllama.js': wllamaMultiJS,
    'multi-thread/wllama.wasm': wllamaMulti,
    'multi-thread/wllama.worker.mjs': wllamaMultiWorker,
  };

const DEFAULT_CHAT_TEMPLATE = "{% for message in messages %}{{'<|im_start|>' + message['role'] + '\n' + message['content'] + '<|im_end|>' + '\n'}}{% endfor %}{% if add_generation_prompt %}{{ '<|im_start|>assistant\n' }}{% endif %}";

const engines = {
    completion: {
        model_src: "https://huggingface.co/HuggingFaceTB/smollm-360M-instruct-v0.2-Q8_0-GGUF/resolve/main/smollm-360m-instruct-add-basics-q8_0.gguf",
        instance: new Wllama(CONFIG_PATHS),
        loaded: false,
        download_percentage: 0,
        stop_signal: false
    }
}

let components = [];

async function loadModel(type = 'completion', cb = null) {
    // check if model already in cache
    const { instance, model_src } = engines[type];
    if(!await instance.cacheManager.getMetadata(model_src)) {
        await instance.downloadModel(model_src, {
            allowOffline: true,
            embeddings: type === 'embedding',
            progressCallback: ({loadedd, total})=>{
                engines[type].download_percentage = (loadedd / total) * 100;
                cb && cb(engines[type].download_percentage);
            }
        })
        engines[type].download_percentage = 100;
        cb && cb(100);
    }
    try {
        await instance.loadModelFromUrl(model_src);
    } catch(error) {
        console.error(error)
    } finally {
        engines[type].loaded = true;
        components.forEach(e=>e(engines));
    }
}

async function formatPrompt(messages) {
    const instance = engines['completion'].instance;
    if(!instance.isModelLoaded()) return;

    const template = new Template(
        instance.getChatTemplate() ?? DEFAULT_CHAT_TEMPLATE
    );
    return template.render({
        messages,
        bos_token: await instance.detokenize([instance.getBOS()]),
        eos_token: await instance.detokenize([instance.getEOS()]),
        add_generation_prompt: true,
    });
}

async function chatCompletions(messages, cb = null) {
    engines['completion'].stop_signal = false;
    const prompt = await formatPrompt(messages)
    const result = await engines['completion'].instance.createCompletion(prompt, {
        nPredict: 128,
        useCache: true,
        onNewToken: (token, piece, currentText, optionals) => {
            cb && cb(currentText, false);
            if(engines['completion'].stop_signal) optionals.abortSignal();
        }
    })
    engines['completion'].stop_signal = false;
    cb && cb(result, true);
    return result;
}

export default function useWllama() {
    const [enginesInfo, setEnginesInfo] = useState(engines);

    useEffect(()=>{
        components.push(setEnginesInfo);
        return ()=>{
            components = components.filter(e=>e!==setEnginesInfo);
        }
    }, [setEnginesInfo])

    return { enginesInfo, loadModel, chatCompletions }
}