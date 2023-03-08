export type Mods = Record<string, boolean | string | undefined>


export function classNames(cls:string, mods: Mods = {}, addictional: Array<string | undefined> = []): string {
	return [
		cls,
		...addictional.filter(Boolean),
		...Object.entries(mods)
			.filter(([classname, value]) => Boolean(value))
			.map(([classname, value]) => classname)
	].join(" ")
}