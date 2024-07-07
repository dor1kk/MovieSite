import React from 'react';
import { Carousel } from 'antd';
import './MovieSlider.css';

const movies = [
    {
        title: 'Despicable Me 4',
        releaseDate: '2024-03-30',
        image: 'https://m.media-amazon.com/images/M/MV5BNzRmNTMyZTItMmVlMS00NmMzLTgzYWYtZjc0MWNhZDA0NjA2XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg'
      },
  {
    title: 'Deadpool & Wolverine',
    releaseDate: '2024-01-01',
    image: 'https://hips.hearstapps.com/hmg-prod/images/deadpool-and-wolverine-trailer-6626602528a88.jpg?resize=980:*'
  },
  {
    title: 'Furiosa: A mad max story',
    releaseDate: '2024-02-15',
    image: 'https://www.carscoops.com/wp-content/uploads/2023/11/Furiosa-A-Mad-Max-Saga-2-1.jpg'
  },
  {
    title: 'Dune Part 2',
    releaseDate: '2024-03-30',
    image: 'https://miro.medium.com/v2/resize:fit:816/0*W-YmOwij6czZCp_a.jpg'
  },
  {
    title: 'Kingdom of the planet of Apes',
    releaseDate: '2024-03-30',
    image: 'https://www.hollywoodreporter.com/wp-content/uploads/2022/09/Kingdom-of-the-Planet-of-the-Apes-1-Publicity-H-2022.jpg?w=1296'
  },
  {
    title: 'Godzilla x Kong:New Empire',
    releaseDate: '2024-03-30',
    image: 'https://static1.colliderimages.com/wordpress/wp-content/uploads/2024/03/godzilla-x-kong_-the-new-empire-2024-poster.jpg'
  },

];

const MovieSlider = () => (
  <Carousel autoplay style={{marginTop:"250px"}}>
    {movies.map(movie => (
      <div key={movie.title} className="slider-item">
        <img src={movie.image} alt={movie.title} className="slider-image" />
        <div className="slider-content">
          <h2>{movie.title}</h2>
          <p>Release Date: {movie.releaseDate}</p>
        </div>
      </div>
    ))}
  </Carousel>
);

export default MovieSlider;
