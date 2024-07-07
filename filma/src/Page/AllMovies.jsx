import React, { useState, useEffect } from "react";
import { Select, Row, Col, Card, Spin, Modal, Button } from "antd";
import MovieData from "../Data/movies-250.json";
import { Sidebar, SidebarButton } from "../components/Sidebar";
import 'bootstrap/dist/css/bootstrap.min.css';

const { Option } = Select;

const AllMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [sortBy, setSortBy] = useState("title");
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null); // Track the selected movie for modal

  useEffect(() => {
    setMovies(MovieData.movies);
  }, []);

  const filterAndSortMovies = () => {
    let filteredMovies = MovieData.movies;

    if (selectedYear) {
      filteredMovies = filteredMovies.filter((movie) => movie.Year === selectedYear);
    }
    if (selectedGenre) {
      filteredMovies = filteredMovies.filter((movie) =>
        movie.Genre.toLowerCase().includes(selectedGenre.toLowerCase())
      );
    }

    if (sortBy === "title") {
      filteredMovies.sort((a, b) => a.Title.localeCompare(b.Title));
    } else if (sortBy === "rating") {
      filteredMovies.sort((a, b) => parseFloat(b.imdbRating) - parseFloat(a.imdbRating));
    }

    return filteredMovies;
  };

  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  const handleYearChange = (value) => {
    setSelectedYear(value);
    setMovies(filterAndSortMovies());
  };

  const handleGenreChange = (value) => {
    setSelectedGenre(value);
    setMovies(filterAndSortMovies());
  };

  const handleSortChange = (value) => {
    setSortBy(value);
    setMovies(filterAndSortMovies());
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const openModal = (movie) => {
    setSelectedMovie(movie);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <div style={{ padding: "20px", marginTop: "20px" }}>
      <SidebarButton toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <div className="input-group mb-3 mt-4">
            <input
              type="text"
              className="form-control"
              placeholder="Search movies..."
              aria-label="Search movies..."
              aria-describedby="button-addon2"
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
            />
            <button
              className="btn btn-danger"
              type="button"
              id="button-addon2"
              onClick={() => handleSearch(searchTerm)}
            >
              Search
            </button>
          </div>
        </Col>
      </Row>
      <Row gutter={[16, 16]} style={{ marginTop: "15px" }}>
        <Col span={24}>
          <Select
            placeholder="Select year"
            style={{ width: 200, marginRight: 10 }}
            onChange={handleYearChange}
          >
            <Option value="">All Years</Option>
            {Array.from(new Set(MovieData.movies.map((movie) => movie.Year))).sort().map((year) => (
              <Option key={year} value={year}>
                {year}
              </Option>
            ))}
          </Select>
          <Select
            placeholder="Select genre"
            style={{ width: 200, marginRight: 10 }}
            onChange={handleGenreChange}
          >
            <Option value="">All Genres</Option>
            {Array.from(
              new Set(
                MovieData.movies
                  .flatMap((movie) => movie.Genre.split(", ").map((genre) => genre.trim()))
              )
            ).map((genre) => (
              <Option key={genre} value={genre}>
                {genre}
              </Option>
            ))}
          </Select>
          <Select
            placeholder="Sort by"
            style={{ width: 120 }}
            defaultValue="title"
            onChange={handleSortChange}
          >
            <Option value="title">Title</Option>
            <Option value="rating">Rating</Option>
          </Select>
        </Col>
      </Row>
      <Row gutter={[16, 16]} style={{ marginTop: "25px" }}>
        {loading ? (
          <Spin size="large" />
        ) : (
          movies.map((movie, index) => (
            <Col xs={12} sm={8} md={6} lg={4} key={index}>
              <Card
                hoverable
                cover={<img alt={movie.Title} src={movie.Poster} />}
                onClick={() => openModal(movie)}
              >
                <Card.Meta title={movie.Title} />
              </Card>
            </Col>
          ))
        )}
      </Row>

      <Modal
        title={selectedMovie ? selectedMovie.Title : ""}
        visible={modalVisible}
        onCancel={closeModal}
        footer={[
          <Button key="close" onClick={closeModal}>
            Close
          </Button>,
        ]}
      >
        {selectedMovie && (
          <div>
            <p><strong>Year:</strong> {selectedMovie.Year}</p>
            <p><strong>Rated:</strong> {selectedMovie.Rated}</p>
            <p><strong>Released:</strong> {selectedMovie.Released}</p>
            <p><strong>Runtime:</strong> {selectedMovie.Runtime}</p>
            <p><strong>Genre:</strong> {selectedMovie.Genre}</p>
            <p><strong>Director:</strong> {selectedMovie.Director}</p>
            <p><strong>Actors:</strong> {selectedMovie.Actors}</p>
            <p><strong>Plot:</strong> {selectedMovie.Plot}</p>
            <p><strong>Language:</strong> {selectedMovie.Language}</p>
            <p><strong>Country:</strong> {selectedMovie.Country}</p>
            <p><strong>Awards:</strong> {selectedMovie.Awards}</p>
            <p><strong>IMDb Rating:</strong> {selectedMovie.imdbRating}</p>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default AllMovies;
