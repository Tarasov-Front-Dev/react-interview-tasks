import React, { PropsWithChildren } from "react"
import { useRecoilState } from "recoil"
import { useRecoilListContext } from "../recoil-list/recoil-list-context"
import { fontSizeState } from "../recoil-state"

export const RecoilListItem: React.FC<PropsWithChildren> = ({ children }) => {
    const { headingLevel } = useRecoilListContext()
    const [fontSize] = useRecoilState(fontSizeState)

    const currFontSize = parseFloat(fontSize) * 2.5 - 0.25 * headingLevel + 'rem'
    const fontWeight = parseFloat(fontSize) * 800 - 100 * headingLevel

    const listItem = React.createElement(
        `h${headingLevel}`,
        { style: { fontSize: currFontSize, fontWeight } },
        children,
    )

    return (
        <>
            {listItem}
        </>
    )
}
