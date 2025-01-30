import { useEffect, useRef } from "react"

const useDidMount = (cb: () => (() => void) | undefined) => {
    const mountRef = useRef(false)

    useEffect(() => {
        if (mountRef.current) return

        const cleanupFn = cb()
        mountRef.current = true

        return () => { console.log('CLEANUP'); cleanupFn && cleanupFn() }
    }, [cb])

    return (
        <div>useDidMount</div>
    )
}

export default useDidMount