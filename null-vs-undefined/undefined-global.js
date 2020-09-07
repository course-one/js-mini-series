// see `undefined` property descriptor
console.log(
    Object.getOwnPropertyDescriptor(
        global, 'undefined'
    )
);

// assign new value to `undefined` in the global scope
global.undefined = null
console.log( 'global.undefined =>', global.undefined );

// declare `undefined` as new variable
var undefineds = null // or undefined = null
console.log( 'var undefineds =>', global.undefineds );

// assign new value to `undefined` inside a function
( function() {
    var undefined = null
    console.log( 'function undefined =>', undefined );
} )();