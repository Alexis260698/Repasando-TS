
const skill : string[] = ['Bash', 'Counter', 'Healing']


interface Icharacter {
    name: string,
    hp: number,
    skills: string[],
    homeTown?: string
}


const character : Icharacter ={
    name: 'Alexis',
    hp: 100,
    skills: ['Bash', 'Counter']
}

character.homeTown='Morelia';

console.table(character);


export{};