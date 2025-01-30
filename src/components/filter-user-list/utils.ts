import { URL_JSONPLACEHOLDER } from "./constants"
import { LoadingStatus } from "./typings"

export const fetchUsers = async (
    setFn: (data: any[]) => void,
    setError: (error: Error | undefined) => void,
    setLoadingStatus: (status: LoadingStatus) => void,
    signal: AbortSignal
) => {
    const url = new URL(URL_JSONPLACEHOLDER)
    url.pathname = 'users'
    setLoadingStatus(LoadingStatus.LOADING)

    try {
        await new Promise(res => setTimeout(() => res(null), 1_000))
        const response = await fetch(url, { signal })

        if (response.status !== 200) throw new Error('error')
        const data = await response.json()
        setFn(data)
        setError(undefined)
        setLoadingStatus(LoadingStatus.SUCCESS)

    } catch (error) {
        setError(error)
        setLoadingStatus(LoadingStatus.ERROR)
    }
}
