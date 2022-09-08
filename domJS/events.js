"use strict";


const btn = document.querySelectorAll("button"),
    overlay = document.querySelector(".overlay");

//Старий варіант
// btn.onclick=function(){
    //     alert("click");
// };

//Переопреділяє перший
// btn.onclick=function(){
    //     alert("second click");
// };

// btn.addEventListener("click",()=>{
//     alert("click");
// });

// btn.addEventListener("click",()=>{
//     alert("second click");
// });

// btn.addEventListener("mouseenter",(e)=>{
//     //console.log("mouseenter");
//     console.log(e.target);
//     e.target.remove();
// });

// let i=0;
const deleteElement = e=>{
    // ++i;
    //console.log(e.currentTarget);//Вплиття подій
    console.log(e.target);
    console.log(e.type);
    // if(i==3)
    // {
    //     btn.removeEventListener("click",deleteElement);
    // }
};

//Декілька обробників подій

btn.forEach(item=>{
    item.addEventListener('click',(btn)=>{
        console.log(btn.target);//Спрацьовує лише один раз
    },{once:true});
});


// btn.addEventListener("click",deleteElement);
// overlay.addEventListener("click",deleteElement);

const link=document.querySelector('a');
link.addEventListener("click",(event)=>{

    event.preventDefault();//Відміняє стандартну поведінку
    console.log(event.target);

});

//Робота з DOM

//Робота з вузлами

// console.log(document.body);
// console.log(document.documentElement);//Отримання html вузла
console.log(document.body.childNodes);
console.log(document.body.firstChild);
console.log(document.body.lastChild);

console.log(document.querySelector("#current").parentNode);
console.log(document.querySelector("#current").parentNode.parentNode);
console.log(document.querySelector("[data-current='3']").nextSibling);//Оримання data атрибута
console.log(document.querySelector("[data-current='3']").previousSibling);

//Робота з елементами

console.log(document.querySelector("[data-current='3']").nextElementSibling);
console.log(document.querySelector("#current").parentElement);
console.log(document.body.firstElementChild);

for(let node of document.body.childNodes)
{
    if(node.nodeName=="text"){
    continue;
    }
    console.log(node);
}








