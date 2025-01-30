import { FunctionComponent } from "react"
import { ListItem } from "./list-item"
import { Event } from "./typings"

type ListProps = {
    hiddenFields: Set<keyof Event>
    events: Event[],
}

export const List: FunctionComponent<ListProps> = ({ events, hiddenFields }) => {

    return (
        <div className="mt-4 flex flex-col gap-3">
            {
                events.map((e, idx) => (
                    <ListItem
                        key={`${e.label}-${idx}`}
                        event={e}
                        hiddenFields={hiddenFields}
                    />
                ))
            }
        </div>
    )
}
