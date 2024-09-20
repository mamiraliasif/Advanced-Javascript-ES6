


// Rest parameter use in the function parameter and we denoted it with ...  symbol and in these function we use loop for output in the form of array behind the scene 


function sum(...args)
{
    let result = 0; 

    for(let i = 0;i < args.length ; i++)
    {
        result += args[i];
    }

    console.log(result);
}

sum(2,5);

sum(5,5,5,5);
