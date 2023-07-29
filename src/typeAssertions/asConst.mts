type AreTypesEqual<T1, T2> = (<G>() => G extends T1 ? 1 : 2) extends <
  G
>() => G extends T2 ? 1 : 2
  ? true
  : false;

function typeAssert<T extends true>() {}

// const assertion for literal values signals to the language that:
// - no literal types in that expression should be widened (e.g. no going from "hello" to `string`)
// - object literals get `readonly` modifier on properties
// - arrays literals become `readonly` tuples

// const assertions can only be applied immediately on simple literal expressions
// Error! A 'const' assertion can only be applied to a
// to a string, number, boolean, array, or object literal.
// let a = (Math.random() < 0.5 ? 0 : 1) as const;
// let b = (60 * 60 * 1000) as const;
// Works!
let c = Math.random() < 0.5 ? (0 as const) : (1 as const);
let d = 3_600_000 as const;

const colorsWithoutConst = ["red", "green", "blue"];
typeAssert<AreTypesEqual<string[], typeof colorsWithoutConst>>();

const colorsWithConst = ["red", "green", "blue"] as const;
typeAssert<
  AreTypesEqual<readonly ["red", "green", "blue"], typeof colorsWithConst>
>();

// another syntax for const assertion:
// <const><SOME_LITERAL>
