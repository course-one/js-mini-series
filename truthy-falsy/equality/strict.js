// primitive  data types
console.log( '0 === 0 =>', 0 === 0 ); // number
console.log( '0 === -0 =>', 0 === -0 ); // number
console.log( '1 === 1 =>', 1 === 1 ); // number
console.log( '1 === -1 =>', 1 === -1 ); // number
console.log( '1 === 2 =>', 1 === 2 ); // number
console.log( '"1" === "1" =>', "1" === "1" ); // string
console.log( '"hello" === "world" =>', "hello" === "world" ); // string
console.log( 'true === true =>', true === true ); // boolean
console.log( 'true !== false =>', true !== false ); // boolean
console.log( 'Symbol() === Symbol() =>', Symbol() === Symbol() ); // symbol
console.log( 'null === null =>', null === null ); // null
console.log( 'undefined === undefined =>', undefined === undefined ); // undefined

/*----------*/

// abstract data types
console.log( '(function(){}) === (function(){}) =>', (function(){}) === (function(){}) ); // function
console.log( '{} === {} =>', {} === {} ); // object
console.log( '{a:1} === {a:1} =>', {a:1} === {a:1} ); // object
console.log( '[] === [] =>', [] === [] ); // array
console.log( '[1] === [1] =>', [1] === [1] ); // array

var obj = { a: 1 }, arr = [ 1 ], func = function(){};
console.log( 'obj === obj =>', obj === obj ); // obj
console.log( 'arr === arr =>', arr === arr ); // arr
console.log( 'func === func =>', func === func ); // obj

/*----------*/

// special cases
console.log( 'NaN === NaN =>', NaN === NaN ); // NaN
console.log( 'Infinity === Infinity =>', Infinity === Infinity ); // Infinity