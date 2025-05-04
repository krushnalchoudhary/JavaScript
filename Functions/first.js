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


function calculateCartPrice(...number1){
    return number1;
}

console.log (calculateCartPrice(200,300,400));

const myarray = [100,200,300];
function retArray(myarray){
    return myarray;
}

console.log(retArray(myarray));
