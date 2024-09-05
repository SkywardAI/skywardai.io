import { useEffect, useRef, useState } from "react";
import { abortCompletion, chatCompletions } from "../../utils/worker";
import { CircleFill } from 'react-bootstrap-icons'
import { Send } from "react-bootstrap-icons";
import { StopCircleFill } from "react-bootstrap-icons";
import Markdown from 'react-markdown'

export default function ChatPage() {

    const [message, setMessage] = useState('');
    const [messageHistory, setMessageHistory] = useState([]);
    const [pendingContent, setPendingContent] = useState('');
    const [isDoingInference, toggleDoingInference] = useState(false)
    const convRef = useRef();

    function submitChat(event) {
        event.preventDefault();
        if(isDoingInference || !message) return;
        setMessage('')

        const new_conversation = [...messageHistory, { role: 'user', content: message }];
        setMessageHistory(new_conversation);
        toggleDoingInference(true);
        chatCompletions([{
            role: 'user', content: message
        }], (currentText, finished)=>{
            setPendingContent(currentText);
            if(finished) {
                setMessageHistory([...new_conversation, {
                    role: 'assistant',
                    content: currentText
                }])
                toggleDoingInference(false);
                setPendingContent('');
            }
        })
    }
    
    useEffect(()=>{
        convRef.current && convRef.current.scrollTo({
            top: convRef.current.scrollHeight,
            behavior: 'smooth'
        })
    }, [messageHistory, pendingContent])

    return (
        <div className="chat-main">
            <div className="conversation" ref={convRef}>
                {
                    messageHistory.map(({role, content}, index)=>{
                        return (
                            <div 
                                key={`bubble-${index}`}
                                className={`bubble ${role}`}
                            >
                                { role === 'user' ? content : <Markdown>{content}</Markdown> }
                            </div>
                        )
                    })
                }
                <div className={`bubble assistant${isDoingInference ? '' : ' empty'}`}>
                    { 
                        pendingContent ? 
                        <Markdown>{pendingContent}</Markdown>
                        : <>
                        <CircleFill className="dot-animation" />
                        <CircleFill className="dot-animation" />
                        <CircleFill className="dot-animation" />
                        </> 
                    }
                </div>
            </div>
            <form className="user-message-form" onSubmit={submitChat}>
                <input 
                    type="text" className="message" 
                    value={message} onInput={evt=>setMessage(evt.target.value)} 
                    placeholder="Ask me anything you want!"
                />
                <div className="button-container">
                    <button type="submit" className={`clickable${isDoingInference ? ' disabled' : ''}`}></button>
                    {isDoingInference ? <StopCircleFill className="icon clickable" onClick={abortCompletion} /> : <Send className="icon" />}
                </div>
            </form>
        </div>
    )
}