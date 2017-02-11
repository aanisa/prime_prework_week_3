

function isCartonFull( eggsInCarton, cartonCapacity ){
  if (eggsInCarton >= cartonCapacity) {
    return true;
  } else {
    return false;
  }
}

console.log(isCartonFull(8, 8));
console.log(isCartonFull(14,24));
