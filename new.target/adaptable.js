// create a constructor function
function Person( firstName, lastName ) {

    // return fullname
    if( new.target === undefined ) {
        return firstName + ' ' + lastName;
    }

    // instantiation logic
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
console.log( 'fullname* ->', Person( 'Ross', 'Geller' ) );