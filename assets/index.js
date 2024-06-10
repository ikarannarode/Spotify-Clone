const music = new Audio('https://pagalworld.com.pe/files/download/id/67774');
music.play();

const songs = [
    {
        id: 1,
        songName: 'On My Way<br><div class="subtitle">Alan Walker</div>',
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4JNBxQ9heAccIzbA61qgQ_jL8t8UtvoLDmQ&usqp=CAU"


    },
    {
        id: 2,
        songName: 'On My Way<br><div class="subtitle">Alan Walker</div>',
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4JNBxQ9heAccIzbA61qgQ_jL8t8UtvoLDmQ&usqp=CAU"


    },
    {
        id: 3,
        songName: 'On My Way<br><div class="subtitle">Alan Walker</div>',
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4JNBxQ9heAccIzbA61qgQ_jL8t8UtvoLDmQ&usqp=CAU"


    },
    {
        id: 4,
        songName: 'On My Way<br><div class="subtitle">Alan Walker</div>',
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4JNBxQ9heAccIzbA61qgQ_jL8t8UtvoLDmQ&usqp=CAU"


    },
    {
        id: 5,
        songName: 'On My Way<br><div class="subtitle">Alan Walker</div>',
        poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4JNBxQ9heAccIzbA61qgQ_jL8t8UtvoLDmQ&usqp=CAU"


    },
]
















let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];


pop_song_right.addEventListener('click', () => {
    pop_song.scrollLeft += 330;
})

pop_song_left.addEventListener('click', () => {
    pop_song.scrollLeft -= 330;
})

let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let pop_art = document.getElementsByClassName('pop_art')[0];
pop_art_right.addEventListener('click', () => {
    pop_art.scrollLeft += 100;
})
pop_art_left.addEventListener('click', () => {
    pop_art.scrollLeft -= 100;
})