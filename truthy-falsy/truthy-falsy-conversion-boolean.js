// single NOT operation
console.log( 'Boolean(true) =>', Boolean(true) ); // truthy
console.log( 'Boolean("hello") =>', Boolean("hello") ); // truthy
console.log( 'Boolean([]) =>', Boolean([]) ); // truthy
console.log( 'Boolean({a: 1}) =>', Boolean({a: 1}) ); // truthy

console.log( 'Boolean(false) =>', Boolean(false) ); // falsy
console.log( 'Boolean(0) =>', Boolean(0) ); // falsy
console.log( 'Boolean("") =>', Boolean("") ); // falsy
console.log( 'Boolean(null) =>', Boolean(null) ); // falsy
console.log( 'Boolean(undefined) =>', Boolean(undefined) ); // falsy
console.log( 'Boolean(null) =>', Boolean(null) ); // falsy
console.log( 'Boolean(NaN) =>', Boolean(NaN) ); // falsy