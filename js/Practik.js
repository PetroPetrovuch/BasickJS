"use strict";


const lenght = 5;
let result ="";

for(let i=0,a=lenght;i<=lenght;++i,--a)
{
    for(let j=0;j<=lenght;++j)
    {
        if(j<a)
        {
            result+=" ";
        }
        else{
            result+="*";
        }

    }
    for(let s=0;s<=i-1;++s)
    {
        result+="*";

    }
    result+="\n";
}
console.log(result);



//Functions

function sayHello(nameUser)
{
    return `Hello ${nameUser}`;
}

console.log(typeof(sayHello("Piter")));


function returnNeighboringNumbers(num) {

    return [num-1,num,num+1];
}

console.log(returnNeighboringNumbers(10));

function getMathResult(num1,num2) {

    console.log((typeof(num1)));
    if('number'!==typeof(num2)||num2<=0)
    {
        return num1;
    }
    let result="";
    for(let i=1;i<=num2;++i)
    {

        
        //console.log(result);
        if(i!==num2){
            result+=`${num1*i}---`;
        }
        else{
            result+=`${num1*i}`;
        }
        
    }
    return result;
}

console.log(getMathResult(4,3));

//вичеслення обєму та площі куба
function calculateVolumeAndArea(a) {

    if(Number.isInteger(a)&&a>0&&typeof(a)=="number"){
        let V=a,S=0;
        V=Math.pow(a,3);
        S=6*(a*a);
        return `Объем куба: ${V}, площадь всей поверхности: ${S}`;
    }
    else{
        return "При вычислении произошла ошибка";
    }
    
}
console.log(calculateVolumeAndArea(10.5));


// console.log(Number.isInteger(-15));



// if(0)
// {
//     console.log("Нэ отрицательное");
// }

//console.log(!Number.isInteger(1.2));

function getCoupeNumber(number) {
    let coupe=1;
    if(typeof(number)!="number" || !Number.isInteger(number) || number <0 )
    {
        return "Ошибка. Проверьте правильность введенного номера места";
    }
    if(number===0 || number>36)
    {
        return "Таких мест в вагоне не существует";
    }
   
        for(let i=0;i<=36;)
        {
          if(number>i&& number<=(i+=4))
          {
            return coupe;
          }
          ++coupe;
           
        }

 
   

}
console.log(getCoupeNumber(-10));


console.log(Math.floor(50 / 60));

function getTimeFromMinutes(number) {
    let hours = 0;
    let minutes = 0;
    if (typeof(number) !== 'number' || number < 0 || !Number.isInteger(number)) {
        return "Ошибка, проверьте данные";
    }
    let hoursStr = '';

    minutes = number%60;
    hours = number-minutes;
    hours /=60;

    switch (hours) {
        case 0: 
            hoursStr = 'часов';
            break;
        case 1:
            hoursStr = 'час';
            break;
        case 2:
        case 3:
        case 4:
            hoursStr = 'часа';
            break;
        default:
            hoursStr = 'часов';
    }

    return `Это ${hours} ${hoursStr} и ${minutes} минут`;

}


console.log(getTimeFromMinutes(60));


function findMaxNumber(a,b,c,d) {


    if (typeof(a) !== 'number' ||
        typeof(b) !== 'number' ||
        typeof(c) !== 'number' ||
        typeof(d) !== 'number') {
        return 0;
    } else {
        return Math.max(a, b ,c, d);
    }


}

function fib(num) {
    let str = "";
    let arr =[];
    if(typeof(num)!='number'||num<=0 || !Number.isInteger(num))
    {
        return '';
    }
    for(let i=0;i<num;++i)
    {
        if(i<2)
        {
            arr[i]=i;
        }
        else{
            arr[i]=arr[i-2]+arr[i-1];
        }
    }
    str = arr.join(" ");
    return `${str}`;
    
}

console.log(fib(7));

const list =[1,2,3,4];
console.log(typeof(list.join("")));


//Робота з Обєктами та масивами


const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs:function(thisObj)
    {
        let {languages} = thisObj.skills;
        return `Мне ${thisObj.age} и я владею языками: ${languages.join(" ").toUpperCase()}`;
    }
};

console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

//console.log(Object.keys(personalPlanPeter).length);
//console.log(Array.isArray(personalPlanPeter));

function showProgrammingLangs(plan) {

    let str = '';
    let {programmingLangs} = plan.skills;
    for(let key in programmingLangs)
    {
        str+=`Язык ${key} изучен на ${programmingLangs[key]}\n`;
    }
    // for(let key in  plan)
    // {
    //     if(typeof(plan[key])==="object"){
    //         for(let i in plan[key])
    //         {
    //             if(typeof(plan[key][i])==='object'&& !Array.isArray(plan[key][i]))
    //             {
    //                 //console.log(Object.keys(plan[key][i]).length);
    //                 if(Object.keys(plan[key][i]).length==0)
    //                 {
    //                     return "";
    //                 }
    //                 else{
    //                     for(let j in plan[key][i])
    //                     {
    //                     //console.log(plan[key][i][j]);
    //                     str+=`Язык ${j} изучен на ${plan[key][i][j]}\n`;
    //                     }
    //                 }
                    
    //             }
    //             //console.log(`Ключ - ${i} Значення - ${ plan[key][i]}`);
    //         }

    //     }
    // }
    return str;

}

console.log(showProgrammingLangs(personalPlanPeter));

function showExperience(plan) {

    //Деструктурізація
    const {exp} = plan.skills;
    return exp;

    //return plan.skills.exp;

}

console.log(showExperience(personalPlanPeter));
//-------------------------------------------------

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
 
    if(arr.lenght==0){ return  "Семья пуста";}
    let str = "Семья состоит из:";
    arr.forEach(function(item){
        str+=` ${item}`;
    });
    return str;


}

console.log(showFamily(family));


const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    arr.forEach((item)=>{
        console.log(`${item}`.toLowerCase());
    });
}

standardizeStrings(favoriteCities);

//--------------------------------------------

const someString = 'This is some strange string';

function reverse(str) {

    if(typeof(str)!="string")
    {
        return "Ошибка";
    }
    // const arr=  Array.from(str).reverse();
    // return arr.join("");
    return str.split("").reverse().join("");

}

console.log(reverse(someString));

//----------------------------------

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {

    let str="";
    arr.length === 0 ? str = "Нет доступных валют" : str = "Доступные валюты:\n";
    // let str = "Доступные валюты:\n";
    // if(arr.length==0)
    // {
    //     return "Нет доступных валют";
    // }
    // for(let i=0;i<arr.length;++i){
    //     if(arr[i]===missingCurr) {continue;}
    //     str+=`${arr[i]}\n`;
    // }
    
    arr.forEach(item=>{
        if(item!==missingCurr){
            str+=`${item}\n`;
        }
    });
    return str;
    
}

console.log(availableCurr([...baseCurrencies,...additionalCurrencies],'CNY'));


//-----------------------------------------------------------

const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
  
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
};

function isBudgetEnough(data) {
    
    let area = 0;
    let volume = 0;

    data.shops.forEach(item=>{
        area+=item.length*item.width;
    });
    
    volume = data.height*area;
    
    if(data.budget - (volume*data.moneyPer1m3)>=0){
    return 'Бюджета достаточно';
} else {
    return 'Бюджета недостаточно';
}



}

isBudgetEnough(shoppingMallData);


// let arr = [1,2,6,7,10,20];
// arr.forEach((item,i)=>{
//     console.log(item);
// });



//------------------------------------------------

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard','Sam'];

function sortStudentsByGroups(arr) {
 
  
    arr.sort();
    
 
    const studentsGroup = [];
    let studentsLength = 0;
    let str = "Оставшиеся студенты: ";
    let rest = false;
   
    for(let j=0;studentsLength<arr.length;++j){
        const group =[];
        for(let i=0;i<3;++i)
        {
            if(studentsLength==arr.length){
                rest=true;
                break;
            }
                 group[i]=arr[studentsLength];
                ++studentsLength;
        }
        if(group.length<3)
        {
           str+=group.join(", ");
            studentsGroup.push(str);
        }
        else
        {
        studentsGroup[j]=group;
     
        }
        
    }
    if(!rest)
    {
        str+= "-";
        studentsGroup.push(str);
    
    }
    return studentsGroup;
   
}


console.log(sortStudentsByGroups(students));


//Задача на рекурсію,Факторіал


function factorial(n) {
   
    if (typeof(n) !== 'number' || !Number.isInteger(n)) {
        return "Ошибка, проверьте данные";
    }

    if(n>=1)
    {
        return n*factorial(n-1);
    }
    else{
        return 1;
    }
    
}


console.log(factorial(3));



