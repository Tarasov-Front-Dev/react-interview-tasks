export * from './rollSlot'

export function classNames(...classes: unknown[]): string {
    return classes.filter(Boolean).join(' ')
}
