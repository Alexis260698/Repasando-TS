
function addNumbers(a: number, b:number){
return a+b;
}

const addNumbersArrow = (a: number, b:number): string => {
    return `${a+b}`;
}


const result = addNumbers(1,2);
const result2 = addNumbersArrow(1,2);







function multiply(firstNumber:number, SecondNumber?: number, base:number = 2){
   return firstNumber * base;
}

const multiplyResult: number= multiply(5);

interface icharacter {
    name:string,
    hp:number,
    showHp:()=> void;
}

const healCharacter =(character: icharacter, amount: number) =>{

    character.hp+=amount;

}

const alexis : icharacter = {
    name: 'Alexis',
    hp: 50,
    showHp(){
        console.log(`Puntos de vida ${this.hp}`);
    }
}

alexis.showHp();
healCharacter(alexis, 10);
alexis.showHp();
console.log({result ,result2 , multiplyResult});

export{};