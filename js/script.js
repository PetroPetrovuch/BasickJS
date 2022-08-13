"use strict";
//Базовий JS

//Оголошення переміних
//console.log(lastName);//Не можна викликати до оголошення
let lastName;
console.log(lastName);//undefined не присвоєне значення
lastName = "Jon";
//const lastName;//Прик оголошенні константу потрібно присвоїти значення

console.log(lastName);

console.log(surName);//При оголошенні var можна викликати до її оголошення лише скаже що undefined
var surName = "Ivan";
console.log(surName);

//console.log(Person);//null не існуюча переміна

//типи даних
console.log(4/0);//Infinity Безкінечність
console.log("string" * 4);//NaN

//Масиви

let arr = [1,2,"string",{name: "Jon",age: 25}];
console.log(arr[2]);
console.log(arr[3]["name"]);//Доступ до полів обєкта
console.log(arr[3].age);//Доступ до полів обєктів

arr[0]=5;
console.log(arr);


//Обєкти

const obj={
    name : "Ivan",
    age : "25"
};
//Доступ до полів обєкта
console.log("name = "+obj.name + ",age = "+ obj["age"]);

//Створення властивостей


obj.isMarried = false;
obj["lastName"] = "Pupkin";
console.log(obj);




