<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Watch Later</title>
    <style>
   body {
            font-family: Arial, sans-serif;
            margin: 20px;
            width: 1200px;
            background-color: black;
           
        }

        h1 {
            text-align: center;
            margin-bottom: 20px;
            color: white;
        }

        .watch-later-list {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
            gap: 20px;
            max-width: 1000px;
            margin: 0 auto;
        }

        .watch-later-movie {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 5px;
            box-shadow: 1px 1px 4px white;
            border-radius: 5px;
            background-color: black;
        }

        .watch-later-movie h2 {
            font-size: 14px;
            margin-bottom: 5px;
            color: white;
        }

        .watch-later-movie img {
            width: auto;
            height: 250px;
            max-height: 200px;
            border-radius: 5px;
        }

        .watch-later-movie button {
            background: gray;
            border: 0;
            outline: 0;
        }
    </style>
</head>
<body>
    <h1>Movies to watch later:</h1>
    <div class="watch-later-list">
        <!-- Movies will be displayed here -->
    </div>

    <script>
        // Retrieve watch later list from localStorage
        let watchLater = JSON.parse(localStorage.getItem('watchlater')) || [];
    
        // Function to remove a movie from watch later
        function removeMovie(title) {
            watchLater = watchLater.filter(movie => movie.title !== title);
            localStorage.setItem('watchlater', JSON.stringify(watchLater));
            location.reload(); // Refresh the page to update the watch later list
        }
    
        // Get the container for displaying watch later movies
        const watchLaterList = document.querySelector('.watch-later-list');
    
        // Display each movie in the watch later list
        if (watchLater && watchLater.length > 0) {
            watchLater.forEach(movie => {
                const movieElement = document.createElement('div');
                movieElement.classList.add('watch-later-movie');
    
                // Create elements for movie title, image, and remove button
                const imageElement = document.createElement('img');
                imageElement.src = movie.imageSource;
    
                const titleElement = document.createElement('h2');
                titleElement.textContent = movie.title;
    
                const removeButton = document.createElement('button');
                removeButton.textContent = 'Remove';
                removeButton.addEventListener('click', () => removeMovie(movie.title));
    
                // Append title, image, and remove button to movie element
                movieElement.appendChild(imageElement);
                movieElement.appendChild(titleElement);
                movieElement.appendChild(removeButton);
    
                // Append the movie element to watch later list container
                watchLaterList.appendChild(movieElement);
            });
        } else {
            // If there are no movies, display a message
            const noMoviesMessage = document.createElement('p');
            noMoviesMessage.textContent = 'No movies added to watch later yet.';
            watchLaterList.appendChild(noMoviesMessage);
        }
    </script>
</body>
</html>
