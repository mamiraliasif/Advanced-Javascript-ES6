// object destruction is just like the array destruction

let user = {
    name : 'Amir' ,
    Age: 21 ,
    Contact : "+92300"
};

console.log(user.Age,user.name);

let  {name:title , Age , Contact} = user;

console.log(title);
