//Premitive 

 // ---->   7 Types :--- 
 /*
 1. String 
 2. Number
 3. Boolean
 4. null
 5. undefined
 6. Symbol
 7. BigInt
  */


 //Reference (Non Premitive)

 // --->  
 /*
 1. Array 
 2. Object 
 3.Function
  */


 const Score = 100;
 const scoreValue = 100.5;


 const LoggedIn = false;
 const outsideTemp  = null

 let userEmail;

 const id = Symbol('123')
 const id2  = Symbol('123');

 console.log(id===id2);

 const bigNumber = 12345678987654;
 console.log(bigNumber);
 


 //Non-Premetive

 const ids = [1,2,3];
 console.log(ids);

 let obj = {
    name: "krushnal",
    age: 22,

 }

 console.log(obj)


 function myfunction(){
    console.log('Hello ' ) 
 }

 myfunction();


 console.log(typeof score);
 console.log(typeof scoreValue);
 console.log(typeof LoggedIn);
 console.log(typeof outsideTemp);
 console.log(typeof userEmail);
 console.log(typeof id);
 console.log(typeof bigNumber);
 console.log(typeof ids);
 console.log(typeof obj);
 console.log(typeof myfunction);
 console.log(typeof score);
