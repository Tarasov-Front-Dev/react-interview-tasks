import { useThrottle } from "hooks"
import { useEffect, useMemo, useRef, useState } from "react"
import { useThemeContex } from "./context/themeContext"
import { useDebounce } from "./hooks/useDebounce"
import { LoadingStatus } from "./typings"
import { fetchUsers } from "./utils"

export const FilterUserList = () => {
    const [users, setUsers] = useState<any[] | undefined>()
    const [error, setError] = useState<Error | undefined>()
    const [loadingStatus, setLoadingStatus] = useState(LoadingStatus.PENDING)
    const [filter, setFilter] = useState('')
    const [sortOrder, setSortOder] = useState<'asc' | 'des' | undefined>()
    const { theme, toggleTheme } = useThemeContex()
    const footerElRef = useRef(null)
    const didMountRef = useRef(false)
    const debouncedFetchUsers = useDebounce(fetchUsers, 2_000)

    const throttledFn = (val: number) => {
        console.log(Math.floor(val / 1000) % 10)
    }
    const throttledFnUsers = useThrottle(throttledFn, 2_000)

    useEffect(() => {
        const abortController = new AbortController()
        fetchUsers(setUsers, setError, setLoadingStatus, abortController.signal)

        return () => abortController.abort()
    }, [])

    const handleDebouncedFetch = () => {
        debouncedFetchUsers(setUsers, setError, setLoadingStatus)
    }

    const handleThrottledFn = () => {
        throttledFnUsers(Date.now())
    }

    const filteredUsers = useMemo(() => {
        return users
            ?.filter(user => user.name.toLowerCase()
                .includes(filter.toLowerCase()))
    }, [filter, users])

    const sortedUsers = useMemo(() => {
        if (sortOrder === 'des') {
            return filteredUsers?.sort((a, b) => b.name.localeCompare(a.name))
        }

        return filteredUsers?.sort((a, b) => a.name.localeCompare(b.name))
    }, [filteredUsers, sortOrder])

    useEffect(() => {
        let observer: IntersectionObserver | undefined = undefined
        if (footerElRef.current && didMountRef.current) {
            observer = new IntersectionObserver((entries) => {
                if (entries[0].intersectionRatio <= 0) return
                console.log('LOAD MORE ITEMS')
            })

            observer.observe(footerElRef.current)
        }

        didMountRef.current = true

        return () => observer?.disconnect()
    }, [])

    return (
        <section className="mt-4">
            <button className="border px-2 py-1" onClick={toggleTheme}>TOGGLE Theme</button>
            <h1>{theme}</h1>
            <button onClick={handleDebouncedFetch} className="border px-2 py-1">Debounce Fn</button>
            <button onClick={handleThrottledFn} className="border px-2 py-1">Throttle Fn</button>
            <br />
            <button onClick={() => setSortOder("asc")} className="border px-2 py-1">Ascending</button>
            <button onClick={() => setSortOder("des")} className="border px-2 py-1">Descending</button>
            <br />
            <input value={filter} onChange={e => setFilter(e.target.value)} className="border" placeholder="Search name" />
            <div>
                <h2>USER LIST</h2>
                {sortedUsers && sortedUsers.length > 0 && (
                    sortedUsers.map(user => (
                        <div key={user.id}>{user.name}</div>
                    ))
                )}
                {loadingStatus === LoadingStatus.LOADING && <h2>Loading...</h2>}
                {error && <h2>{error.message}</h2>}
            </div>
            <div className="h-96 border"></div>
            <div className="collapse" ref={footerElRef}></div>
        </section>
    )
}
