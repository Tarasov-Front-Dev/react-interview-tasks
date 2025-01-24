export const rollSlot = (
    onRoll: (val: number) => void,
    onStop: (val: number) => void
) => {
    let numberOfIteration = Math.floor(Math.random() * 10)

    iter()

    function iter(val = 0, timeout = 300) {
        setTimeout(() => {
            const nextValue = (val + 1) % 10
            onRoll(nextValue)

            if (--numberOfIteration > 0) {
                iter(nextValue, (timeout + 200) % 2_000)
            } else {
                onStop(nextValue)
            }
        }, timeout)
    }
}
