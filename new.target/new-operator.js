// create a constructor function
function Person( firstName, lastName ) {
    this.firstName = firstName;
    this.lastName = lastName;
}

// add `getFullName` method to prototype
Person.prototype.getFullName = function() {
    return this.firstName + ' ' + this.lastName;
};

// create object using `new` operator
const ross = new Person( 'Ross', 'Geller' );

// log `ross` object and print fullname
console.log( 'ross ->', ross );
console.log( 'fullname ->', ross.getFullName() );