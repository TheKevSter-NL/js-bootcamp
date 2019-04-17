//#1
function triangleHw1() {
console.log("Exercise 1: triangle")
var hw1 = '#'; //starting with 1 #
  while(hw1.length <= 7){ //while # is lower then 7 loop this
    console.log(hw1); // Show #
    hw1 = hw1 + '#'; //Show # and add 1 more # until there are 7
  }
}



function fizzbuzzHw2() {
console.log("Exercise 2: Fizzbuzz")
var hw2 = '1'; //starting with the number 1
  while(hw2 <= 100){ //while # is lower then 100 loop this
    if ((hw2 % 3 == 0 ) && (hw2 % 5 ==0)) { // for each 3% and 5% do this
      console.log('Fizzbuzz');
    }
      else if ((hw2 % 3 )== 0 ) { // for each 3% do this
        console.log('fizz');
      }
      else if ((hw2 % 5 )== 0 ) {// for each  5% do this
        console.log('buzz');
      }
      else {
        console.log(hw2); // show other numbers each 3% and 5%
      }
      hw2++ // without this it will keep looping until the browers stopt working
  }
}

function chessBoardHw3() {
console.log("Exercise 3: chessBoard")
var hw3row1 = [' ', '#', ' ', '#', " ", '#',' ', '#', ' ', "\n"] //row 1
var hw3row2 = ['#', ' ', '#', " ", '#',' ', '#', '', "\n"] //row 2

for (var i = 0; i <=3; i++) { //make for each log 4 rows
      console.log(hw3row1.join('')); // join make a new string
      console.log(hw3row2.join(''));
}

}



//Script will be loaded in the console thanks to DOMContentLoaded
document.addEventListener('DOMContentLoaded', (event) => {
    triangleHw1();
    fizzbuzzHw2();
    chessBoardHw3();
  })
