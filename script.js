const apiKey = "YOUR_API_KEY"; // OMDb API key

function searchMovie() {
    const movie = document.getElementById("movieName").value;
    const result = document.getElementById("movieResult");

    if (movie === "") {
        result.innerHTML = "❌ Please enter a movie name";
        return;
    }

    fetch(`https://www.omdbapi.com/?t=${movie}&apikey=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            if (data.Response === "False") {
                result.innerHTML = "❌ Movie not found";
            } else {
                result.innerHTML = `
                    <h3>${data.Title}</h3>
                    <img src="${data.Poster}">
                    <p><b>Year:</b> ${data.Year}</p>
                    <p><b>Rating:</b> ${data.imdbRating}</p>
                    <p><b>Genre:</b> ${data.Genre}</p>
                `;
            }
        })
        .catch(() => {
            result.innerHTML = "⚠️ Error loading data";
        });
}
