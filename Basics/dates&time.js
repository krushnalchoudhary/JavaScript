//Dates

let myDate = new Date()
console.log(myDate);

console.log("========================")

console.log(myDate.toString())

console.log("========================")

console.log(myDate.toDateString())

console.log("========================")

console.log(myDate.toLocaleDateString());

console.log("========================")

console.log(typeof myDate)


let specificDate = new Date(2023 , 0,23)
console.log(specificDate)

console.log("========================")

console.log(specificDate.toDateString())

let specificDate2 = new Date(2023 , 0,23,5,3)
console.log()


let timeStamp = Date.now()

console.log(timeStamp)


let newDate = new Date();
console.log(newDate)
console.log(newDate.getDay())
console.log(newDate.getMonth()+ 1)
console.log(newDate.getFullYear())

newDate.toLocaleString('default',{
    weekday: "long" ,
})