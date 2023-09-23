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
    this.resize();
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
    this.resize();
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

  if (this.length >= this.capacity) {

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



module.exports = DynamicArray;