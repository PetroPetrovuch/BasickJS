//"use strict";
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

// let arr = [1,2,"string",{name: "Jon",age: 25}];
// console.log(arr[2]);
// console.log(arr[3]["name"]);//Доступ до полів обєкта
// console.log(arr[3].age);//Доступ до полів обєктів

// arr[0]=5;
// console.log(arr);


//Обєкти

const obj={
    name : "Ivan",
    age : "25"
};

console.table(obj);
//Доступ до полів обєкта
console.log("name = "+obj.name + ",age = "+ obj["age"]);

//Створення властивостей


obj.isMarried = false;
obj["lastName"] = "Pupkin";
console.log(obj);

//Вивід в таблицю
const cost = 3.99;
const date = 'todey';
const skill = 'fishing';

console.table({cost,date,skill});

//Поміщення деяких полів обєкта в переміні
const user = {
    name : "bob",
    skills: [],
    address: "000 other st",
    age : 10

};

//kids code
// const name = user.name;
// const age = user.age;
// console.log({name,age});

//Находить поля в обєкті які називаються name,age
let {name,age} = user;
console.log({name,age});

const state = [10,(name)=>`Hello ${name}`];
console.log(state[1]("Alex"));
const[value,fn]=state;
console.log(fn("Jon"));



//Функції
//Kids function
function Hello(name)
{
   return `Hello ${name}`;
}

console(Hello("Alex"));

//Profesional function
const welcome = name => `Hello ${name}`;
console.log(welcome("Alex"));

let a = 10;//Глобальна перемінна
function foo()
{
    a=5;
    let b=15;//Локальна
    console.log(b);
    return a;
    
}

console.log(foo());

//Замикання

function Counter()
{
    let count = 0;
    return function ()
    {
        count ++;
        return count;
    };
}
let counter = Counter();
console.log(counter());
console.log(counter());
console.log(counter());

function foo()
{

}
console.log(foo());//Повертає undefined функція завжди щось повертає

//Корисні функції

console.log(isNaN("dsdsd"));//Повртає false якщо параметр число
console.log(Array.isArray([]));//Якщо амсив повертає true
console.log(Array.isArray({}));



//CallBack function

function foo(callback)
{
    console.log("function foo");
    console.log(callback());
}


foo(()=>{return "callback function";});


//Objects


const options = {
    name: "test",
    width:1024,
    height:1024,
    colors:{
        border: "black",
        bg:'red'
    },
    makeTest:function() {
        console.log("first method");
        
    }

};

//Деструктурізація

const {border,bg} = options.colors;
console.table({border,bg});

options.makeTest();

console.log(Object.keys(options).length);

delete options.name;

console.log(options);

for(let key in options)
{
    if(typeof(options[key])==='object')
    {
        for(let i in options[key])
        {
            console.log(`Властивість - ${i} Значення - ${options[key][i]}`);
        }
    }
    else
    {
        console.log(`Властивість - ${key} Значення - ${options[key]}`);
    }
    
}

//Робота з масивом

const arr = [1,2,4,7,10];
for(let value of arr)
{
    console.log(value);
}

arr.forEach((item,i,arr)=>{
    console.log(`${i} : ${item} в масиві ${arr}`);
});


//Передача по значенню та по ссилці

// const numbers = {
//     a:10,
//     b:20,
//     c:30,
//     d:{
//         x:2,
//         y:25
//     }
// };

// let copyNumbers = numbers;

// copyNumbers.b=100;//Змінюється поле і у numbers ,передача по ссилці

// // console.log(numbers);

// //Копіювання обєкта

// // for(let key in numbers)//of працює з масивами in з обєктами
// // {
// //     console.log(`ключ ${key}`);
// // }

// //Спосіб N1

// function copyObj(mainObj){
//     let copyNumbers={};

//     for(let value in mainObj)
//     {
//         copyNumbers[value]=mainObj[value];
//     }


//     return copyNumbers;
// }

// copyNumbers=copyObj(numbers);//Функція копіює поля але вложані передаються по силці

// copyNumbers.a=55;
// console.log(copyNumbers);
// console.log(numbers);
// copyNumbers.d.x=105;
// console.log(copyNumbers);
// console.log(numbers);


//Спосіб номер 2


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









    



