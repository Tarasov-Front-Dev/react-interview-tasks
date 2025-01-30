import { useCallback, useEffect, useRef } from "react"

export const useDebounce = (cb: (...args: any[]) => void, timeout: number) => {
    const timerRef = useRef<NodeJS.Timeout>()

    useEffect(() => () => clearTimeout(timerRef.current), [])

    return useCallback((...args: any[]) => {
        clearTimeout(timerRef.current)

        timerRef.current = setTimeout(() => {
            cb(...args)
        }, timeout)
    }, [cb, timeout])
}
