

function print (x )
{
    console.log(x);
}

print("Amir");// here it gives value

print(); // undefined 

// to overcome this undefined  we use default parameter in the function

function print1 (x = "Hi" )
{
    console.log(x);
}

print1();




