export const isServer = typeof window === "undefined",
	isEmpty = (obj: Object) =>
		Object.entries(obj).length === 0 && obj.constructor === Object