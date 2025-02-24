import React from "react"

type UseDebaunceProps = (
    cb: (args: any) => any,
    timeout: number,
) => any

export const UseDebaunce2: UseDebaunceProps = (cb, timeout) => {
    const timerRef = React.useRef<NodeJS.Timeout | undefined>()

    React.useEffect(() => () => clearTimeout(timerRef.current))

    return React.useCallback(
        (...args: any[]) => {
            clearTimeout(timerRef.current)

            timerRef.current = setTimeout(
                // @ts-expect-error can't map spreat operator
                () => cb(...args),
                timeout
            )
        },
        [cb, timeout]
    )
}