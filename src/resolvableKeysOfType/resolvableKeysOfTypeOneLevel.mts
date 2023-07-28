type ResolvableKeysOf<
  Type,
  AllowedValueTypes,
  Keys extends keyof Type = keyof Type
> = {
  [Key in Keys]: Type[Key] extends
    | AllowedValueTypes
    | Promise<AllowedValueTypes>
    | ((...args: any) => AllowedValueTypes)
    | ((...args: any) => Promise<AllowedValueTypes>)
    ? Key
    : never;
}[Keys];

class Test {
  public a = 1;
  public b = 2;
  public c = Promise.resolve(3);
  public d = () => 5;
  public e = () => Promise.resolve(6);

  public x = "not";
  public y = Promise.resolve(null);
  public z = () => true;

  public xy = "not" as string | Promise<null>;
  public yz = null as null | (() => true);
  public xz = "not" as string | (() => true);
}

type NumberKeys = ResolvableKeysOf<Test, number>; // "a" | "b" | "c" | "d" | "e"
type StringKeys = ResolvableKeysOf<Test, string>; // "x"
type NullKeys = ResolvableKeysOf<Test, null>; // "y"
type BooleanKeys = ResolvableKeysOf<Test, boolean>; // "z"
type StringOrNullKeys = ResolvableKeysOf<Test, string | null>; // "x" | "y" | "xy"
type BooleanOrNullKeys = ResolvableKeysOf<Test, boolean | null>; // "y" | "z" | "yz"
type StringOrBooleanOrNullKeys = ResolvableKeysOf<
  Test,
  string | boolean | null
>; // "x" | "y" | "z" | "xy" | "yz" | "xz"

export { type ResolvableKeysOf as ResolvableKeysOfOneLevel };
