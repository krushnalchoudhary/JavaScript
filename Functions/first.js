function sayHello(){
    console.log("H");
    console.log("e");
    console.log("l")
    console.log("l");
    console.log("o");
}


function addNumbers(num1 , num2) {
    let result = num1 + num2;
    return result;
}

const addition = addNumbers(3,5)
console.log(addition);


function loginUserMessage(username){
    return `${username} just logged in`
}

console.log(loginUserMessage("Krushnal"));
