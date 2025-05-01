const mySym = Symbol("Key 1");
const mySym2 = Symbol("Key 2");

const User = {
    name: "Krushnal",
    age: 22,
    mySym: "myKey",
    [mySym2]: "mykey2",
    location: "Pune",
    email: "krishnalchoudhary9827@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday" , "Sturday"]
}



console.log(User)
console.log(User["email"])
console.log(User.name)


User.greetings = function(){
    console.log("Hello User")
}


console.log(User.greetings)
console.log(User.greetings())

console.log(User.greetings())
User.greetings2 = function(){
    console.log(`Hello  , ${this.name}`)
}

console.log(User.greetings2());
