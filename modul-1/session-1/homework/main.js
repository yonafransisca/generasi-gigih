const playlistForm = document.getElementById('playlist-form');

playlistForm.addEventListener('submit', function(event) {
    event.preventDefault()

    alert("successfully create playlist.");

    const playlistTitle = document.getElementById('playlist-title').value
    const playlistDesc = document.getElementById('playlist-desc').value

    console.log(playlistTitle)
    console.log(playlistDesc)
});