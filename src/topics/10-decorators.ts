function classDecorator(constructor: any){
return class extends constructor{
    newProperty = 'new Property';
    hello='override'
}
}

@classDecorator
export class SuperClass{
    public myPropierty: string ="ABC123"

    print(){
        console.log("Hola mundo")
    }
}



console.log(SuperClass);
const myClass = new SuperClass();
console.log(myClass);