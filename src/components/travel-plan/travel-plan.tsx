import { initialTravelPlan } from './constants.js'
import { PlaceTree } from './place-tree.js'


export function TravelPlan() {
    const planets = initialTravelPlan.childPlaces

    return (
        <>
            <h2 className='text-lg font-bold'>Places to Visit</h2>
            <ol className='ps-5'>
                {planets.map(
                    planet => (
                        <PlaceTree
                            key={planet.id}
                            place={planet}
                        />
                    )
                )}
            </ol>
        </>
    )
}
