/* 
Create a function which if called with no arguments it returns:
exampleFunction() //Name - Age 
If 'myName' and 'myAge' are passed as arguments, this is the desired outcome: 
exampleFunction({’myName’, ‘myAge’}) //myName - myAge
*/
const exampleFunction=({fir="name", sec="age"}={})=>{
    console.log(myName,myAge)
} 
exampleFunction({fir: "myName", sec:"myAge"})