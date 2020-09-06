// non-constructor function
function Person( firstName, lastName ) {
    if( new.target !== undefined ) {
        throw new TypeError( 'Person is not a constructor' );
    }

    // return fullname
    return firstName + ' ' + lastName;
}

// get fullname
console.log( 'fullname ->', Person( 'Ross', 'Geller' ) );

// create object using `new` operator
try {
    const ross = new Person( 'Ross', 'Geller' );
} catch( e ) {
    console.log( 'error ->', e.message );
}