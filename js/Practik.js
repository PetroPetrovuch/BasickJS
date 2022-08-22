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