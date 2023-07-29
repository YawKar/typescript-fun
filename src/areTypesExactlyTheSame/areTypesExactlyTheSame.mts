type AreTypesEqual<T1, T2> = (<G>() => G extends T1 ? 1 : 2) extends <
  G
>() => G extends T2 ? 1 : 2
  ? true
  : false;
type Not<T extends boolean> = T extends true ? false : true;
function typeAssert<T extends true>() {}

typeAssert<AreTypesEqual<never, never>>();
typeAssert<AreTypesEqual<any, any>>();

typeAssert<Not<AreTypesEqual<[number, any], [any, number]>>>();
typeAssert<Not<AreTypesEqual<number[], any[]>>>();
typeAssert<Not<AreTypesEqual<number, any>>>();
