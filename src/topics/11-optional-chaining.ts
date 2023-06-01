interface Passenger{
    name:string;
    children?:string [];
}

const pasenger1: Passenger ={
    name: "Alexis"
}

const pasenger2: Passenger ={
    name: "Melisa",
    children:["Natalia","Elisa"]
}

const printChildren =(passenger:Passenger) =>{
    const howManyChildren = passenger.children ? passenger.children?.length : 0;
    console.log(passenger.name,howManyChildren);
}

printChildren(pasenger1);
printChildren(pasenger2);
