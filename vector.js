//Vector
//Make a Class
class Vec {
//Make constructor x and y
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
	//make function plus aan and retun the result
    plus(vec){
        return new Vec(this.x + vec.x, this.y+ vec.y)
    }
	//make function min aan and retun the result
    min(vec){
        return new Vec(this.x - vec.x, this.y - vec.y)
    }
	//  Grab the length and calculate plus and min
    get length(){
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
  }
  console.log(new Vec(1, 2).plus(new Vec(2, 3)));
  console.log(new Vec(1, 2).min(new Vec(2, 3)));
  console.log(new Vec(3, 4).length);
