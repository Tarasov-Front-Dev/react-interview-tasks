import { Event } from "./typings"

export const EVENTS: Event[] = [
    { dataCenter: 'data-center1', label: '111', useremail: 'aaa@gmail.com' },
    { dataCenter: 'data-center2', label: '222', useremail: 'bbb@gmail.com' },
    { dataCenter: 'data-center3', label: '333', useremail: 'ccc@gmail.com' },
]

export const FIELDS: (keyof Event)[] = ['dataCenter', 'label', 'useremail']