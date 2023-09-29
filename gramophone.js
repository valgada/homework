function gramophone(band, album, song) {
    let sumAlbum = 0;
    let sumBand = 0;
    let sumSong = 0;

        for(let i = 0; i < album.length; i++) {
            sumAlbum++;
        }

        for(let i = 0; i < band.length; i++) {
            sumBand++;
        }

        for(let i = 0; i < song.length; i++) {
            sumSong++;
        }

        
    let duration = (sumAlbum * sumBand) * sumSong / 2;

    let rotations = duration / 2.5;

    console.log(`The plate was rotated ${Math.ceil(rotations)} times.`);
    
}
gramophone('Black Sabbath', 'Paranoid', 'War Pigs');
gramophone('Rammstein', 'Sehnsucht', 'Engel');
