import React from "react"

export const Accordion = ({ children }: { children: React.ReactNode }) => {
    return <div className="flex flex-col">{children}</div>
}

import './accordion.css'

type AccordionItemProps = {
    title: string
    isActive: boolean
    onToggle: () => void
} & React.PropsWithChildren

Accordion.Item = ({ title, children, isActive, onToggle }: AccordionItemProps) => (
    <div>
        <div className="grid-wrapper">
            <span className="mr-8 text-2xl font-bold hover:cursor-pointer hover:bg-neutral-300" onClick={onToggle}>{title}</span>
            <button className="w-8 rounded-md border bg-fuchsia-400 hover:cursor-pointer" onClick={onToggle}>{isActive ? '-' : '+'}</button>
        </div>
        {isActive && <div>{children}</div>}
    </div>
)


Accordion.Item.displayName = 'AccordionItem'
