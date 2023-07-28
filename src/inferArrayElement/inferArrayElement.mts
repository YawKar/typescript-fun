type ArrayElement<T> = T extends (infer E)[] ? E : never;
type ArrayElementDeep<T> = T extends (infer E)[]
  ? E extends any[]
    ? ArrayElementDeep<E>
    : E
  : never;
