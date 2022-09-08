"use strict";

// function pow(x,n){
//     let result = 1;
//     for(let i=0;i<n;++i)
//     {
//         result*=x;
//     }
//     return result;

// }

//Рекурсія
function pow(x,n){
  if(n===1){return x;}
  else{
    return x * pow(x,n-1);
  }

}

console.log(pow(2,3));
console.log(pow(2,4));


const obj ={

    name : "Jon",
    age : 25,
    parents : {
        nameFather : "Alex",
        nameMother : "Kristina"
    }

};

console.log(Object.values(obj).length);
console.log(Array.isArray(Object.values(obj)));







let students = {

    js : [
        {
            name : "Jon",
            progres : 100
        },
        {
            name : "Ivan",
            progres : 70
        }
    ],
    html : {
        basic : [
        {
            name : "Alex",
            progres : 50
        },
        {
            name : "Foka",
            progres : 30
        }
    ],
    pro : [
        {
            name : "Piter",
            progres : 40
        }
    ]
    
    }
};

console.log(students);

function getTotalProgress(obj){

    let total = 0;
    let students = 0;
    
    for(let value of Object.values(obj))
    {
        if(Array.isArray(value))
        {
            students += value.length;
            value.forEach(item=>{
                total+=item.progres;
            });

            
        }
        else
        {
            for(let subCourse of Object.values(value))
            {
                students += subCourse.length;
                //console.log(subCourse.length);
                subCourse.forEach(item=>{
                    total+=item.progres;
                });
            }

        }
    }

    return total/students;

}

//console.log(getTotalProgress(students));

function getTotalProgressRecurssion(data)
{
    if(Array.isArray(data))
    {
        let total = 0;
        data.forEach(item=>{
            total+=item.progres;
        });
        return [total,data.length];

    }
    else
    {
        let total = [0,0];
        for(let subData of Object.values(data))
        {
            const SubDataArr = getTotalProgressRecurssion(subData);
            total[0]=SubDataArr[0];
            total[1]=SubDataArr[1];
        }

        return total;
    }
}