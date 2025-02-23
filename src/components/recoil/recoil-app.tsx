import { RecoilRoot } from "recoil"
import { RecoilButton } from "./recoil-button/recoil-button"
import { RecoilListItem } from "./recoil-list-item/recoil-list-item"
import { RecoilList } from "./recoil-list/recoil-list"
import { RecoilText } from "./recoil-text/recoil-text"

export const RecoilApp: React.FC = () => {
    return (
        <RecoilRoot>
            <RecoilButton sign={-1}>Decrement Font Size</RecoilButton>
            <RecoilButton sign={1}>Increment Font Size</RecoilButton>
            <RecoilText />
            <RecoilList>
                <RecoilListItem>Title</RecoilListItem>
                <RecoilList>
                    <RecoilListItem>Sub-heading</RecoilListItem>
                    <RecoilListItem>Sub-heading</RecoilListItem>
                    <RecoilList>
                        <RecoilListItem>Sub-sub-heading</RecoilListItem>
                        <RecoilListItem>Sub-sub-heading</RecoilListItem>
                        <RecoilListItem>Sub-sub-heading</RecoilListItem>
                        <RecoilList>
                            <RecoilListItem>Sub-sub-sub-heading</RecoilListItem>
                            <RecoilListItem>Sub-sub-sub-heading</RecoilListItem>
                            <RecoilListItem>Sub-sub-sub-heading</RecoilListItem>
                            <RecoilListItem>Sub-sub-sub-heading</RecoilListItem>
                            <RecoilList>
                                <RecoilListItem>Sub-sub-sub-sub-heading</RecoilListItem>
                                <RecoilListItem>Sub-sub-sub-sub-heading</RecoilListItem>
                                <RecoilListItem>Sub-sub-sub-sub-heading</RecoilListItem>
                                <RecoilListItem>Sub-sub-sub-sub-heading</RecoilListItem>
                                <RecoilListItem>Sub-sub-sub-sub-heading</RecoilListItem>
                                <RecoilList>
                                    <RecoilListItem>Sub-sub-sub-sub-sub-heading</RecoilListItem>
                                    <RecoilListItem>Sub-sub-sub-sub-sub-heading</RecoilListItem>
                                    <RecoilListItem>Sub-sub-sub-sub-sub-heading</RecoilListItem>
                                    <RecoilListItem>Sub-sub-sub-sub-sub-heading</RecoilListItem>
                                    <RecoilListItem>Sub-sub-sub-sub-sub-heading</RecoilListItem>
                                    <RecoilListItem>Sub-sub-sub-sub-sub-heading</RecoilListItem>
                                </RecoilList>
                            </RecoilList>
                        </RecoilList>
                    </RecoilList>
                </RecoilList>
            </RecoilList>
        </RecoilRoot>
    )
}
