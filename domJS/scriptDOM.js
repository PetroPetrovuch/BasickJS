"use strict";
const box = document.getElementById("box"),
      buttons = document.getElementsByTagName("button"),
      circles=document.getElementsByClassName("circle"),
      wrapper = document.querySelector(".wrapper"),
      hearts=wrapper.querySelectorAll(".heart"),//Колекція елементів з сеолектором class="heart"
      oneHeart = wrapper.querySelector(".heart");//Перший елемент
     

// hearts.forEach(item=>{
//     console.log(item);
// }

//console.dir(oneHeart);
// box.style.backgroundColor = "blue";
// box.style.width = "500px";

buttons[1].style.borderRadius="100%";

let num =500;
box.style.cssText=`background-color:blue; width:${num}px;`;


hearts.forEach((item,index)=>{
    if(index==1){
        item.style.backgroundColor = "green";
    }
});

const div = document.createElement("div");
//const text = document.createTextNode("Hello");
div.classList.add("black");
div.style.height = "200px";
div.style.width = "400px";
//div.style.backgroundColor = "#ffff03";

//document.body.append(div);

//document.querySelectorAll(".wrapper")[0].append(div);
//wrapper.prepend(div);

//circles[2].before(div);
circles[2].after(div);
hearts[0].remove();
console.log(hearts.length);
console.log(hearts);
circles[1].replaceWith(hearts[2]);

div.innerHTML="<h1>Hello world</h1>";
//div.textContent="Hello";
div.insertAdjacentHTML("beforeend",'<h2>Hello</h2>');











