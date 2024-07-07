import React, { useState, useEffect } from "react";
import { Row, Col, Card, Spin, Select, Modal, Button } from "antd";
import { Sidebar, SidebarButton } from "../components/Sidebar";
import tvShowsData from "../Data/tv-shows.json"; // Adjust the import path as needed
import 'bootstrap/dist/css/bootstrap.min.css';

const { Option } = Select;

const AllSeries = () => {
  const [series, setSeries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [selectedSeries, setSelectedSeries] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    // Initially load all TV series from tv-shows.json
    setSeries(tvShowsData);
  }, []);

  const filterAndSortSeries = () => {
    let filteredSeries = tvShowsData;

    if (selectedGenre) {
      filteredSeries = filteredSeries.filter((series) =>
        series.genres.includes(selectedGenre)
      );
    }

    if (sortBy === "name") {
      filteredSeries.sort((a, b) => a.name.localeCompare(b.name));
    }

    return filteredSeries;
  };

  const fetchSeries = () => {
    setLoading(true);
    try {
      const filteredSeries = filterAndSortSeries();
      setSeries(filteredSeries);
    } catch (error) {
      console.error("Error fetching TV series:", error);
    } finally {
      setLoading(false);
    }
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleSearch = (value) => {
    setSearchTerm(value);
    fetchSeries(); 
  };

  const handleGenreChange = (value) => {
    setSelectedGenre(value);
    setSeries(filterAndSortSeries());
  };

  const handleSortChange = (value) => {
    setSortBy(value);
    setSeries(filterAndSortSeries());
  };

  const handleCardClick = (series) => {
    setSelectedSeries(series);
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
              placeholder="Search TV series..."
              aria-label="Search TV series..."
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
      <Row gutter={[16, 16]} style={{ marginTop: "5px" }}>
        <Col span={24}>
          <Select
            placeholder="Select genre"
            style={{ width: 200, marginRight: 10 }}
            onChange={handleGenreChange}
          >
            <Option value="">All Genres</Option>
            {Array.from(
              new Set(
                tvShowsData.flatMap((series) =>
                  series.genres.map((genre) => genre.trim())
                )
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
            defaultValue="name"
            onChange={handleSortChange}
          >
            <Option value="name">Name</Option>
          </Select>
        </Col>
      </Row>
      <Row gutter={[16, 16]} style={{ marginTop: "25px" }}>
        {loading ? (
          <Spin size="large" />
        ) : (
          series.map((series) => (
            <Col xs={12} sm={8} md={6} lg={4} key={series.id}>
              <Card
                hoverable
                cover={<img alt={series.name} src={series.image.medium} />}
                onClick={() => handleCardClick(series)}
              >
                <Card.Meta title={series.name} />
              </Card>
            </Col>
          ))
        )}
      </Row>
      <Modal
        title={selectedSeries?.name}
        visible={modalVisible}
        onCancel={closeModal}
        footer={[
          <Button key="close" onClick={closeModal}>
            Close
          </Button>,
        ]}
      >
        <p>{selectedSeries?.summary}</p>
        <p>Genres: {selectedSeries?.genres.join(", ")}</p>
        <p>Language: {selectedSeries?.language}</p>
        <p>Rating: {selectedSeries?.rating.average}</p>
      </Modal>
    </div>
  );
};

export default AllSeries;
