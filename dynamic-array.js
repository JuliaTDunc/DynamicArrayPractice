class DynamicArray {

  constructor(defaultSize = 4) {
    this.capacity = defaultSize;
    this.length = 0;
    this.data = new Array(defaultSize);
    
  }

  read(index) {
    return this.data[index];
  }

  push(val) {
    this.data[this.length] = val;
    this.length++
  }


  pop() {
    if(this.length <= 0) {
      return undefined
    }
    let lastEl = this.data[this.length-1];
    lastEl === undefined;
    this.length--;
    return lastEl; 
  }
  
  shift() {
    if(this.length <= 0) {
      return undefined;
    }
    let firstEl = this.data[0];
      this.data[0] = this.data[1];
      this.data[1] = this.data[2];
    this.length--;
    return firstEl;
  }

  unshift(val) {
    for(let i = this.length; i > 0; i--) {
        this.data[i] = this.data[i-1];
    }
    this.data[0] = val;
    this.length++;
  }

  indexOf(val) {
    for(let i = 0; i < this.data.length; i++) {
      if(this.data[i] === val) {
        return i;
      }
    }
    return -1;
  }

  resize() {
   if(this.data.length === this.capacity) {
    this.capacity *= 2;
   }
  }

}
let dynamicArr = new DynamicArray()

dynamicArr.push(1);
dynamicArr.push(2);
dynamicArr.push(3);

console.log(dynamicArr.length)//.to.equal(3);

console.log(dynamicArr.shift())//.to.equal(1);
console.log(dynamicArr.length)//.to.equal(2);

console.log(dynamicArr.shift())//.to.equal(2);
console.log(dynamicArr.length)//.to.equal(1);

console.log(dynamicArr.shift())//.to.equal(3);
console.log(dynamicArr.length)//.to.equal(0);

console.log(dynamicArr.shift())//.to.equal(undefined);
console.log(dynamicArr.length)//.to.equal(0);


module.exports = DynamicArray;