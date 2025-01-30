import { useEffect, useState } from "react"
import { TRAFFIC_LIGHTS_WITH_TIMEOUTS } from "./constants"
import { TrifficLightItem } from "./traffic-light-item"

export const TrafficLight = () => {
    const [colorIdx, setColorIdx] = useState(0)
    const { color, timeout } = TRAFFIC_LIGHTS_WITH_TIMEOUTS[colorIdx % TRAFFIC_LIGHTS_WITH_TIMEOUTS.length]

    useEffect(() => {
        const timerId = setTimeout(
            () => setColorIdx(prev => prev + 1),
            timeout
        )

        return () => clearTimeout(timerId)
    }, [colorIdx])

    return <TrifficLightItem color={color} />
}
