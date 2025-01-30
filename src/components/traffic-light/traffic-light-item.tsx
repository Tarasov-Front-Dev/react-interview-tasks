import { FunctionComponent } from "react"
import { TrafficColors } from "./typings"

type TrifficLightItemProps = {
    color: TrafficColors
}

export const TrifficLightItem: FunctionComponent<TrifficLightItemProps> = ({ color }) => {
    return (
        <div className="flex size-12 items-center justify-center rounded-full" style={{ backgroundColor: color }}>
            <span>{color.toUpperCase()}</span>
        </div>
    )
}
