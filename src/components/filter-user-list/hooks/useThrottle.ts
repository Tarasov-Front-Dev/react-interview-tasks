import { useCallback, useRef } from "react"

export const useThrottle = (cb: (...args: any[]) => void, timeout: number) => {
    const timerRef = useRef<NodeJS.Timeout>()

    return useCallback((...args: any[]) => {
        if (timerRef.current) return

        cb(...args)
        timerRef.current = setTimeout(() => clearTimeout(timerRef.current), timeout)
    }, [cb, timeout])
}
