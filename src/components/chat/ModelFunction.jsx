export default function ModelFunction({ text, onClick, className='' }) {
    return (
        <div className={`model-function ${className || ''}`} onClick={onClick}>
            { text }
        </div>
    )
}