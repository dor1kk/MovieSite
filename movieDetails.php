<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Movie Details</title>
    <style>
  
        body {
            font-family: Arial, sans-serif;
            background-color: black;
            color: white;
            margin: 0;
            padding: 20px;
            text-align: center;
            
        }
        .container {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            margin-top: 50px;
            display:  flex;
            flex-direction: row;

        }
        .poster img {
            max-width: 100%;
            height: auto;
            margin-bottom: 20px;
        }
        .info {
            text-align: left;
            width: 400px;
            margin-left: 50px;
        }
    </style>
</head>
<body>
    <h1>Movie Details</h1>
    <div class="container">
        <div class="poster">
            <img id="posterImg" src="" alt="Movie Poster">
            
        </div>
        <div class="info" id="movieDetailsContainer">
        
            <h2 id="title"></h2>
            <p><strong>Year:</strong> <span id="year"></span></p>
            <p><strong>Description:</strong> <span id="description"></span></p>
            <p><strong>Actors:</strong> <span id="actors"></span></p>
            <p><strong>Box Office:</strong> <span id="boxoffice"></span></p>
            <p><strong>Metascore:</strong> <span id="rating"></span></p>
            <p><strong>Genre:</strong> <span id="genre"></span></p>
            <p><strong>Runtime:</strong> <span id="runtime"></span></p>
     
            <button class="favorites-btn"> Add to favorites</button>
        </div>
    </div>

    <script>

        const params = new URLSearchParams(window.location.search);
        const movieName = params.get('movieName');

     
        if (movieName) {
            const apiKey = 'c7a3fb3c';
            const apiUrl = `http://www.omdbapi.com/?apikey=${apiKey}&t=${encodeURIComponent(movieName)}`;
            

            fetch(apiUrl)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    if (data.Response === 'False') {
                        document.getElementById('movieDetailsContainer').innerHTML = '<p>Movie not found</p>';
                    } else {
                        const movie = {
                            title: data.Title,
                            year: data.Year,
                            description: data.Plot,
                            actors: data.Actors,
                            poster: data.Poster,
                            BoxOffice: data.BoxOffice,
                           rating: data.Metascore,
                           genre: data.Genre,
                           runtime: data.Runtime,
                            
                         
                            
                        
                        };

                    
                        document.getElementById('posterImg').src = movie.poster;
                        document.getElementById('title').innerText = movie.title;
                        document.getElementById('year').innerText = movie.year;
                        document.getElementById('description').innerText = movie.description;
                        document.getElementById('actors').innerText = movie.actors;
                        document.getElementById('boxoffice').innerText = movie.BoxOffice;
                        document.getElementById('rating').innerText = movie.rating;
                        document.getElementById('genre').innerText = movie.genre;
                        document.getElementById('runtime').innerText = movie.runtime;
       
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    document.getElementById('movieDetailsContainer').innerHTML = '<p>Error fetching movie details</p>';
                });
        } else {
            document.getElementById('movieDetailsContainer').innerHTML = '<p>No movie name provided</p>';
        }

        function addToFavorites() {
            const movie = {
                title: document.getElementById('title').innerText,
                year: document.getElementById('year').innerText,
                description: document.getElementById('description').innerText,
                actors: document.getElementById('actors').innerText,
                poster: document.getElementById('posterImg').src,
                BoxOffice: document.getElementById('boxoffice').innerText,
                rating: document.getElementById('rating').innerText,
                genre: document.getElementById('genre').innerText,
                runtime: document.getElementById('runtime').innerText
           
            };

            let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
            const existingMovie = favorites.find(favMovie => favMovie.title === movie.title);

            if (!existingMovie) {
                favorites.push(movie);
                localStorage.setItem('favorites', JSON.stringify(favorites));
                alert(`Added ${movie.title} to favorites!`);
            } else {
                alert(`${movie.title} is already in favorites.`);
            }
        }

    
        document.addEventListener('DOMContentLoaded', function () {
            const favoritesBtn = document.querySelector('.favorites-btn');
            if (favoritesBtn) {
                favoritesBtn.addEventListener('click', addToFavorites);
            }
        });
    </script>
</body>
</html>
