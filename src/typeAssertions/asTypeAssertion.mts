let num: unknown = "hello world";

console.log((num as string).length);
// <T>variable is so-called angle-bracket type assertion syntax
// that is reserved for .mts/.cts extension
// but normally it works as well as 'as'
// console.log((<string>num).length);
