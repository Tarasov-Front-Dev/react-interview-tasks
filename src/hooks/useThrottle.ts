import { useCallback, useEffect, useRef } from "react"

export const useThrottle = <A, T>(cb: (...args: A[]) => T, timeout: number) => {
    const isThrottled = useRef(false)
    const timerIdRef = useRef<NodeJS.Timeout | undefined>()
    const cbRef = useRef(cb)

    useEffect(() => () => clearTimeout(timerIdRef.current), [])

    return useCallback(
        (...args: A[]): T | undefined => {
            if (isThrottled.current) return

            isThrottled.current = true

            timerIdRef.current = setTimeout(
                () => isThrottled.current = false,
                timeout
            )

            return cbRef.current(...args)
        },
        [timeout]
    )
}
