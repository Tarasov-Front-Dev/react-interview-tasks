import { FunctionComponent } from "react"

type SlotItemProps = {
    val: number
}

export const SlotItem: FunctionComponent<SlotItemProps> = ({ val }) => {
    return (
        <h2
            className="self-center text-3xl"
        >
            {val}
        </h2>
    )
}
