import React from 'react'
import { ItemList } from './ItemList'
import { ITEMS } from './constants'

export const RenderProp: React.FC = () => {
    return (
        <ItemList
            items={ITEMS}
            renderListItem={
                ({ id, text }) => (
                    <li
                        key={`${id}-${text}`}
                        className='rounded-md border bg-orange-400 px-4 py-2 text-xl text-zinc-100 hover:cursor-pointer hover:bg-orange-500'
                    >
                        {text}
                    </li>
                )
            }
        />
    )
}
