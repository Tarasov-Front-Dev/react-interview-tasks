import React from 'react'

type UseThrottleProps = (
    cb: (args: any) => any,
    timeout: number,
) => any

export const UseThrottle: UseThrottleProps = (cb, timeout) => {
    const timerRef = React.useRef<NodeJS.Timeout | undefined>()

    React.useEffect(() => () => clearTimeout(timerRef.current))

    return React.useCallback((...args: any[]) => {
        if (!timerRef.current) {
            timerRef.current = setTimeout(
                () => timerRef.current = undefined,
                timeout
            )

            // @ts-expect-error can't map spreat operator
            return cb(...args)
        }
    }, [cb, timeout])
}
