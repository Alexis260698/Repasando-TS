

export function whatsMyType<T>(argument: T): T{
    
    return argument;
}

let amIstring =whatsMyType('Hola Mundo');
let amInumber =whatsMyType(100);
let amIarray =whatsMyType([1,2,3,4,5,6]);


console.log(amIstring.split(' '));
console.log(amInumber.toFixed);
console.log(amIarray.join('-'));