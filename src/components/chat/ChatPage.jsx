import { useRef, useState } from "react";
import { chatCompletions } from "../../utils/worker";

export default function ChatPage() {

    const [message, setMessage] = useState('');
    const [messageHistory, setMessageHistory] = useState([]);
    // const [pendingContent, setPendingContent] = useState('');
    const streamBubbleRef = useRef();

    function submitChat(event) {
        event.preventDefault();
        if(!message) return;
        setMessage('')

        const new_conversation = [...messageHistory, { role: 'user', content: message }];
        setMessageHistory(new_conversation);

        chatCompletions([{
            role: 'user', content: message
        }], (currentText, finished)=>{
            streamBubbleRef.current.textContent = currentText;
            if(finished) {
                setMessageHistory([...new_conversation, {
                    role: 'assistant',
                    content: currentText
                }])
                streamBubbleRef.current.textContent = ''
            }
        })
    }

    return (
        <div className="chat-main">
            <div className="conversation">
                { messageHistory.map(({role, content}, index)=>{
                    return (
                        <div 
                            key={`bubble-${index}`}
                            className={`bubble ${role}`}
                        >
                            { content }
                        </div>
                    )
                }) }
                <div ref={streamBubbleRef} className="bubble assistant empty"></div>
            </div>
            <form onSubmit={submitChat}>
                <input type="text" value={message} onInput={evt=>setMessage(evt.target.value)} />
                <button type="submit">submit</button>
            </form>
        </div>
    )
}