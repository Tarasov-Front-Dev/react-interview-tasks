import { RenderProp } from "./patterns-react/render-prop/RenderProp"

function App() {
    // const fn = () => console.log(new Date(Date.now()).getSeconds())
    // const throttledFn = useThrottle(fn, 2_000)
    // const debauncedFn = useDebauncer(fn, 2_000)

    return (
        <div className="px-8">
            {/* <TrafficLight />
            <div className="mb-4 flex max-w-fit flex-col gap-4 p-4">
                <button className="rounded-xl border bg-purple-600 px-4 py-2 text-lg font-bold text-neutral-50 transition-all active:bg-purple-700" onClick={throttledFn}>
                    ThrottledFn
                </button>
                <button className="rounded-xl border bg-purple-600 px-4 py-2 text-lg font-bold text-neutral-50 transition-all active:bg-purple-700" onClick={debauncedFn}>
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
            <RenderProp />
        </div>
    )
}

export default App
