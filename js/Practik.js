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

