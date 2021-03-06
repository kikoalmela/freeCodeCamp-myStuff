// Fill in the object constructor with the following methods below:

// getFirstName() getLastName() getFullName() setFirstName(first) setLastName(last) setFullName(firstAndLast)

// Run the tests to see the expected output for each method.

// The methods that take an argument must accept only one argument and it has to be a string.

// These methods must be the only available means of interacting with the object.

var Person = function(firstAndLast) {
  let fullName = firstAndLast;

  this.getFullName = function() {
    return fullName;
  };

  this.getFirstName = function() {
    return fullName.split(' ')[0];
  };

  this.getLastName = function() {
    return fullName.split(' ')[1];
  };

  this.setFirstName = function(first) {
    fullName = `${first} ${fullName.split(' ')[1]}`;
  };

  this.setLastName = function(last) {
    fullName = `${fullName.split(' ')[0]} ${last}`;
  };

  this.setFullName = function(firstAndLast) {
    fullName = firstAndLast;
  };
};

// Another solution.
var Person = function(firstAndLast) {
  let fullNameArr = firstAndLast.split(' ');

  this.getFullName = function() {
    return fullNameArr.join(' ');
  };

  this.getFirstName = function() {
    return fullNameArr[0];
  };

  this.getLastName = function() {
    return fullNameArr[1];
  };

  this.setFirstName = function(first) {
    fullNameArr[0] = first;
  };

  this.setLastName = function(last) {
    fullNameArr[1] = last;
  };

  this.setFullName = function(firstAndLast) {
    fullNameArr = firstAndLast.split(' ');
  };
};

var bob = new Person('Bob Ross');
bob.getFullName();
