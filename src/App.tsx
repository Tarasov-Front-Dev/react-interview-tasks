import { RecoilApp, RetryFunction } from "components"

function App() {
    // const fn = (text: string, retries?: number) => console.log(new Date(Date.now()).getSeconds(), text, 'retries:', retries)
    // const throttledFn = UseThrottle(fn, 2_000)
    // const debauncedFn = UseDebaunce2(fn, 1_000)

    // const retries = 0

    return (
        <div className="px-8">
            <RetryFunction />
            {/* <TrafficLight />
            <div className="mb-4 flex max-w-fit flex-col gap-4 p-4">
                <button className="rounded-xl border bg-purple-600 px-4 py-2 text-lg font-bold text-neutral-50 transition-all active:bg-purple-700" onClick={() => throttledFn('throttled', ++retries)}>
                    ThrottledFn
                </button>
                <button className="rounded-xl border bg-purple-600 px-4 py-2 text-lg font-bold text-neutral-50 transition-all active:bg-purple-700" onClick={() => debauncedFn('debaunced', ++retries)}>
                    DebauncedFn
                </button>
            </div>
            <div className="my-8 px-8">
                <SlotMachine />
            </div>
            <div className="my-8 px-8">
                <TravelPlan />
            </div>
            <ReducerExercise2 />
            <EventsPage />

            <ThemeContextProvider>
                <FilterUserList />
            </ThemeContextProvider>
            <Lexical />
            <Todos /> */}
            {/* <RenderProp /> */}
            {/* <AccordionPage /> */}
            <RecoilApp />
        </div>
    )
}

export default App
