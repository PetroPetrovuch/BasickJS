"use strict";

//типи 

console.log(typeof("str"));
const color1="yellow",color2="green",color3="blue";
console.table({color1,color2,color3});//Виводить данні у вигляді таблиці

//Функції для роботи зі строками

console.log("  str   ".trim());//Повертає строку без пробілів

//Функції для роботи з числами

console.log(isNaN("str"));//Якщо строка повертає true
console.log(Number.isInteger(10.5));//Провіряє чи являється число цілим
console.log(Math.max(1,10,5,20,3));//Повертає найбільше число

//Функції для роботи з Обєктами та масивами

const obj={
    a:10,
    b:20
};

console.log(Array.isArray([1,2,3,4]));//Якщо масив повертає true
console.log(Object.keys(obj).length);//Можна дізнатися кількість полів у обєкта
delete obj.a;
console.log(obj);

const arr = [1,22,4,7,10,50,30];
console.log(arr.sort());//Сортує як строку
arr.sort((a,b)=> a-b); 
console.log(arr);
console.log(arr.pop());//Видаляє останій елемент в масиві
console.log(arr.push(20));//Добавляє елемент в кінець масива
console.log(arr);
//Перебор елементів масива
for(let value of arr)
{
    console.log(value);
}

let str = arr.join(",");//Конвертує масив в строку
console.log(typeof(str));

const arr2=str.split();
console.log(arr2);

console.log();

//Копіювання обєкту

const numbers = {
    a:10,
    b:20,
    c:30,
    d:{
        x:2,
        y:25
    }
};

const add = 
{
    e:5,
    f:15
};

console.log(Object.assign(numbers,add));//Поєднує два обєкта
console.log(Object.assign({},numbers));//Копіює обєкт

//Копіювання масива

const oldArray = ["a","b","c"];
const newArray = oldArray.slice();

newArray[3]="str";
console.log(oldArray,newArray);