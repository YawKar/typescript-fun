declare let obj1: {};
// {} is literally any type (doesn't matter primitive or not) that is not null or undefined
declare let obj2: object;
// object is any non-primitive type (not null and not undefined)

// don't work
// obj1 = null;
// obj1 = undefined;

// neither
// obj2 = null;
// obj2 = undefined;

obj1 = {} as number | string | boolean | symbol;
// don't work
// obj2 = {} as number;
// obj2 = {} as string;
// obj2 = {} as boolean;
// obj2 = {} as symbol;

obj1 = {} as Array<any> | Promise<any> | { [index: string]: number };
obj2 = {} as Array<any> | Promise<any> | { [index: string]: number };
