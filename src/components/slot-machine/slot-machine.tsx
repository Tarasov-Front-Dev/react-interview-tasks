import { FunctionComponent, useRef, useState } from "react"
import { rollSlot } from "utils"
import { SlotItem } from "./slot-item"

const NUMBER_OF_ROLLS = 2

export const SlotMachine: FunctionComponent = () => {
    const [winner, setWinner] = useState<boolean | undefined>(undefined)
    const [isRolling, setIsRolling] = useState(false)
    const [rollValuesState, setRollValuesState] = useState<number[]>(() => new Array(NUMBER_OF_ROLLS).fill(0))
    const rollValues = useRef<number[]>([])

    const resetAllValues = () => {
        setRollValuesState(new Array(NUMBER_OF_ROLLS).fill(0))
        setWinner(undefined)
        rollValues.current = []
    }

    const checkWinner = () => {
        const hasWinner = rollValues.current.every(v => rollValues.current[0] === v)

        if (hasWinner) setWinner(true)
        else setWinner(false)
    }

    const onStop = (val: number) => {
        rollValues.current.push(val)

        if (rollValues.current.length === NUMBER_OF_ROLLS) {
            checkWinner()
            setIsRolling(false)
        }
    }

    const startRolling = () => {
        resetAllValues()
        setIsRolling(true)

        new Array(NUMBER_OF_ROLLS).fill(null).forEach((_, idx) => {
            rollSlot((v) => setRollValuesState(prev => prev.with(idx, v)), onStop)
        })
    }

    return (
        <>
            <div className="flex flex-col gap-4">
                <button className="rounded-xl border bg-green-600 px-4 py-2 text-lg font-bold text-neutral-50 transition-all active:bg-purple-700 disabled:bg-slate-300" onClick={startRolling} disabled={isRolling}>
                    Roll Slot
                </button>
                <div className="flex gap-3 self-center">
                    {Array.from({ length: NUMBER_OF_ROLLS }, (_, idx) => (
                        <SlotItem key={idx} val={rollValuesState[idx]} />
                    ))}
                </div>
                {winner && <h2 className="self-center text-3xl">WINNER!</h2>}
            </div>
        </>
    )
}
