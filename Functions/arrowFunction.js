const user = {
    username: "Krushnal",

    welcomeMessage: function(){
        console.log(`${this.username}`)
    }
}

console.log(user.welcomeMessage())

console.log(this)



console.log("+--------------------------------+");
console.log("           Arrow Function")
console.log("+--------------------------------+");


const sample = () => {
    console.log(this)
}

sample();


