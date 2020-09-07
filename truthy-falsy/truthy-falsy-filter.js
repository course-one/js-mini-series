// some sample data
const data = [ true, null, 'false', 100, NaN, {a: 1} ];

// filter `truthy` values
console.log( data.filter( Boolean ) );