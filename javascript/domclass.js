let eleme=document.getElementById("demo");
console.log(eleme.innerText);
console.log(eleme.innerHTML);

const st=eleme.style;
st.color="red";
st.backgroundColor="green";
st.margin=0;

let eleme1=document.getElementById("demo1");
eleme1.style.color="blue";

let elements=document.getElementsByClassName("msg");
// elements[0].style.color="green";
// elements[1].style.color="orange";
// elements[0].innerHTML = "<h1>Hello</h1>"

for (let i = 0; i < elements.length; i++) {
  elements[i].style.color = "blue";      // change color
  elements[i].innerText += " 😊"; 
  elements[i].style.backgroundColor="yellow";        // add emoji
}

// let para=document.getElementsByTagName("p");
// for (let i = 0; i < para.length; i++) {
//   para[i].style.color = "purple";      // change color
//   para[i].innerText += " 🌟"; 
//   para[i].style.backgroundColor="lightgray";        // add emoji
// }

let elmu=document.querySelector(".msg1")
elmu.style.backgroundColor="pink";
