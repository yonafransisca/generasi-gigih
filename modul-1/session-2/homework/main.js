// Create Playlist

const playlistForm = document.getElementById('playlist-form');

playlistForm.addEventListener('submit', function(event) {
    event.preventDefault()

    alert("successfully create playlist.");

    const playlistTitle = document.getElementById('playlist-title').value
    const playlistDesc = document.getElementById('playlist-desc').value

    console.log(playlistTitle)
    console.log(playlistDesc)
});

// GET Track Info

fetch('https://gist.githubusercontent.com/aryapradipta9/e6492383477803b233916e01f36d5465/raw/66942c739d66d3774303f84071696aa865a07077/single-sample.json')
    .then(response => response.json())
    .then(response => {
        console.log(response);
        const songInfo = showSongInfo(response);
        const songCard = document.getElementById('song-card');
        songCard.innerHTML = songInfo;
    }) 
    .catch((err) => {
        alert("unable to retrieve song info.", err);
    });


function showSongInfo(response) {
  return `<img class="song-image" src="${response.album.images[0].url}">
          <p class="song-title">${response.name}</p>
          <p class="singer">${response.artists[0].name}</p>
          <p class="album">${response.album.name}</p>
          <button class="btn" href="${response.album.external_urls.spotify}">Open in Spotify</button>`;
}




