import { useRecoilState } from "recoil"
import { fontSizeState } from "../recoil-state"

import './recoil-text.css'

export const RecoilText = () => {
    const [fontSize] = useRecoilState(fontSizeState)

    return (
        <p
            className="recoil-text"
            style={{ fontSize, textAlign: 'justify' }}
        >
            Этот текст также будет увеличиваться в размерах
        </p>
    )
}
