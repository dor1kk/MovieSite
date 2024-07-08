<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Favorites</title>
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

.favorites-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 20px;
  max-width: 1000px;
  margin: 0 auto;
}

.favorite-movie {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
 box-shadow: 1px 1px 4px white;
  border-radius: 5px;
  background-color: black;
}

.favorite-movie h2 {
  font-size: 14px;
  margin-bottom: 5px;
  color: white;
}

.favorite-movie img {
  width: auto;
  height: 250px;
  max-height: 200px;
  border-radius: 5px;
}
.favorite-movie button{
    background: gray;
  
    border: 0;
    outline: 0;
}
    </style>
</head>
<body>

        <h1>Favorite Movies</h1>
        <div class="favorites-list">
      
        </div>
      
        <script>
     
            let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
          
       
            function removeFavorite(title) {
              favorites = favorites.filter(movie => movie.title !== title);
              localStorage.setItem('favorites', JSON.stringify(favorites));
              location.reload(); 
            }
   
            const favoritesList = document.querySelector('.favorites-list');

            if (favorites && favorites.length > 0) {
              favorites.forEach(movie => {
                const movieElement = document.createElement('div');
                movieElement.classList.add('favorite-movie');
          
          
                  
                const imageElement = document.createElement('img');
                imageElement.src = movie.imageSource || movie.poster; 

                const titleElement = document.createElement('h2');
                titleElement.textContent = movie.title;
           
        

                const removeButton = document.createElement('button');
                removeButton.textContent = 'Remove';
                removeButton.addEventListener('click', () => removeFavorite(movie.title));
          
                movieElement.appendChild(imageElement);
                movieElement.appendChild(titleElement);
             
                movieElement.appendChild(removeButton);
         
          
                favoritesList.appendChild(movieElement);
              });
            } else {
 
              const noFavoritesMessage = document.createElement('p');
              noFavoritesMessage.textContent = 'No favorite movies yet.';
              favoritesList.appendChild(noFavoritesMessage);
            }
          </script>
   
</body>
</html>
