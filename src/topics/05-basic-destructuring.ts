
interface IAudioPlayer{
    audioVolume : number;
    songDuration : number;
    song : String;
    details : IDetails;
}

interface IDetails{
    author: string;
    year: number;
}


const audioPlayer: IAudioPlayer ={
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: "2pac",
        year: 1990
    }
}

const song = 'new song';
const {song: anotherSong, songDuration:duration, details: details} = audioPlayer;


const {author: author2}= details;

//console.log('Song : '+ anotherSong);
//console.log('Duration : '+ duration);
//console.log('author : '+ author2);

const [ , , trunks = "No se encuentra"] : string[]=["goku", "vegeta", "trunks"]


console.error('personaje 3: '+ trunks)
export{}