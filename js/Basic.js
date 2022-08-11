"use strict";

//Строгий режим use strict
// s=15;
// console.log(s);
//var старе оголошення перемiних
var a = 15;
console.log(a);
let numder = 5;
const LeftBorderWidth = 10;

console.log(LeftBorderWidth);

console.log(numder);


//Динамiчна константа,прямих констант в js не маэ
// const obj = {
//     a:10
// };

// obj.a=5;
// console.log(obj.a);




//Типи Даних
console.log(4/0);
console.log("string" * 4);
//Строки 


//console.log(Person);//null не існуюча переміна
// let und;
// console.log(und);

//Обєкти
const obj = {
    name : "Jon",
    'age' : 25,
    isMarried : false

};

console.log(obj.name);
console.log(obj['age']);

//Масиви
//Коплексний тип даних який може містити любий інший тип,не є отдєльним типом даних
let arr = ["1.png","2.jpg",5,{},[]];
console.log(arr[0]);

//Обєкти та масиви

const arr1 = ['a','b','c'];
console.log(arr1[1]);

const arrObj = {
    //Параметрі строкові,записуються в кавичках або без
    0 : 'a',
    b : 'b',
    2 : 'c',
    abc : {
        def : []
    }

};

console.log(arrObj[0],arrObj['0']);
console.log(arrObj.b);//При такому звернені параметр повинен бути строковим

//Створення властивостів


arrObj.name = "Jon";
arrObj['age'] = 40;
console.log(arrObj.name,arrObj.age);

//Практичне завдання

const storeName = "Dobrobut";

const storeDescription = {
    budget : 10000,
    employees : ['Jon','Fill','Alex'],
    products : {
        pen : 45,
        book : 50

    },
    open : true


};

//Взаємодія з користовачем
    //alert('HEllo');
    //const result = confirm("Іванцю,ти мене любиш?");
    //console.log(result);

    // let abc;
    // console.log(abc);

    // let answer = prompt("Вам 18?","18");
    // console.log(typeof(answer));

    let answers = [];
    // answers[0] = prompt("Як ваше імя?","");
    // answers[1] = prompt("Як ваше Фамілія?","");

    // document.write(typeof(answers));


    //Інтерполяція

    let category = "toys";
    console.log(`https://someurl.com/${category}/5`);

    //Оператори 

    //+ Перед строкою переводить строку в число якщо в кавичках число
    console.log(4 + +'10');


    let
        incr = 10,
        decr = 10;
        
        //iнкремент
        incr ++;
        //Декремент
        decr--;
        //Префіксна форма
        console.log(++incr);
        //Постфіксна
        console.log(decr--);
        
        //Остача від ділення
        console.log(5%2);

        console.log(2*4 == '8');
        console.log(2*4 === '8');

        const isChecked = false,
              isOpen = true;
        console.log(isChecked && isOpen);
        console.log(isChecked || isOpen);
        console.log(!isChecked && isOpen);
        
        console.log("Hello Git");




    

