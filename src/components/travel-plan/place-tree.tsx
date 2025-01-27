import { Place } from "./typings"

type PlaceTreeProps = {
    place: Place
}

export function PlaceTree({ place }: PlaceTreeProps) {
    const { title, childPlaces } = place

    return (
        <li className='list-decimal'>
            <h3>{title}</h3>

            {childPlaces.length > 0 && (
                <ol key={place.id} className="ps-10">
                    {
                        childPlaces.map(
                            place => <PlaceTree key={place.id} place={place} />
                        )
                    }
                </ol>
            )}
        </li>
    )
}