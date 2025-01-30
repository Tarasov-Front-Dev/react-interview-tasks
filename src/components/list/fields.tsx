import { ChangeEvent, FunctionComponent } from "react"
import { FIELDS } from "./constants"
import { Event } from "./typings"

type FieldsProps = {
    hiddenFields: Set<keyof Event>
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const Fields: FunctionComponent<FieldsProps> = ({ hiddenFields, onChange }) => {
    return (
        <>
            {
                FIELDS.map(field => (
                    <div key={field}>
                        <input
                            className="mr-2 hover:cursor-pointer"
                            type="checkbox"
                            name={field}
                            checked={hiddenFields.has(field)}
                            id={field}
                            onChange={onChange}
                        />
                        <label htmlFor="filter">{field}</label>
                    </div>
                ))
            }
        </>
    )
}
