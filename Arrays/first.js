const myArr = [1,2,3,4,5];
console.log(myArr)

console.log(myArr[1]);

console.log(myArr.length)


//Array Methods
console.log("Afetr Push ");

myArr.push(6);
console.log(myArr);

console.log("After POP")
myArr.pop();
console.log(myArr)


console.log("Unshift Method") //adds element at start 

myArr.unshift(9)
console.log(myArr)

console.log("Shift method") //removes first element

myArr.shift()
console.log(myArr)


console.log("includes method");

console.log(myArr.includes(9))

console.log(myArr.indexOf(5))

const mySlice = myArr.slice(1,3);
console.log("Slice : " , mySlice);
console.log(myArr)


const mySplice = myArr.splice(1,3);
console.log("Splice :" ,mySplice);
console.log(myArr)
