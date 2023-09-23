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
  //  if(this.data.length === this.capacity) {
  //   this.capacity *= 2;
  //  }
  // }

  if (this.length === this.capacity) {

    this.capacity *= 2;
    const newData = new Array(this.capacity);

    for (let i = 0; i < this.length; i++) {
        newData[i] = this.data[i];
    }

    this.data = newData;
}

//this.length--;
}
}

let  dynamicArr = new DynamicArray();
console.log(dynamicArr.capacity)//.to.equal(4);
console.log(dynamicArr.data.length)//.to.equal(4);

dynamicArr.push(10);
dynamicArr.push(11);
console.log(dynamicArr.length)//.to.equal(2);

dynamicArr.push(12);
dynamicArr.push(13);
console.log(dynamicArr.length)//.to.equal(4);

dynamicArr.resize();

console.log(dynamicArr.capacity)//.to.equal(8);
console.log(dynamicArr.data.length)//.to.equal(8);
console.log(dynamicArr.length)//.to.equal(4);

console.log(dynamicArr.read(0))//to.equal(10);
console.log(dynamicArr.read(1))//.to.equal(11);
console.log(dynamicArr.read(2))//.to.equal(12);
console.log(dynamicArr.read(3))//.to.equal(13);
console.log(dynamicArr.read(4))//.to.equal(undefined);
console.log(dynamicArr.data[4])//.to.equal(undefined);


module.exports = DynamicArray;