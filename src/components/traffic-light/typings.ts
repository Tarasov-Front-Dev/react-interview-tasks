export enum TrafficColors {
    RED = 'red',
    YELLOW = 'yellow',
    GREEN = 'green'
}

export type TrafficLight = {
    color: TrafficColors
    timeout: number
}
