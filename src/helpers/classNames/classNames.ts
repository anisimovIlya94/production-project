type Mods = Record<string, boolean | string>


export function classNames(cls:string, mods: Mods, addictional:string[]): string {
    return [
        cls,
        ...addictional,
        ...Object.entries(mods)
            .filter(([classname, value]) => Boolean(value))
            .map(([classname, value]) => classname)
    ].join(" ")
}