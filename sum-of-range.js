console.log("Exercise 6: Sum of range")
function range(start, end) {
  var array = [];
  for (var i = start; i <= end; i++) {
    array.push(i)
  }
  return array;
}


function sum(add){
  var arraySum = 0;

  for (var i = 0; i < add.length; i++){
    arraySum = arraySum + add[i];
  }
  return arraySum ;
}
console.log(range(1, 10));
console.log(range(5, 2, -1)); // Hier kom ik er niet uit
console.log(sum(range(1, 10)));
