// single NOT operation
console.log( '!true =>', !true ); // truthy
console.log( '![] =>', ![] ); // truthy
console.log( '!{a: 1} =>', !{a: 1} ); // truthy
console.log( '!null =>', !null ); // falsy
console.log( '!"" =>', !"" ); // falsy
console.log( '!0 =>', !0 ); // falsy

console.log( /*----------------*/ );

// double NOT operation
console.log( '!!true =>', !!true ); // truthy
console.log( '!![] =>', !![] ); // truthy
console.log( '!!null =>', !!null ); // falsy
console.log( '!!"" =>', !!"" ); // falsy

console.log( /*----------------*/ );

// tripple NOT operation
console.log( '!!!true =>', !!!true ); // truthy
console.log( '!!![] =>', !!![] ); // truthy
console.log( '!!!null =>', !!!null ); // falsy
console.log( '!!!"" =>', !!!"" ); // falsy