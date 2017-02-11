
var array = [5, 12, 13, 24, 45, 46, 57];

function onlyEvens(numbers) {
var newArray = [];
  for (var i = 0; i < numbers.length; i++) {
    if (i % 2) {
      newArray.push(numbers[i]);
    }
  }
  return newArray;
}

console.log(onlyEvens(array));
