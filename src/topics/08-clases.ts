import { Person } from './08-clases';
export class Person {
    //public name: string; 
    //public address: string;


    constructor
        (
            public name: string,
            public address: string = 'No Address'
        ) { }

}

//export class Hero extends Person{
//constructor(
//    public alterEgo:string,
//   public age: number,
//   public realName: string,
//   public address:string
//){

//  super(realName, address);
//}

//}

export class Hero {


    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public address: string, 
        public Person:Person
    ) {

    }
}

const tony = new Person('Tony Stark', 'New York')


const ironman = new Hero('IronMan', 45, 'Tony Stark', 'address', tony);

console.log(ironman);


