// Return the quotient of x and y.
// Ex.:
//   divide(10, 2);
//   => 5

function divide(x, y) {
  return x / y;
}

console.log(divide(10, 2)); // Output: 5



// Return the average of x and y.
// Here, the average of x and y is the *mean* of x and y. In other words, it's
// computed by dividing the sum of x and y by 2.
// Ex.:
//   average(10, 2);
//   => 6

function average(x, y) {
  return (x + y)/2;
}

console.log(average(10, 2)); 


// Return true if x and y are mostly equivalent up to a tolerance of 0.001.
// In other words, return true if the aboslute value of x - y is less than 0.001.
// Ex.:
//   approximatelyEqual(10.001, 10);
//   => true
function approximatelyEqual(x, y) {
  return x - y < 0.001 && y - x < 0.001;
}

console.log(approximatelyEqual(10.001, 10)); 



// Given a first name and last name, return a full name in the format "FIRST LAST"
// Ex.:
//   fullName('John', 'Doe');
//   => 'John Doe'

function fullName(firstName, lastName) {
  return firstName +' ' + lastName
}

console.log(fullName('John', 'Doe'));


// Generate the sentence "PERSON was drinking BEVERAGE at LOCATION" using the
// person, beverage and location provided.
// Ex.:
//   generateSentence('Kay', 'coffee', 'the local cafe');
//   => 'Kay was drinking coffee at the local cafe.'


function generateSentence(person, beverage, location) {
  return person + ' was drinking ' + beverage + ' at '+ location
}

console.log(generateSentence('Kay', 'coffee', 'the local cafe.'))


// Return the given string with all vowels replced with '*' characters.
// Ex.:
//   censorVowels('javascript');
//   => 'j*v*scr*pt'
function censorVowels(string) {

  return string.replace(/[aeiou]/gi, '*');
}

console.log(censorVowels('javascript')); // Output: 'j*v*scr*pt'



// Return the given string in sticky case.
// Ex.:
//   stickyCase('hello world');
//   => 'hElLo wOrLd'

function stickyCase(string) {
  let result = '';
  for (let i = 0; i < string.length; i++) {
      if (i % 2 === 0) {
          result += string[i].toLowerCase();
      } else {
          result += string[i].toUpperCase();
      }
  }
  return result;
}



console.log(stickyCase('hello world')); // Output: 'hElLo wOrLd'



// Return the given string in leetspeak. Leetspeak is a modified version of
// English where characters are replaced by numbers or symbols. For this
// version of leetspeak, replace the following characters:
//   a => 4
//   e => 3
//   i => 1
//   o => 0
//   s => 5
//   t => 7
// Ex.:
//   leetspeak('javascript');
//   => 'j4v45cr1p7'


function leetspeak(string) {
  const leetRules = {
      'a': '4',
      'e': '3',
      'i': '1',
      'o': '0',
      's': '5',
      't': '7'
  };

  let result = '';
  for (let i = 0; i < string.length; i++) {
      const char = string[i].toLowerCase(); 
      result += leetRules[char] || string[i]; 
  }

  return result;
}

console.log(leetspeak('javascript')); // Output: 'j4v45cr1p7'



export {
  approximatelyEqual,
  average,
  censorVowels,
  divide,
  fullName,
  generateSentence,
  leetspeak,
  stickyCase,
};
