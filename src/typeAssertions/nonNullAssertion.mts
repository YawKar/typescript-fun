let name: string | undefined = undefined;

try {
  // `var!` effectively returns a value of the type of `var` with `null` and `undefined` excluded.
  console.log(`Length is: ${name!.length}`);
} catch (e) {
  console.log(`It works as it should work, here's the error: ${e}`);
}
