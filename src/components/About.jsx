import useWllama from "../utils/worker"

export default function Navigator() {
    const { loadModel, chatCompletions } = useWllama();

    async function testCompletion() {
        await loadModel();
        chatCompletions([
            {role: 'user', content: "Hello, how's the day?"}
        ], (content, isFinished) => {
            console.log(content, isFinished)
        })
    }

    return (
        <div>
            <h1>about page</h1>
            <button onClick={testCompletion}>click me</button>
        </div>
    )
}