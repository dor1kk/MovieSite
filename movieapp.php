<?php
session_start(); 

?>



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DKFlix</title>
    <link rel="stylesheet" href="movieapp.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head>
<body>
     <header>
    <ul>
  
        <li><a href="#">Movies</a></li>

       
        <li>
            <a href="#">
            <select id="genreSelect">
    <option value="">Genres</option>
    <option value="action">Action</option>
    <option value="comedy">Comedy</option>
    <option value="romance">Romance</option>
</select>
    
            </a>
        </li>
        <li><a href="watchlater.php">Watch Later</a></li>
        <li><a href="favorites.php">Favorites</a></li>


        <?php if(isset($_SESSION['username'])) { ?>
    <style>
        .user {
            display: flex;
            margin-left: 350px;
            justify-content: center;
            border-radius: 50px;
            align-items: center;
            background: white;
            height: 5px;
            width: 10px;
            padding: 15px;
            opacity: 0.7;
            position: relative; /* Added position for proper hover */
            margin-right: -250px;
            
        }

        ul li i {
            color: black;
           margin-left: 3vh;
        }

        ul li h2 {
            color: black;
            display: none;
            text-transform: capitalize;
            opacity: 0.7;
            font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
            position: absolute; 
            top: 60%; 
            left: 50%;
            transform: translateX(-50%);
            background: white;
            padding: 2px 10px;
        
            z-index: 1; 
        }

        .user:hover h2 {
            display: block;
        }
    </style>

    <li>
        <div class="user">
            <i class="fa fa-user"></i>
            <h2><?php echo $_SESSION['username']; ?></h2>
        </div>
    </li>
<?php } ?>

       
       
  




        <form class="searchForm">
            <input type="text" id="movieName" placeholder="Search for a movie...">
            <button type="button" onclick="searchMovie()"><i class="fa fa-search"></i></button>
        </form>
        
       
       
    </ul>
   
</header>

 <div class="projekt">
    
   <h1 class="wallpaper"> Game of Thrones </h1>
    <img class="imgsrc" src="https://wallpapercave.com/wp/wp4275032.jpg">

    <div class="butonat">
        <ul>
            <li><button id="the-button" >Play</button></li>
            <li><button class="favorite"><a href="favorites.html">Favorites</a>  <b>+</b></button></li> 
        </ul>
    
</div>
<div class="titulli">
    <h3 class="imdb"><a href="https://www.imdb.com/title/tt0944947/">IMDB</a><span class="imdb1"><b>9.2</b>/10  <span class="ylli"> &bigstar; &bigstar; &bigstar; &bigstar; &bigstar;</span></span></h3>
    <span class="viti"><i>2011</i></span><a class="anje" href="#">Show more</a>


<div class="sezoni">
    <span class="sezonik">Sezoni-4:</span> </div>
    <div class="gott">
   <a href="#"> <img class="gotnje" style="width: auto; height: 100px;" src="https://static.onecms.io/wp-content/uploads/sites/6/2014/07/pedro-pascal_1.jpg"></a>
   <a href="#"> <img class="gotdy" style="width: auto; height: 100px;" src="https://cdn.vox-cdn.com/thumbor/PPfriC7C1IBhrXRSA7iaQuxOWog=/0x0:1019x679/2050x1367/cdn.vox-cdn.com/uploads/chorus_image/image/31117107/gots4.0.jpg"></a>
    <a href="#"><img class="gottre" style="width: auto; height: 100px;" src="https://e3.365dm.com/22/02/2048x1152/skynews-kit-harington-game-of-thrones_5676342.jpg"> </div>   </a>
    </div>


        

</div>


<!-- Background overlay -->
<div class="overlay"></div>

<!-- Modal HTML -->
<div id="myModal" class="modali">
  <span class="close">&times;</span>
  <div class="modal-content">
    <h3>Would you like to sign in or register?</h3>
    <div class="buttons">
    <button id="signInBtn">Sign In</button>
    <button id="registerBtn">Register</button>
</div>
  </div>
</div>


<nav>
    <h1>Famous Quotes From Movies</h1>
    <q id="quote">Click the button to generate a new quote:</q>
    <p id="person">Person</p>
    <button id="new-quote" onclick="newQuote()">New Quote</button>
  
</nav>
<hr>

<div class="movies">
    <!-- Movie 1: 22 Jump Street -->
    <div class="movie">
        <div class="modal modal">
            <div class="background-image"></div>
            <div class="content">
                <h1>22 Jump Street</h1>
                <p>"22 Jump Street" is an action comedy with two agents undercover as students investigating a drug trade at a university.</p>
                <button id="play">Play</button>
                <button class="watchLater">Watch Later</button>
                <button class="favorites-btn">+</button>
            </div>
        </div>
        <a href="https://www.youtube.com/watch?v=RLoKtb4c4W0">
            <img class="photo" src="https://m.media-amazon.com/images/M/MV5BMTcwNzAxMDU1M15BMl5BanBnXkFtZTgwNDE2NTU1MTE@._V1_FMjpg_UX1000_.jpg">
        </a>
        <div style="display: flex;"><p>22 Jump Street-2017</p></div>
    </div>

    <!-- Movie 2: 21 Jump Street -->
    <div class="movie">
        <div class="modal modal1">
            <div class="background-image"></div>
            <div class="content">
                <h1>21 Jump Street</h1>
                <p>"21 Jump Street" is an action comedy with two agents undercover as students investigating a drug trade at a university.</p>
                <button id="play">Play</button>
                <button class="watchLater">Watch Later</button>
                <button class="favorites-btn">+</button>
            </div>
        </div>
        <a href="#">
            <img class="photo1" src="https://upload.wikimedia.org/wikipedia/en/9/93/21JumpStreetfilm.jpg">
        </a>
        <p>21 Jump Street-2014</p>
    </div>

    <!-- Movie 3: Avengers: Infinity War -->
    <div class="movie">
        <div class="modal modal2">
            <div class="background-image"></div>
            <div class="content">
                <h1>Avengers: Infinity War</h1>
                <p>"Avengers: Infinity War" - The Avengers confront Thanos to stop his plan to obtain the Infinity Stones and destroy the universe.</p>
                <button id="play">Play</button>
                <button class="watchLater">Watch Later</button>
                <button class="favorites-btn">+</button>
            </div>
        </div>
        <a href="#">
            <img class="photo2" src="https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_.jpg">
        </a>
        <p>Avengers-2019</p>
    </div>
  <!-- ... (kodi i mëparshëm) ... -->

  <div class="movie">
    <div class="modal modal3">
        <div class="background-image"></div>
        <div class="content">
            <h1>Shrek</h1>
            <p>Shrek, the lovable ogre, goes on an adventure to rescue his princess.</p>
            <button id="play">Play</button>
            <button class="watchLater">Watch Later</button>
            <button class="favorites-btn">+</button>
        </div>
    </div>
    <a href="#">
        <img class="photo3" src="https://m.media-amazon.com/images/M/MV5BOGZhM2FhNTItODAzNi00YjA0LWEyN2UtNjJlYWQzYzU1MDg5L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg">
    </a>
    <p>Shrek - 2001</p>
</div>

<!-- Movie 5: Star Wars -->
<div class="movie">
    <div class="modal modal4">
        <div class="background-image"></div>
        <div class="content">
            <h1>Star Wars</h1>
            <p>An epic clash between the forces of good and evil in the galaxy.</p>
            <button id="play">Play</button>
            <button class="watchLater">Watch Later</button>
            <button class="favorites-btn">+</button>
        </div>
    </div>
    <a href="#">
        <img class="photo4" src="https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_.jpg">
    </a>
    <p>Star Wars - 2015</p>
</div>

<!-- Movie 6: The Dark Knight -->
<div class="movie">
    <div class="modal modal5">
        <div class="background-image"></div>
        <div class="content">
            <h1>The Dark Knight</h1>
            <p>Batman faces off against the Joker in a challenging battle for Gotham.</p>
            <button id="play">Play</button>
            <button class="watchLater">Watch Later</button>
            <button class="favorites-btn">+</button>
        </div>
    </div>
    <a href="#">
        <img class="photo5" src="https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_FMjpg_UX1000_.jpg">
    </a>
    <p>The Dark Knight - 2008</p>
</div>

<!-- Movie 7: Spider-Man: No Way Home -->
<div class="movie">
    <div class="modal modal6">
        <div class="background-image"></div>
        <div class="content">
            <h1>Spider-Man: No Way Home</h1>
            <p>Spider-Man confronts different dimensions to save the world.</p>
            <button id="play">Play</button>
            <button class="watchLater">Watch Later</button>
            <button class="favorites-btn">+</button>
        </div>
    </div>
    <a href="#">
        <img class="photo6" src="https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_FMjpg_UX1000_.jpg">
    </a>
    <p>Spider-Man: No Way Home</p>
</div>

<div class="movie">
    <div class="modal modal7">
        <div class="background-image"></div>
        <div class="content">
            <h1>Game of Thrones</h1>
            <p>Battles for power and the throne in a fantastical and epic world.</p>
            <button id="play">Play</button>
            <button class="watchLater">Watch Later</button>
            <button class="favorites-btn">+</button>
        </div>
    </div>
    <a href="#">
        <img class="photo7" src="https://m.media-amazon.com/images/M/MV5BN2IzYzBiOTQtNGZmMi00NDI5LTgxMzMtN2EzZjA1NjhlOGMxXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg">
    </a>
    <p>Game of Thrones</p>
</div>

<!-- Movie 9: Breaking Bad -->
<div class="movie">
    <div class="modal modal8">
        <div class="background-image"></div>
        <div class="content">
            <h1>Breaking Bad</h1>
            <p>A chemist returns to the production of methamphetamines after a serious diagnosis.</p>
            <button id="play">Play</button>
            <button class="watchLater">Watch Later</button>
            <button class="favorites-btn">+</button>
        </div>
    </div>
    <a href="#">
        <img class="photo8" src="https://m.media-amazon.com/images/M/MV5BYmQ4YWMxYjUtNjZmYi00MDQ1LWFjMjMtNjA5ZDdiYjdiODU5XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_.jpg">
    </a>
    <p>Breaking Bad</p>
</div>

<!-- Movie 10: Prison Break -->
<div class="movie">
    <div class="modal modal9">
        <div class="background-image"></div>
        <div class="content">
            <h1>Prison Break</h1>
            <p>A brother attempts to break his sibling out of prison in a risky adventure.</p>
            <button id="play">Play</button>
            <button class="watchLater">Watch Later</button>
            <button class="favorites-btn">+</button>
        </div>
    </div>
    <a href="#">
        <img class="photo9" src="https://media.s-bol.com/gB2QwlDBAxZ/550x772.jpg">
    </a>
    <p>Prison Break</p>
</div>

<!-- Movie 11: Peaky Blinders -->
<div class="movie">
    <div class="modal modal10">
        <div class="background-image"></div>
        <div class="content">
            <h1>Peaky Blinders</h1>
            <p>The crime family Peaky Blinders dominates Birmingham after World War I.</p>
            <button id="play">Play</button>
            <button class="watchLater">Watch Later</button>
            <button class="favorites-btn">+</button>
        </div>
    </div>
    <a href="#">
        <img class="photo10" src="https://flxt.tmsimg.com/assets/p14765800_i_v8_aa.jpg">
    </a>
    <p>Peaky Blinders</p>
</div>

<!-- Movie 12: Oppenheimer -->
<div class="movie">
    <div class="modal modal11">
        <div class="background-image"></div>
        <div class="content">
            <h1>Oppenheimer</h1>
            <p>The story of Robert Oppenheimer, the scientist who led the development of the atomic bomb.</p>
            <button id="play">Play</button>
            <button class="watchLater">Watch Later</button>
            <button class="favorites-btn">+</button>
        </div>
    </div>
    <a href="#">
        <img class="photo11" src="https://pbs.twimg.com/media/FvUVt3hXgAAxP1H?format=jpg&name=medium">
    </a>
    <p>Oppenheimer</p>
</div>
</div>
<div class="newpage">
    <button onclick="goToPage(1)">1</button>
    <button onclick="goToPage(2)">2</button>
    <button onclick="goToPage(3)">3</button>
    <button onclick="goToPage(4)">4</button>
    <button onclick="goToPage(5)">5</button>
    <button onclick="goToPage(6)">6</button>
    <button onclick="goToNextPage()">></button>
</div>

<script src="movie.js">  </script>
</script>
</body>
</html>
