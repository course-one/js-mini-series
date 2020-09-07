// primitive data types
console.log( '1 + 1 =>', 1 + 1 ); // 1 + 1
console.log( '1 + "-1" =>', 1 + "-1" ); // "1" + "-1"
console.log( '1 + "1" =>', 1 + "1" ); // "1" + "1"
console.log( '"10" + 2 =>', "10" + 2 ); // "10" + "2"
console.log( '"10" - 2 =>', "10" - 2 ); // 10 - 2
console.log( '10 / "2" =>', 10 / "2" ); // 10 / 2
console.log( '10 * "2" =>', 10 * "2" ); // 10 * 2
console.log( 'true + "true" =>', true + "true" ); // "true" + "true"
console.log( '10 - true =>', 10 - true ); // 10 - 1
console.log( '10 - false =>', 10 - false ); // 10 - 0
console.log( 'true / false =>', true / false ); // 1 / 0
console.log( '10 / null =>', 10 / null ); // 10 / 0
console.log( '10 - undefined =>', 10 - undefined ); // 10 - ?

// abstract data types
console.log( '{} + "{}" =>', {} + "{}" ); // ({}).toString() + "{}"
console.log( '[] + "[]" =>', [] + "[]" ); //([]).toString() + "[]"
console.log( '10 - [1] =>', 10 - [1] ); // 10 - 1
console.log( '[1] + ["1"] =>', [1] + ["1"] ); // "1" + "1"
console.log( '10 - ["1"] =>', 10 - ["1"] ); // 10 - 1
console.log( '[1,2] + "1,2" =>', [1,2] + "1,2" ); // "1,2" + "1,2"
console.log( '[] + 0 =>', [] + 0 ); // "" + 0
console.log( '[1] + 0 =>', [1] + 0 ); // "1" + 0
console.log( '[10] / null =>', [10] / null ); // 10 / 0