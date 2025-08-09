// console.log("hello")
// console.log("hii")
// console.log("heee")  // this is syn that is execution run by line by line

// const { reject } = require("async");


// console.log("start")
// setTimeout(()=>{
//     console.log("midlle")
// },2000);

// console.log("end")   //this run o/p staart,end,after two second it display middle


// let promise=new Promise((resolve,reject)=>{
//     resolve("success")

// });
// promise.then((data)=>{
//     console.log("data")
// })

// let promise=new Promise((resolve,reject)=>{
//     reject("something went wrong")

// });
// promise
// .then((data)=>console.log(data))
// .catch((error)=>console.log(error));

// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then(response=>response.json())
// .then(data=>console.log(data))
// .catch(err => console.log("Error:", err));  //this and below code are same one wit .then  below with async function async fun is more cleaner

// async function getData() {
// const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
// const data = await response.json();
// console.log(data);
// }
// getData()

//error handling in async/await

// async function getdata(){
//     try{
//         const res=await fetch('https://jsonplaceholder.typicode.com/todos/1')
//         const data = await res.json();
//         console.log(data);

//     }
//     catch(error){
//         console.log("Error:", error);

//     }
// }
// getdata()

// async function getUsers() {
//   try {
//     const response = await fetch("https://wrong-url.com/users"); // Wrong URL!
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("❌ An error occurred:", error.message);
//   }
// }

// getUsers();

// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then(res=>res.json())
// .then(data=>console.log(data))
// .catch(error=>console.log(error));


// async function getuser(){
//   try{
//   const res=await fetch('https://jsonplaceholder.typicode.com/todos/1')
//   const data=await res.json();
//   console.log(data)
//   }catch(error){
//     console.log("error")
//   }
// }
// getuser()

// const promise=new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     resolve("data resieved")
//   },2000)

// })
// promise
// .then(result=>console.log("success",result))
// .catch(error=>console.log(error))

// async function fun(){
//   try{
//     const res=await fetch('https://jsonplaceholder.typicode.com/users/1')
//     const data= await res.json();
//     console.log("name:",data.name)
//     console.log("email:",data.email)
//   }
//   catch(error){
//     console.log("error")
//   }
// }
// fun()
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("Done!"), 5000);
// });

// promise.then(result => {
//   console.log(result); // ✅ Output: Done!
// });

// const prom=new Promise((resolve,reject)=>{
//   setTimeout(()=>resolve("done"),5000)
// });
// prom.then(result => {
//   console.log(result); // ✅ Output: Done!
// });

// fetch=('https://jsonplaceholder.typicode.com/users/1')
// .then(res=>res.json())
// .then(data=>console.log(data))

// fetch('https://jsonplaceholder.typicode.com/posts/1')
// .then(response=>response.json())
// .then(data=>console.log(data))
// .catch(err => console.log("Error:", err));

// async function fun(){
//   try{
//     const res=await fetch('https://jsonplaceholder.typicode.com/users/1')
//     const data=await res.json()
//     console.log(data);
//   }catch(error){
//     console.log("error")
//   }

// }



