import { Accordion } from "components/accordion"
import { useState } from "react"

export const AccordionPage = () => {
    const [currIndex, setCurrIndex] = useState(-1)

    const handleToggle = (idx: number) => {
        setCurrIndex(prev => prev === idx ? -1 : idx)
    }

    return (
        <Accordion>
            <Accordion.Item
                title='Tolya'
                isActive={currIndex === 0}
                onToggle={() => handleToggle(0)}
            >
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo dolore perspiciatis nihil rerum veritatis quos cum velit necessitatibus deserunt, obcaecati maiores doloremque quasi sit eveniet repellat earum aperiam autem sequi.</p>
            </Accordion.Item>
            <Accordion.Item
                title='Sveta'
                isActive={currIndex === 1}
                onToggle={() => handleToggle(1)}
            >
                <p>Choosing the Legal Form – Before you open a company in Serbia, you need to decide which type of business entity you wish to register.</p>
            </Accordion.Item>
        </Accordion>
    )
}
