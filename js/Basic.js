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
// let arr = ["1.png","2.jpg",5,{},[]];
// console.log(arr[0]);

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

        //Логічні оператори
        // const hamburger = true;
        // const fries = true;
        // //Тернарний оператор
        //  (hamburger && fries) ? console.log("Сит") : console.log("Голодний");

        // console.log(hamburger&&fries);


        //Яке значення повертаюю порівнняня
        //Оператор &&
        //повертає перше неправдиве значення або останнє правдиве
        console.log(1&&0);
        console.log(1&&5);
        console.log(2&&4&&10&&6);//Повертає останнє правдиве значення
        console.log(null&&5);
        console.log(0 &&"string");

        //Оператор ||
        //Повертає перше правдиве або останнє неправдиве
        console.log(2 || 4 || 0 || 6);
        console.log("" || undefined || 0 || null || NaN);//Результат порівнняня false
        //повертає останій аргумент
        console.log( 3 === 3 && 3 === 2);//Повертає false а не значееня тому що результатом 
        //порівняння === є або true або false

        console.log(!false);//Повертає зворотнє значення

        //Практика
        console.log( NaN || 2 || undefined );//2
        console.log( NaN && 2 && undefined );//NaN
        console.log( 1 && 2 && 3 );//3
        console.log( !1 && 2 || !3 );//false 
        console.log( 25 || null && !3 );//25
        console.log( NaN || null || !3 || undefined || 5);//5
        console.log( NaN || null && !3 && undefined || 5);//5
        console.log( 5 === 5 && 3 > 1 || 5);//true


        // const hamburger = 3;
        // const fries = 3;
        // const cola = 0;
        // const nuggets = 2;

        // //Виконається
        // if (hamburger === 3 && cola || fries === 3 && nuggets) {
        //     console.log('Done!');
        // }

        // let hamburger;
        // const fries = NaN;
        // const cola = 0;
        // const nuggets = 2;
        
        // //Виконається
        // if (hamburger || cola || fries === 3 || nuggets) {
        //     console.log('Done!');
        // }

        let hamburger;
        const fries = NaN;
        const cola = 0;
        const nuggets = 2;
        //не виконається
        if (hamburger && cola || fries === 3 && nuggets) {
            console.log('Done!');
        }

        //Цикли

        // let result = "";
        // for(let i=0;i<=6;i++){
        //     // console.log(i);
          
            
        //     for(let j=0;j<=i;++j)
        //     {
        //         result+="*"; 
                
        //     }
        //     result+="\n";
        //     // result+="*";
            
        // }

        // console.log(result);

        //Мітки

        first:for(let i=0;i<=3;i++)
        {
            console.log(`First level:${i}`);
            for(let j=0;j<=3;j++){
                console.log(`Second level:${j}`);
                for(let k=0;k<=3;k++)
                {
                    if(k===2) {continue first;} 
                    console.log(`Thrid level:${k}`);
                    
                }
            }
        }

        for (let i = 2; i <= 16; i++) {
            if (i % 2 === 0) {
                continue;
            } else {
                console.log(i);
            }
        }
       let i=2;
       
       while(i <= 16)
       {
       
        if (i % 2 !== 0) {
            console.log(i);   
        }
        i++;  
          
       }

       let arrey = [];
       for(let i=5,j=0;i<=10;i++,j++)
       {
            arrey[j] = i;
       }
       console.log(arrey);
 
       
    //    const arr = [3, 5, 8, 16, 20, 23, 50];
    //    const result = [];

    //    for(let i=0;i<arr.length;i++)
    //    {
    //     result[i]=arr[i];
    //    }
    //    console.log(result);

        

       console.log(typeof(1));

    //    const data = [5, 10, 'Shopping', 20, 'Homework'];
    //    const result = [];

    //    for(let i=data.length-1,j=0;i>=0;i--,j++)
    //    {    
    //         result[j]=data[i];
                 
    //    }

    //    console.log(result);


    //    for(let i=0;i<data.length;i++)
    //    {    
    //         (typeof(data[i])==='number') ? data[i]*=2 : data[i]+=" done";  
                 
    //    }
    //    console.log(data);

    const lines = 5;
    let result = '';
    let steps = lines;
    let s = lines;
    for(let i=0;i<=lines;i++)
    {
       
        for(let j =0; j<=steps;j++)
        {
            
            if(j< s)
            {
                result+=" ";
            }
            else
            {
                result+="*";
            }

        }

        
           
        s--;
        steps++;
        result+="\n";


    }

    console.log(result);
    //Варіант N2
    // const lines = 5;
    // let result = '';

    // for (let i = 0; i <= lines; i++) {
    //     for (let j = 0; j < lines - i; j++) {
    //         result += " ";
    //     }
    //     for (let j = 0; j < 2 * i + 1; j++) {
    //         result += "*";
    //     }
    //     result += "\n";
    // }

    // console.log(result);

    

