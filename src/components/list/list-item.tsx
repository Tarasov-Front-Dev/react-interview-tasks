import { FunctionComponent } from "react"
import { FIELDS } from "./constants"
import { Event } from "./typings"

type ListItemProps = {
    event: Event,
    hiddenFields: Set<keyof Event>
}

export const ListItem: FunctionComponent<ListItemProps> = ({ event, hiddenFields }) => {
    return (
        <div className="flex gap-2 border px-4 py-2">
            {FIELDS.map(field => (
                !hiddenFields.has(field) && <div key={field}>{event[field]}</div>
            ))}
        </div>
    )
}
