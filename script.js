const resultArtist = document.getElementById("result-artist");
const playlistContainer = document.getElementById("result-playlist");
const searchInput = document.getElementById("search-input");

function requestApi(searchTerm) {
   const url = `http://localhost:3000/artists${searchTerm}`
   fetch(url)
    .then((response) => response.json())
    .then((results) => console.log(results));
}

function displayResults(results) {
  resultPlaylist.classList.add('hidden');
  const artistImage = document.getElementById("artist-img");
  const artistName = document.getElementById("artist-name");

  results.forEach((element) => {
    artistName.innerText = element.name;
    artistImage.src = element.urlImg;
  });
  resultArtist.classList.remove("hidden");
}

function hidePlaylists() {
  playlistContainer.classList.add("hidden");
}

searchInput.addEventListener("input", function () {
  const searchTerm = searchInput.value.toLowerCase();
  if (searchTerm === "") {
    resultArtist.classList.add("hidden");
    playlistContainer.classList.remove("hidden");
    return;
  }

  requestApi(searchTerm);
});

