



function checkDay(today){
  switch(today){
    case 'monday':
    case 'tuesday':
    case 'wednesday':
    case 'thursday':
    case 'friday':
      return false;
    break;

    case 'saturday':
    case 'sunday':
      return true;
    break;

    default:
      console.log("Try again!");
  }
}

console.log(checkDay('monday'));
console.log(checkDay('saturday'));
