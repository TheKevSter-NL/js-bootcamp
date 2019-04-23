var arrays = [[1, 2, 3], [4, 5], [6]];
var show = arrays.reduce(function(a, b){ //combine to the currentvalue
  return a.concat(b);  //make a and b in 1 arry
});

console.log(show);
