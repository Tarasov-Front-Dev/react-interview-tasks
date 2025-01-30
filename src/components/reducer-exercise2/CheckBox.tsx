import { ChangeEvent, memo } from "react"

type CheckBoxProps = {
    checked: boolean
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const CheckBox = memo(function CheckBox({ checked, onChange }: CheckBoxProps) {
    return (
        <input
            name='checkbox'
            type='checkbox'
            checked={checked}
            onChange={onChange}
        />
    )
})

export default CheckBox