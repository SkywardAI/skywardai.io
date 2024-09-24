import { useEffect, useState } from "react";
import { isModelDownloaded, downloadModel, deleteModel, loadModel }  from "../../utils/worker"
import { modelStatus } from "../../utils/types";
import Greeting from "./Greeting";
import ModelFunction from "./ModelFunction";
import ChatPage from "./ChatPage";

export default function Chat() {

    const [model_status, setModelStatus] = useState(modelStatus.PENDING);
    const [download_progress, setDownloadProgress] = useState(0);

    useEffect(()=>{
        (async function() {
            setModelStatus(
                await isModelDownloaded() ? 
                modelStatus.NOT_LOADED : modelStatus.NOT_DOWNLOAD
            )
        })()
    }, [])

    async function run(type) {
        switch(type) {
            case 'download':
                setModelStatus(modelStatus.DOWNLOADING);
                await downloadModel("completion", (progress)=>{
                    setDownloadProgress(progress);
                })
                setModelStatus(modelStatus.NOT_LOADED);
                break;
            case 'delete':
                await deleteModel();
                setModelStatus(modelStatus.NOT_DOWNLOAD);
                break;
            case 'load': default:
                setModelStatus(modelStatus.LOADING);
                await loadModel() && setModelStatus(modelStatus.LOADED)
                break;
        }
    }

    return (
        <div className="chat-page">
            {
                model_status === modelStatus.PENDING ? 
                <Greeting message={"Checking model status, please wait..."} /> : 
                model_status === modelStatus.NOT_DOWNLOAD ? 
                <Greeting message={"To try chat, you need to download a model around 386 MB. You can download below and delete it anytime you want."}>
                    <ModelFunction text={"Download Model"} onClick={()=>run('download')} />
                </Greeting> : 
                model_status === modelStatus.NOT_LOADED ? 
                <Greeting message={"Found model in cache, you can load or delete it now."}>
                    <ModelFunction text={"Load Model"} onClick={()=>run('load')} />
                    <ModelFunction text={"Delete Model"} className="dangerous" onClick={()=>run('delete')} />
                </Greeting>  : 
                model_status === modelStatus.DOWNLOADING ? 
                <Greeting message={"Downloading model, please wait..."}>
                    <div>{download_progress}</div>
                </Greeting> : 
                model_status === modelStatus.LOADING ? 
                <Greeting message={"Loading model, please wait..."} /> : 
                
                <ChatPage />
            }
        </div>
    )
}