// create a constructor function
function Person( firstName, lastName ) {
    if( new.target === undefined ) {
        throw new TypeError( 'Constructor Person requires \'new\'.' );
    }

    this.firstName = firstName;
    this.lastName = lastName;
}

// add `getFullName` method to prototype
Person.prototype.getFullName = function() {
    return this.firstName + ' ' + this.lastName;
};

// create object using `new` operator
const ross = new Person( 'Ross', 'Geller' );
console.log( 'ross ->', ross );
console.log( 'fullname ->', ross.getFullName() );

// call `Person` like a regular function
try {
    Person( 'Ross', 'Geller' );
} catch( e ) {
    console.log( 'error ->', e.message );
}