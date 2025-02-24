type RetryParameters = (
    cb: (args: any) => any,
    retries: number,
    timeout: number,
) => any

export const retry: RetryParameters = (cb, retries, timeout) => {
    let retriesLeft = retries
    let timerId: NodeJS.Timeout | undefined = undefined

    return (...args: any[]) => {
        if (retriesLeft-- > 0) {
            if (timerId === undefined) {
                timerId = setTimeout(
                    () => {
                        retriesLeft = retries
                        timerId = undefined
                    },
                    timeout
                )
            }

            // @ts-expect-error can't map spreat operator
            return cb(...args)
        }

        console.log('function call denied')
    }
}