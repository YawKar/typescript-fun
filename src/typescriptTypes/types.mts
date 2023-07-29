const number: number = 123;
const string: string = "hello";
const boolean: boolean = true;
const any: any = { l: { iterally: "any" } };
const _void: void = void "anything turns to undefined after 'void' operator"; // undefined
const _null: null = null;
const _undefined: undefined = void undefined; // undefined
declare const never: never;
const object: object = [1, 2, 3];
const emptyLiteral: {} = 1;
const symbol: symbol = Symbol("an example");
enum NonConstEnum {
  VarA,
  VarB,
}
const tuple: [number, string, boolean] = [0, String(0), Boolean(0)];
const array: Array<number> = [1, 2, 3] as number[];
{
  let union: number | string | boolean = 1;
  union = "string";
  union = false;
}
const intersection: { name: string } & { age: number } = {
  name: "Mr.Robot",
  age: 53,
};
type AliasForPerson = typeof intersection;
