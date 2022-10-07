/*
Find song to play
Look up tabs or tutorial video for song
Learn intro of song
Learn Middle of song
Master intro of song
Learn end of song
Master whole song
Play for people
*/

const song = (songToPlay) => {
    console.log("We will be learning " + songToPlay + ".")
};
const tabs = (music) => {
    console.log(`Look up tabs or tutorial for ${music}`)
};
const intro = () => {
    console.log("Learn the intro to the song.")
}
const middle = () => {
    console.log("Learn the middle of the song.")
}
const masterIntro = () => {
    console.log("Master the intro to the song.")
}
const endOfSong = () => {
    console.log("Learn the end of the song") 
}
const masterSong = () => {
    console.log("Master/Memorize the entire song all together.")
}
const playGuitar = () => {
    console.log("Play the song you learned for others to hear.")
}
song("Master of Puppets - Metallica");
tabs("Master of Puppets - Metallica");
intro();
middle();
masterIntro();
endOfSong();
masterSong();
playGuitar();