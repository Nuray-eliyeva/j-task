//1palindrom string
let palind =(str)=>{
    let newStr= str.split('').reverse().join('');
    if(newStr==str){
     return true
    }
    else{
        return false
    }
}
console.log(palind('utu'));

//2  string simvol sayi
let str="salamsala";
if(20>str.length && str.length>10){
   console.log(true)
}
else{
   console.log(false)
}
//3 edediorta
let arr=[1,2,3,4,5,6,7,8,9];
let cem=0;
for(let i=0;i< arr.length;i++){
    cem =cem+ arr[i];
}
let ededOrta=cem/arr.length;
console.log(ededOrta);

