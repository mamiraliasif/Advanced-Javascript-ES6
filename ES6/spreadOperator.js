

//spread operator is  used to unpack the elements of an array into a new array

let str1 = [1,2,3];

let str2 = [5,6,7,...str1];

console.log(str2);

// we can use this anywhere in the front , end and middle  of the array as well. 

let str3 = [...str1,5,6,7];
console.log(str3);


let str4 = [5,6,...str1,7,8];
console.log(str4);