import React from "react"

export const RecoilListContext = React.createContext({
    headingLevel: 0,
})

export const useRecoilListContext = () => React.useContext(RecoilListContext)