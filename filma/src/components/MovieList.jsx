import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import movies from '../Data/TopRatedData'; // Import your movie data
import './MovieList.css'; // Import CSS for styling

const MovieList = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [currentMovie, setCurrentMovie] = useState(null);

  const openModal = (movie) => {
    setCurrentMovie(movie);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <div className="movie-list" style={{ marginTop: "100px" }}>
      {movies.map((movie, index) => (
        <div key={index} className="movie-poster">
          <img src={movie.posterUrl} alt={movie.title} />
          <Button type="none" style={{color:"white"}} onClick={() => openModal(movie)}>
            See Trailer
          </Button>
        </div>
      ))}

      <Modal
        title={currentMovie ? `${currentMovie.title} Trailer` : ''}
        visible={modalVisible}
        onCancel={closeModal}
        footer={null}
      >
        {currentMovie && (
          <div className="video-container">
            <iframe
              width="100%"
              height="400"
              src={currentMovie.trailerUrl}
              title={`${currentMovie.title} Trailer`}
              frameBorder="0"
              allowFullScreen
            />
          </div>
        )}
      </Modal>
    </div>
  );
};

export default MovieList;
