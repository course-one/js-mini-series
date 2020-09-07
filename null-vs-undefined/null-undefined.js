// inspect `typeof`
console.log( 'typeof undefined =>', typeof undefined );
console.log( 'typeof null =>', typeof null ); // BUG

// use as value
console.log( '10 - undefined =>', 10 - undefined );
console.log( '10 / null =>', 10 / null );
console.log( 'Boolean(undefined) =>', Boolean( undefined ) );
console.log( 'Boolean(null) =>', Boolean( null ) );
console.log( 'function =>', (function(){ return null; })() );