// Object orieated programming in JavaScript 
// Prototypes
/***************************************
let arr=[1,2,3,4]
arr.sayHello=()=>{
    console.log("Hello , I am  Array");
}
 
/********************** prototypes
 * 
arr.__proto__.push=(n)=>{
    console.log("pushing number", n) };
arr.push(8);      // output  ----->   VM1105:2 pushing number 8

console.log(Array.prototypes)
 *****************


console.log(arr)   // then print origin arr not 

 ********************************//*******

function PersonMaker(name,age){
    const perseon={
        name:name,
        age:age,
        talk(){
            console.log(`Hi, my name is ${name}`);
        }
    }
    return perseon;
}
  const p1=PersonMaker("john",35);
  console.log(p1.talk());

  const p2=PersonMaker("john",35);
  console.log(p2.talk());

  console.log(p1.talk === p2.talk) // false   ----> its not good way to use factory function 
 */

//   Using New Operator ------------->  Constructor -- doesn't return anything  and start with Capital latter 
 /*************************************
function Person(name,age){
    this.name=name;
    this.age=age;
    console.log(this);
    }
    Person.prototype.talk=function(){
        console.log(`Hi, my name is ${this.name}`)
    }; 

let p2=new Person("Aman", 35);
console.log(p2)
// console.log(p1===p2);

 */
class Person{
    constructor(name,age){
        this.name=name;
        this.age=age
    }
    talk(){
        console.log(`Hi, my name is ${this.name}`);
    }
}
let p1=new Person("Aman", 35);
let p2=new Person("Raja", 25);
console.log(p1.talk());
console.log(p1.talk===p2.talk)