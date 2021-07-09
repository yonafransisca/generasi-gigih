const playlistForm = document.getElementById('playlist-form');

playlistForm.addEventListener('submit', function(event) {
    event.preventDefault()

    alert("successfully create playlist.");

    const playlistTitle = document.getElementById('playlist-title').value
    const playlistDesc = document.getElementById('playlist-desc').value

    console.log(playlistTitle)
    console.log(playlistDesc)
});

// const xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function () {
//   if (xhr.status === 200) {
//     if (xhr.readyState === 4) {
//       console.log(JSON.parse(xhr.response));
//     }
//   } else {
//     console.log(xhr.responseText);
//   }
// }
// xhr.open('get', 'https://gist.githubusercontent.com/aryapradipta9/e6492383477803b233916e01f36d5465/raw/66942c739d66d3774303f84071696aa865a07077/single-sample.json');
// xhr.send();


// fetch('https://gist.githubusercontent.com/aryapradipta9/e6492383477803b233916e01f36d5465/raw/66942c739d66d3774303f84071696aa865a07077/single-sample.json')
//     .then(response => response.json())
//     .then(response => console.log(response)); //agar bentuknya object

const getSong = () => {
  fetch('https://gist.githubusercontent.com/aryapradipta9/e6492383477803b233916e01f36d5465/raw/66942c739d66d3774303f84071696aa865a07077/single-sample.json')
    .then((response) => {
      if (!response.ok) {
        return Promise.reject("there is an error fetching the data");
      }
      console.log("status ok", response);
      return response.json();
    })
    .then((data) => {
      console.log("successfully retrieve song info.", data);
    })
    .catch((err) => {
      alert("unable to retrieve song info.", err);
    });
};
getSong();




