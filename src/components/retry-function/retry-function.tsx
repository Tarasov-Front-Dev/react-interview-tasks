import { retry } from "utils/retry"

export const RetryFunction = () => {
    let retries = 0
    const fn = (text: string) => console.log(text, ++retries)
    const retryFn = retry(fn, 3, 3_000)

    const cb = () => {
        const intervalId = setInterval(() => retryFn('retry:'), 300)

        setTimeout(() => {
            clearInterval(intervalId)
            console.log('interval cleared')
        }, 9_000)
    }

    return (
        <button className="rounded-xl border bg-purple-600 px-4 py-2 text-lg font-bold text-neutral-50 transition-all active:bg-purple-700" onClick={cb}>
            RetryFunction
        </button>
    )
}
