type AreMutuallyAssignable<T1, T2> = [T1] extends [T2]
  ? [T2] extends [T1]
    ? true
    : false
  : false;

function typeAssert<T extends true>() {}

// any
typeAssert<AreMutuallyAssignable<any, any>>();

// unknown
typeAssert<AreMutuallyAssignable<unknown, unknown>>();

// never
typeAssert<AreMutuallyAssignable<never, never>>();
