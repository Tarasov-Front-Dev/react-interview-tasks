import { TrafficColors, TrafficLight } from "./typings"

export const TRAFFIC_LIGHTS_WITH_TIMEOUTS: TrafficLight[] = [
    { color: TrafficColors.RED, timeout: 1_000 },
    { color: TrafficColors.YELLOW, timeout: 1_000 },
    { color: TrafficColors.GREEN, timeout: 1_000 },
]