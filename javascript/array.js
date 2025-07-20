// const string = "hello";

// console.log(string.length);
// console.log(string[0]);
// console.log(string[1]);
// console.log(string[2]);
// console.log(string[3]);
// console.log(string[4]);
// console.log(string.charAt(0));
// console.log(string.indexOf("lo"))

// const text = "Hello World!"
// console.log(text.indexOf("l", 4))
// console.log(text.indexOf("l",3))  // if the text has two same letter we use indexOf that letter in double quotes then type next index value
// console.log(text.indexOf("o",5))
// console.log(text.lastIndexOf("l"))
// console.log(text.lastIndexOf("o"))
// console.log(text.replaceAll("l", "0"))


// const str="Haaaiiii aa "
// console.log(str.toLowerCase())
// console.log(str.toUpperCase())
// console.log(str.slice(4,8))
// console.log(str.slice(4))
// console.log(str.slice(0,-2)) 
// console.log(str.slice(-2)) // or
// console.log(str.slice(9,11))
// console.log(str.includes("aa"))
// console.log(str.includes("bb")) 
// console.log(str.replace("aa","bb"))
// console.log(str.replaceAll("aa","bb")) //all a inn the word change to bb
// console.log(str.split())
// console.log(str.split(" ")) // split the words by space
// console.log(str.split("")) // splitic char

//array
// const word="hello"
// console.log(word)
// console.log(word.split("").reverse().join(""))

// const array=[1,2,3,4,5,6,7,8,9,10,2]
// console.log(array.length)
// console.log(array[1])
// console.log(array[3])
// console.log(array.indexOf(4))
// console.log(array.indexOf(3))
// console.log(array.lastIndexOf(2))
// console.log(array.indexOf(6))
// console.log(array.includes(2))
// console.log(array.includes(11))
// console.log(array.join())
// console.log(array.join(""))
// console.log(array.join(" "))
// console.log(array.join("+"))
// console.log(array.reverse())
// console.log(array)
// array.push(19,12,56,78)
// array.unshift(-2,-5,-7)
// array.pop(78)
// array.pop()
// array.pop()
// array.shift()
// console.log(array)
//  const arr=[1,2,2,4]
//  console.log(arr)
//  console.log(arr.length)

//  arr.splice(5,7)
//  console.log(arr)

// const array = [1, 2, 4];
// array.splice(2,0,5)
// console.log(array); // Output: [1, 2]

// const fruits=["apple", "banana", "cherry", "date"];
// fruits.splice(2,0,"dragonfruit");

// fruits.splice(2,1)
// fruits.splice(2,1,"elderberry","fig");
// console.log(fruits);


// const fru=["fig", "grape", "honeydew"];
// fru.splice(0,1,"kiwi","lemon","mango");

// console.log(fru);

// const neww = ["bus", "car", "bike"];
// neww.splice(2,0,"train")

// neww[0]="jeep";
// console.log(neww); // Output: ["bus", "car", "train", "bike"]

// object

// const person={name:"John", age:30, city:"New York"};
// console.log(person)
// console.log(person.name,person.age);

// const man={firstName:"John",
//      lastName:"Doe", age:25,
//       city:"New York",
//       tags:["developer", "designer", "photographer"],
      
    
//     };
//     man.sample="hello"
//     man.proffession="engineer";
//     console.log(man)
//     console.log(man.firstName);
//     console.log(man.tags);
//     console.log(man.tags[0]);
//     console.log(man.proffession);

const me={name:"shahana",
    age:22,
    field:"software engineer",
    skills:["html", "css", "javascript", "react"],
    address:{
        city:"Kochi",
        state:"Kerala",
        country:"India"
    },
}
me.hobbies=["reading", "traveling", "coding"];
console.log(me);
console.log(me.address.state, me.address.country, me.address.city);
console.log(me.hobbies);