import { ChangeEvent, useState } from "react"
import { EVENTS } from "./constants"
import { Fields } from "./fields"
import { List } from "./list"
import { Event } from "./typings"

export const EventsPage = () => {
    const [hiddenFields, setHiddenFields] = useState<Set<keyof Event>>(new Set())

    const handleChangeFilter = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target
        if (checked) {
            hiddenFields.add(name)
            setHiddenFields(new Set(hiddenFields))
        } else {
            hiddenFields.delete(name)
            setHiddenFields(new Set(hiddenFields))
        }
    }

    return (
        <section className="flex gap-4">
            <div className="flex flex-col gap-2">
                <h3>Filters</h3>
                <Fields
                    hiddenFields={hiddenFields}
                    onChange={handleChangeFilter}
                />
            </div>
            <List
                events={EVENTS}
                hiddenFields={hiddenFields}
            />
        </section>
    )
}
