import React, { PropsWithChildren } from "react"
import { RecoilListContext, useRecoilListContext } from "./recoil-list-context"

export const RecoilList: React.FC<PropsWithChildren> = ({ children }) => {
    const { headingLevel } = useRecoilListContext()

    return (
        <ul className="rounded-lg border-slate-950 py-2 ps-3">
            <RecoilListContext.Provider value={{ headingLevel: headingLevel + 1 }}>
                {children}
            </RecoilListContext.Provider>
        </ul>
    )
}
