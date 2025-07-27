console.log("Oops! Something went wrong.");

const obj={
    name: "John",
    age: 30,
    displayInfo: function() {
        return this.name+ " " +this.age;
}
}
console.log(obj.displayInfo());


class person{
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    fullname(){
        return this.firstName + " " + this.lastName;
    }  
}

const p1 = new person("John", "Doe");
const p2 = new person("Jane", "Smith");
const p3 = new person("Alice", "Johnson");

console.log(p1.fullname());
console.log(p2.fullname());
console.log(p3.fullname());

//class is used for creating multiple object  without using class create object we create separate separet function for each object

class add{
    constructor(a,b){
        this.a = a;
        this.b = b;
    }
    sum(){
        return this.a + this.b;
    }
}
const add1 = new add(5, 10);
const add2 = new add(15, 20);
const add3 = new add(25, 30);
console.log(add1.sum());
console.log(add2.sum());
console.log(add3.sum());

//4pillers of OOP
//1.abstraction--> hiding the implementation details and showing only the essential features of the object.
// inheritance

// class Animal {
//     constructor(name){
//         this.name=name;

//     }
//     speak(){
//         return this.name + " makes a noise.";
//     }
// }
// class Dog extends Animal {
//   constructor(name, breed) {
//     super(name); // Call parent constructor
//     this.breed = breed;
//   }
//     bark() {
//         return this.name + " barks.";
//     }


// }
// const d1 = new Dog("Tommy", "German Shepherd");
// console.log(d1.speak());
// console.log(d1.bark());


// class animal{
//     speak(){
//         return "Animal makes a noise.";
//     }
// }
// class Dog extends animal {
//     speak() {
//         return "Dog barks.";
//     }
// }
// const dog = new Dog();
// console.log(dog.speak()); // Output: Dog barks.


// class peron{
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     display(){
//         return this.name + " is " + this.age + " years old.";
//     }
// }
// const person1 = new peron("Alice", 25);
// const person2 = new peron("Bob", 30);
// console.log(person1.display());
// console.log(person2.display());


// class Animal {
//   speak() {
//     return "Animal speaks";
//   }
// }

// class Dog extends Animal {
//   bark() {
//     return "Dog barks";
//   }
// }

// const d = new Dog();
// console.log(d.speak()); // Output: Animal speaks
// console.log(d.bark()); // Output: Dog barks

//tasks

// class animal{
//     makesound(){
//       return "animal bark"

//     }

// }
// class dog extends animal{
//     makesound(){
//         return "dog bark"

//     }
// }

// class cow extends animal{
//     makesound(){
//         return "cow crying"
//     }

// }
// class cat extends animal{
//     makesound(){
//         return "cat crying"
//     }
// }

// const an1=new animal();
// console.log(an1.makesound()); // Output: animal bark

// const d1=new dog();
// console.log(d1.makesound()); // Output: dog bark

// const c1=new cow();
// console.log(c1.makesound()); // Output: cow crying

// class calculator{
//     constructor(num1,num2){
//         this.num1=num1;
//         this.num2=num2;
//     }
//     sum(){
//         return this.num1+this.num2
//     }
//     mul(){
//         return this.num1*this.num2
//     }
//     div(){
//         return this.num1/this.num2
//     }
// }
 
// const a1=new calculator(3,5);
// console.log("sum is" +" "+  a1.sum())

// const a3=new calculator(3,7)
// console.log("mul is"+" "+a3.mul())

// const a2= new calculator(10,2)
// console.log("div is"+" "+a2.div())



class BankAccount {
  constructor(account_holder, balance = 0) {
    this.account_holder = account_holder;
    this.balance = balance;
  }

  // Method to deposit money
  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      return `₹${amount} deposited successfully.`;
    } else {
      return "Deposit amount must be positive.";
    }
  }

  // Method to withdraw money
  withdraw(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      return `₹${amount} withdrawn successfully.`;
    } else {
      return "Insufficient balance or invalid amount.";
    }
  }

  // Method to check balance
  check_balance() {
    return `Account balance for ${this.account_holder}: ₹${this.balance}`;
  }
}

// Test the BankAccount class
const user1 = new BankAccount("Shahana", 1000);
console.log(user1.check_balance());         // Initial balance
console.log(user1.deposit(500));            // Deposit money
console.log(user1.withdraw(300));           // Withdraw money
console.log(user1.check_balance());         // Check updated balance
