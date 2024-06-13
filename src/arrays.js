// Given an array of numbers, return all the numbers that are greater than ten.
// Ex.:
//   greaterThanTen([1, 2, 3, 11, 12, 13]);
//   => [11, 12, 13]
function greaterThanTen(numbers) {
  return numbers.filter(number => number > 10);
}

const numbers = [1, 2, 3, 11, 12, 13];
const result1 = greaterThanTen(numbers);

console.log(result1);

// Given an array of strings, return all words that start with 'b' or 'B'.
// Ex.:
//   bWords(['banana', 'orange', 'apple', 'Bonobo', 'kiwi', 'pear']);
//   => ['banana', 'Bonobo]
function bWords(words) { return words.filter(word => word[0] === 'b' || word[0] === 'B'); }

console.log(bWords(['banana', 'orange', 'apple', 'Bonobo', 'kiwi', 'pear']));
 // Output: ['banana', 'Bonobo']



// Add all the elements from additionalItems to the end of originalArray.
// Return the originalArray..
// Ex.:
//  extend([1, 2, 3], [4, 5, 6]);
//  => [1, 2, 3, 4, 5, 6]

function extend(originalArray, additionalItems) { originalArray.push(...additionalItems); return originalArray; }
 console.log(extend([1, 2, 3], [4, 5, 6])); // Output: [1, 2, 3, 4, 5, 6]




// Return an array of all items with the given length.
// Ex.:
//   itemsWithLength(['a', 'bbb', 'cccc', 'dddddd', 'eee'], 3);
//   => ['bbb', 'eee']

function itemsWithLength(items, length) { return items.filter(item => item.length === length); }

console.log(itemsWithLength(['a', 'bbb', 'cccc', 'dddddd', 'eee'], 3)); // Output: ['bbb', 'eee']



// Return an array with every other element from the input array (start with index 0).
// Ex.:
//   everyOtherItem(['a', 'b', 'c', 'd', 'e']);
//   => ['a', 'c', 'e']

function everyOtherItem(items) { let result3 = []; for (let i = 0; i < items.length; i += 2) { result3.push(items[i]); } return result3; }
console.log(everyOtherItem(['a', 'b', 'c', 'd', 'e'])); // Output: ['a', 'c', 'e']



// Given a list of words and a letter, return the indexes of the words that
// start with that letter. You can assume that the words and letter will always
// be lowercased.
// Ex.:
//   findWordsStartingWith(['apple', 'banana', 'kiwi', 'pear', 'bacon'], 'b');
//   => [1, 4]

function findWordsStartingWith(words, letter) {
  let indexes = [];
  
  for (let i = 0; i < words.length; i++) {
      if (words[i][0] === letter) {
          indexes.push(i);
      }
  }
  
  return indexes;
}

console.log(findWordsStartingWith(['apple', 'banana', 'kiwi', 'pear', 'bacon'], 'b')); // Output: [1, 4]


// Return the `n` smallest values in the array in descending order (largest
// numbers first). Assume that `n` will always be less than the length of the
// array.
// Ex.:
//   smallestNItems([1, 30, 4, 21, 100000], 3);
//   => [21, 4, 1]

function smallestNItems(items, n) {
  // Sort the array in ascending order
  items.sort((a, b) => a - b);
  
  // Slice out the `n` smallest values from the sorted array and reverse the order
  return items.slice(0, n).reverse();
}

console.log(smallestNItems([1, 30, 4, 21, 100000], 3)); // Output: [21, 4, 1]



// Search for a value in the array and return its index. If the value appears
// more than once, return the index of the *FIRST* occurrence of the value. If
// the value doesn't exist in the array, return undefined.
// Ex.:
//   findIndex(['a', 'b', 'c', 'a', 'b', 'c'], 'c');
//   => 2
function findIndex(items, value) {
  let index = undefined;
  for (let i= 0; i<items.length; i++) {
    if (items[i]=== value) {
      index= i
      break;
    }
  }

return index;

}


console.log(findIndex(['a', 'b', 'c', 'a', 'b', 'c'], 'c')); 

// Given a start number and stop number, return a new array containing all the numbers
// between the start and stop number.
// Ex.:
//   range(1, 5);
//   => [1, 2, 3, 4, 5]

function range(start, stop) {
  // Initialize an empty array to store the numbers
  let result = [];

  // Loop from start to stop (inclusive) and add each number to the result array
  for (let i = start; i <= stop; i++) {
      result.push(i);
  }

  return result;
}

console.log(range(1, 5)); // Output: [1, 2, 3, 4, 5]


export {
  bWords,
  everyOtherItem,
  extend,
  findIndex,
  findWordsStartingWith,
  greaterThanTen,
  itemsWithLength,
  range,
  smallestNItems,
};
