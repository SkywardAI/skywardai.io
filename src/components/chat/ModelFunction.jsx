export default function ModelFunction({ text, onClick, className='' }) {
    return (
        <div className={`model-function clickable ${className || ''}`} onClick={onClick}>
            { text }
        </div>
    )
}