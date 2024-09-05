import { useRef, useState } from "react";
import { chatCompletions } from "../../utils/worker";

export default function ChatPage() {

    const [message, setMessage] = useState('');
    const outputRef = useRef();

    function submitChat(event) {
        event.preventDefault();
        if(!message) return;
        setMessage('')
        chatCompletions([{
            role: 'user', content: message
        }], (currentText, finished)=>{
            console.log(currentText)
            outputRef.current.textContent = currentText;
            if(finished) outputRef.current.textContent += ' (finished)'
        })
    }

    return (
        <form onSubmit={submitChat}>
            <div ref={outputRef}></div>
            <input type="text" value={message} onInput={evt=>setMessage(evt.target.value)} />
            <button type="submit">submit</button>
        </form>
    )
}