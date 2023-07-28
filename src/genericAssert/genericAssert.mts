function assertNotNull<T>(
  nullable: T,
  payload?: string
): asserts nullable is NonNullable<T> {
  if (nullable == null) {
    throw Error(payload);
  }
}

interface User {
  name: string;
  age: number;
}

function choice(ch: boolean): User | undefined {
  if (ch) {
    return { name: "YawKar", age: 1 };
  }
}

function crux() {
  const first = choice(true);
  // `first: User | undefined`
  assertNotNull(first, "first user is undefined!");
  // `first: User`
  // `second: User | undefined`
  const second = choice(false);
  assertNotNull(second, "second user is undefined!");
  // an exception was thrown
}

crux();
