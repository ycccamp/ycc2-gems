export const isServer = typeof window === 'undefined',
    isBlank = (object: object) => JSON.stringify(object) === '{}'
