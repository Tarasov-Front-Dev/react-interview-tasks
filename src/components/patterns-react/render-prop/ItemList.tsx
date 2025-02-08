import React from 'react'
import { ITEMS } from './constants'

type ItemListProps = {
    items: typeof ITEMS
    renderListItem: (item: typeof ITEMS[number]) => React.ReactNode
}

export const ItemList: React.FC<ItemListProps> = ({ items, renderListItem }) => {
    return (
        <ul className='flex flex-col gap-2'>
            {items.map((item) => (
                renderListItem(item)
            ))}
        </ul>
    )
}
