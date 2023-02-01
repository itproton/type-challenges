const foo = (name: string, age: number, foo: boolean) => `${name}-${age}-${foo}`

// Implement
type Parameters_<F extends ((...args: any[]) => any)> = F extends ((...args: infer A) => any) ? A : never

// REPLACE any with infer A
// GUARD with extends .... : never
type test08_0 = Parameters<typeof foo> // [string, number, boolean]
type test08 = Parameters_<typeof foo>
