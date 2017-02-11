
var array = [5, 12, 13, 24, 45, 46, 57];

function onlyEvens(numbers) {
var newArray = [];
  for (var i = 0; i < numbers.length; i++) {
    if (i % 2) {
      newArray.push(numbers[i]);
    }
  }
  return newArray;
};

console.log(onlyEvens(array));



// complete this function so that given an array full of
// numbers, it returns a new array containing only the even ones
// for example `onlyEvens([1,2,3,4]) === [2,4]`
