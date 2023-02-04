const foo = (name: string, age: number, foo: boolean) => `${name}-${age}-${foo}`

// Implement
type Parameters_<F extends ((...args: any[]) => any)> = F extends ((...args: infer A) => any) ? A : never

// REPLACE any with infer A
// GUARD with extends .... : never
type test08_0 = Parameters<typeof foo> // [string, number, boolean]
type test08 = Parameters_<typeof foo>

const noPoniesHere = <T>(arg: (keyof T extends 'pony' ? never : T)) => { arg }
noPoniesHere({ pony_: 1 })
// type test09 = Head<[1, 2, string, number]
