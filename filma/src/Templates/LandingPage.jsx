import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './LandingPage.css';
import MovieInfoPage from '../components/MovieInfo';
import { Sidebar, SidebarButton } from '../components/Sidebar';

const LandingPage = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [movieData, setMovieData] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onSearch = (value) => {
    setSearchTerm(value);
    fetchMovieData(value);
    showModal();
  };

  const fetchMovieData = async (title) => {
    try {
      const response = await axios.get(`http://www.omdbapi.com/?apikey=c7a3fb3c&t=${title}`);
      setMovieData(response.data);
    } catch (error) {
      console.error('Error fetching movie data:', error);
    }
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="main-section">
      <SidebarButton toggleSidebar={toggleSidebar} color={"white"} />
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <div className="search-container">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search for a movie"
            aria-label="Search for a movie"
            aria-describedby="button-addon2"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            className="btn btn-danger"
            type="button"
            id="button-addon2"
            onClick={() => onSearch(searchTerm)}
          >
            Search
          </button>
        </div>
      </div>

      <div className='content'>
        <MovieInfoPage />
      </div>

      <Modal
        title={movieData?.Title}
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Close
          </Button>
        ]}
      >
        {movieData && (
          <div style={{ display: "flex" }}>
            <div>
              <img src={movieData.Poster} alt={movieData.Title} style={{ width: "auto", height: "200px" }} />
            </div>
            <div style={{ marginLeft: "25px" }}>
              <p>Runtime: {movieData.Runtime}</p>
              <p>Released: {movieData.Released}</p>
              <p>Actors: {movieData.Actors}</p>
              <p>{movieData.Plot}</p>
              <p>IMDB Rating: {movieData.imdbRating}</p>
            </div>
          </div>
        )}
      </Modal>

      <div className="background-image"></div>
      <div className="glowing-element glowing-element-1"></div>
      <div className="glowing-element glowing-element-2"></div>
      <div className="glowing-element glowing-element-3"></div>
    </div>
  );
};

export default LandingPage;
