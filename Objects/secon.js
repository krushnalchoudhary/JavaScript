const appUser = new Object(); //single ton object

appUser.id = "123abc";
appUser.name = "UserName";
appUser.isLoggedIn = false;

console.log(appUser);

const RegUser = {
    email : "user@gmail.com",
    fullname: {
        userfullname: {
            firstname: "userFirstName",
            lastname: "userLastName"
        }
    }
}

console.log(RegUser.fullname.userfullname);


console.log("===================")
console.log("Object Merging");
console.log("===================");

const obj1 = {1:"a" , 2: "b"}
const obj2= {3: "c" , 4: "d"}

const obj3 = {obj1,obj2};

console.log(obj3);

const obj4 = Object.assign({},obj1,obj2)
console.log(obj4)


const obj5 = {...obj1 , ...obj2}
console.log(obj5);

console.log(Object.keys(appUser));
console.log(Object.keys(appUser));
console.log(Object.values(appUser));
console.log(Object.entries(appUser))
console.log(appUser.hasOwnProperty("name"))
