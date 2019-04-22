
function checkHw5(nummer){

  if (nummer % 2 === 0){
    return true;
  }

  else if (nummer < 0) {
    return false;
  }

  else {
    return false;
  }

}

console.log(checkHw5(50));
// → true
console.log(checkHw5(75));
// → false
console.log(checkHw5(-1));
