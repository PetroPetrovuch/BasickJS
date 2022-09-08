"use strict";
//Питання на співбесіді

//Різниця між == та ===,при == відбувається приведення типів
console.log(0==false);
console.log(0===false);
console.log("12"==12);
console.log("12"===12);


//Передача по ссилці

let obj = {
    name : "Jon"
};

let obj2 = obj;//Передача по ссилці

// obj = {
//     name : "Bob"
// };
obj2.name="Bob";

console.log(obj2);
console.log(obj);

//Різниця між var ,let ,const

//1)Перемінні намбере можна перевизначити так переініціалізовуавти
// var number =10;
// var number =20;
// number =15;
// console.log(number);

//2)Let перевизначати не можна
// let number2 = 10;
// number2=15;
// console.log(number2);
//let number2 =15;

//3)Переміна const повина бути інізіалізована при оголошенні
// const a;
// console.log(a);

//4)
//var можна викликати до оголошення,не ініціалізована ініціалізується як undefined
// console.log(number);
// var number;
// console.log(number2);
// let number2;

//5)
//Область видимості
//var глобальна і локальна в межак функції,let та const блочні в межах {}

// var user ="Alex";
// if(1)
// {
//     var user ="Jon";
// }

// console.log(user);// Jon Доступна за межами {} і таким чином переміну з однаковим імене переініціалізовує

//6)Обєкт оголошений за допомогою const можна міняти поля але покласти його в інший обєкт не можна

let user ="Alex";
if(1)
{
   let user ="Jon";
}

console.log(user);//Alex

//Питання по функціях
//1.Замикання
//Це коли функція замкнута на області видимості батьківської елемента

function Counter()
{
    let count = 0;
    return () =>
    {
        count ++;
        return count;
    };
}
let counter1 = Counter();
let counter2 = Counter();
console.log(counter1());
console.log(counter1());
console.log(counter2());
//2.Різниця між function declaration та function expression

Declaration();

function Declaration()
{
    console.log("Створюється до початку виконання скріпта,можна викликати в любому місці програми");
}



function Expression()
{
    console.log("Створюється під час виконання коду,можна викликати після її оголошення");
}

let ex = Expression();

//Приклад function expresion

const res = getSum(5, 6);
const getSum = function(a, b) {
    return a + b;
}



//3.Стрілочні функції

let Hello = () => {return "HEllo";};
console.log(Hello());
let HelloUser = name => `Hello ${name}`; 
console.log(HelloUser("Jon"));

//Створити масив дублікат
//Варіант N1...
console.log(duplicate([1,2,3,4,5]));

// let arr = [1,2,3];
// console.log(arr.length);

function duplicate(arr)
{
//     let arr1=[1,2,3];
//     console.log(arr1.length);
//     console.log(Array.isArray(arr));
//    console.log(arr.length);
    let res=[];
    for(let i=0;i<arr.length;++i)
    {
        //console.log(arr[i]);
        res[i]=arr[i];
        res[arr.length+i]=arr[i];
    }
    return res;

}



//Варіант N2



//Що таке властивість lenght,це індекс останьго елемента +1
const arr=[1,2,3,4,5];
arr[20]=100;
console.log(arr);
console.log(arr.length);//Показує 21 а елементів 6 явних

//Деструктуризація масива
function foo(a,b) {
    
    const [first] = a;
    console.log(first);
    const {eng} = b;
 
    return `${first} ${eng}`;
}
 
const result = foo(['Hello', 'Привет'], {ru: 'Мир', eng: 'World'});

const array = [1,2,3,4,5];
const [one,two] =array;
console.log(one,two);

//Поміняти місцями значення переміних

let a =10,b = 15;

[a,b]=[b,a];

console.log(a,b);


//----------------------

console.log(0 || 2);//Повертає перший істиний
console.log(3 && 0);//Повертає перший неправдивий
console.log("a" > "b");//false
console.log(0 || NaN || false || null);

//Пустий масив приводиться ло строки
console.log(typeof([]+false));//"false"
console.log([]+false - null + true);//NaN не підлягає вичесленю

let y = 1; let x = y = 2; console.log(x); 

console.log([]+1+2);//"12"

console.log("1"[0]);//Звернення по індексу до строки так як строка то масив

console.log(2 && 1 && null && 0 && undefined );//null

console.log(null || 2 && 3 || 4 );//3

console.log(0 || "" || 2 || undefined || true || falsе );//2

console.log(!!(1&&2)===(1&&2));//false !! приводить до bool

console.log(+"infynity");//NaN

const d = [1,2,3];
const s = [1,2,3];
console.log(d==s);//false

console.log("Ёжик" > "яблоко");