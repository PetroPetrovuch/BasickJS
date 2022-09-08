"use strict";

//Робота з масивами 

const arr = [1,2,3,4,5];
let arr2 = [6,7,8,9,10];

// for(let i in arr)
// {
//     //console.log(i);//Індекс
//     console.log(arr[i]);
// }

for(let i of arr)
{
    console.log(i);//елемент
}

//Перебор елементів масива

// for(let i of arr)//i цe елемента масива
// {
//     console.log(i);
// }

arr.forEach(item=>{
    console.log(item);
});

//Копіювання масива

//1)
let copyArr = [];
copyArr = arr2;
console.log(copyArr);

//2)

// const copyArr = [...arr];
// copyArr[1]=20;
// console.log(arr,copyArr);

//3)

// const copyArr = arr.slice();
// copyArr[1]=20;
// console.log(arr,copyArr);

//Поєднання масивів

// const copyArr = [...arr,...arr2];
// console.log(copyArr);

//Робота з обєктами

const obj ={

    name : "Jon",
    age : 25,
    parents : {
        nameFather : "Alex",
        nameMother : "Kristina"
    }

};

//Копіювання обєкта за допомогою циклу
//1)

const copyObj = {};


// for(let key in obj)
// {
//     copyObj[key] = obj[key];
//     console.log(`key : ${key} value ${obj[key]}`);
// }
// copyObj.parents.nameFather = "David";//Обєкт копіюється по силці
// console.log(obj);

for(let key in obj)
{
  
    if(typeof(obj[key])=="object")
    {
        copyObj[key]={};
        
        for(let i in obj[key])
        {
            console.log(obj[key][i]);
            copyObj[key][i]= obj[key][i];
        }
    }
    else
    {
        copyObj[key] = obj[key];
    }
}

copyObj.parents.nameFather = "Jon";//Копіюється значення
console.log(obj);
console.log(copyObj);

// console.table(obj);

//Копіювання обєкта

//2

// const copyObj = {...obj};
// copyObj.age = 35;
// console.log(obj,copyObj);

//3

// const copyObj = Object.assign({},obj);
// copyObj.age = 35;
// copyObj.parents.nameMother = "Olga";
// console.log(obj,copyObj);




const ObjInArray = {//Обєкт в масиві копіюється теж по силці
    arr: [
        {
            name : "Alex",
            age : 15
        }
    ]
};

const copyObjInArray = Object.assign(ObjInArray);
copyObjInArray.arr[0].name = "Bob";
console.log(ObjInArray);

//Копіювання обєкта за допомогою рекурсії

const user ={

    name : "Jon",
    age : 25,
    parents : {
        nameFather : [
            {
                1:"1",
                2:"2"
            },
            {
                3:"3",
                4:"4"
            }
        ],
        nameMother : {
            mather1 : "Linda",
            mather : "Sara"
        }
    }

};

const newObj = {};

function copyObjFunction(obj,copyObj)
{
    
    for(let i in obj)
    {
       
        if(typeof(obj[i]) == "object")
        {
            Array.isArray(obj[i]) ? copyObj[i]=[] : copyObj[i]={};
            copyObjFunction(obj[i],copyObj[i]);
         }
        else{
            copyObj[i]=obj[i];
        }
    }
    return copyObj;
}

copyObjFunction(user,newObj);

newObj.parents.nameFather[0][1]="4";
console.log(user);
console.log(newObj);
console.log(user.parents.nameFather);
console.log(newObj.parents.nameFather);











