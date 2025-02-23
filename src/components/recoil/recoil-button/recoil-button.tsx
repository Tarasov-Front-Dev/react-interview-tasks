import { PropsWithChildren } from "react"
import { useRecoilState } from "recoil"
import { fontSizeState } from "../recoil-state"

type RecoilButtonProps = {
    sign?: number
} & PropsWithChildren

export const RecoilButton: React.FC<RecoilButtonProps> = ({ children, sign = 1 }) => {
    const [fontSize, setFontSize] = useRecoilState(fontSizeState)

    const onClick = () => {
        setFontSize(`${parseFloat(fontSize) + 0.15 * sign}rem`)
    }

    return (
        <button
            onClick={onClick}
            className="me-3 w-28 rounded-lg border-zinc-300 bg-purple-500 px-5 py-2 text-slate-100 last-of-type:me-0 active:bg-purple-600"
        >
            {children}
        </button>
    )
}
