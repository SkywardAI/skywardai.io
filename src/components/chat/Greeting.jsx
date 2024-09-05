export default function Greeting({ message, children }) {
    return (
        <div className="greeting">
            <div className="message">{ message }</div>
            { children }
        </div>
    )
}