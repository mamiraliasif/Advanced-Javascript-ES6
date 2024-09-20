

//array destruction is  used to unpack the values from an array and assign them to variables

let  fruits = ['apple', 'banana', 'cherry'];

let fruit1 = fruits[0];
let fruit2 = fruits[1];
let fruit3 = fruits[2];

console.log(fruit2);

let [fruit01, fruit02 ,fruit03] = fruits;
console.log(fruit03);

// now you can see  that array destruction is used to unpack the values from an array and assign them to variables.It makes things easy


// nested array  destruction 


let book = ["Harry potter", 500 , 800 , ["amir" , "Asif"]];

let[Title, price , pages , [author,  publisher]] = book;

console.log(author);

