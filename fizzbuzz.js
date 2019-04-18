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
