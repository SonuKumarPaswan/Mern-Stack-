// Inheritance ------------- JavaScript -------------
/*****************************
class Person{
    constructor(name ,age,marks){
        this.name=name;
        this.age=age;
        this.marks=marks;
    }
    talk(){
        console.log(`Hi, i am ${this.name}`)
    }
}
class teacher{
    constructor(name ,age,subject){
        this.name=name;
        this.age=age;
        this.subject=subject;
    }
    talk(){
        console.log(`Hi, i am ${this.name}`)
    }
}
     **************************/

//  Using inheritace 
class Person{
    constructor(name , age){
        console.log("Person class constructor");
        this.name=name;
        this.age=age;
    }
    talk(){
        console.log(`Hi, I am ${this.name}`);
    }
}

class Student extends Person{
    constructor(name , age ,marks){
        console.log("Student class constructor")
        super(name,age);
        this.marks=marks;
    }
}
class Teachaer extends Person{
    constructor(name,age,subject){
        console.log("Teacher class construtor")
        super(name,age);
        this.subject=subject;
    }
}

const std=new Student("Aman",25,234);
console.log(std.name)
console.log(std.age)
console.log(std.marks)
console.log(std.talk())
console.log("------------------------------------")

class Mammal{
    constructor(name){
        this.name=name;
        this.type="warm blooded"
    }
    eat(){
        console.log("I am eating")
    }
}
class Dog extends Mammal{
    constructor(name){
        super(name);
    }
    bark(){
        console.log("wooff.......")
    }
}
class Cat extends Mammal{
    constructor(name){
        this.name=name;
    }
    meoa(){
        console.log("meao......")
    }
    // override Mammal class function
    eat(){
        console.log("cart eating")
    }
}

const dog1=new Dog("tuffie");
console.log(dog1.eat());
console.log(dog1.name);
console.log(dog1.bark());
console.log(dog1.type);


