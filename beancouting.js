function countBs(string) {
  let hw6count = 0;
  for (let i = hw6count = 0; i < string.length; i++) {
    if (string[i] === 'B') {
      hw6count = hw6count + 1;
    }
  }
  return hw6count;
}
console.log(countBs('BBS'));




function countChar(string, characters){
 let hw6count = 0;
  for (let i = hw6count = 0; i < string.length; i++){
    if (string[i] === characters){
      hw6count = hw6count + 1;
    }
  }
  return hw6count ;
}


console.log(countChar("kakkerlak", "k"));
console.log(countChar("hello darkness my old friend", "l"));
