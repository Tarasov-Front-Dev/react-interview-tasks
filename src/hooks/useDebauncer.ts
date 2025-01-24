import { useCallback, useEffect, useRef } from "react"

export const useDebauncer = <A>(cb: (...args: A[]) => void, timeout: number) => {
    const cbRef = useRef(cb)
    const timerIdRef = useRef<NodeJS.Timeout | undefined>()

    useEffect(() => () => clearTimeout(timerIdRef.current))

    return useCallback(
        (...args: A[]) => {
            clearTimeout(timerIdRef.current)

            timerIdRef.current = setTimeout(() => {
                cbRef.current(...args)
            }, timeout)
        },
        [timeout]
    )
}