import React, { useState } from 'react';
import { Layout, Menu, Input, Tabs, Card, Row, Col, Modal } from 'antd';
import './MoviesSection.css'; // Import CSS for styles

const { Header, Content, Footer } = Layout;
const { TabPane } = Tabs;
const { Meta } = Card;
const { Search } = Input;

const moviesData = [
    {
      title: 'Oppenheimer',
      image: 'https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_FMjpg_UX1000_.jpg',
      rating: 8.5,
      description: 'Biographical film about the life of physicist J. Robert Oppenheimer and his role in the development of the atomic bomb.',
      trailer: 'https://www.youtube.com/watch?v=cw2QbmwEYDQ'
    },
    {
      title: 'Spider Man: Across the Spideverse',
      image: 'https://m.media-amazon.com/images/M/MV5BMzI0NmVkMjEtYmY4MS00ZDMxLTlkZmEtMzU4MDQxYTMzMjU2XkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_FMjpg_UX1000_.jpg',
      rating: 7.8,
      description: 'Miles Morales returns for the next chapter of the Spider-Verse saga, an epic adventure that will transport Brooklyn’s full-time, friendly neighborhood Spider-Man across the Multiverse',
      trailer: 'https://www.youtube.com/watch?v=QyCgntBgt1E'
    },
    {
      title: 'Barbie',
      image: 'https://m.media-amazon.com/images/M/MV5BNjU3N2QxNzYtMjk1NC00MTc4LTk1NTQtMmUxNTljM2I0NDA5XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg',
      rating: '7.8',
      description: 'A live-action film based on the popular Barbie toy line, following the adventures of Barbie in various roles and settings.',
      trailer: 'https://www.youtube.com/watch?v=ONHpPCDdGlg'
    },
    {
      title: 'Guardians of the Galaxy: 2',
      image: 'https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_.jpg',
      rating: '7.8',
      description: 'The Guardians must fight to keep their newfound family together as they unravel the mystery of Peter Quill\'s true parentage.',
      trailer: 'https://www.youtube.com/watch?v=d96cjJhvlMA'
    },
    {
      title: 'Fast 2 Furious',
      image: 'https://m.media-amazon.com/images/M/MV5BMzExYjcyYWMtY2JkOC00NDUwLTg2OTgtMDI3MGY2OWQzMDE2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg',
      rating: '7.8',
      description: 'Former cop Brian O\'Conner teams up with his ex-con friend Roman Pearce to transport a shipment of "dirty" money for a shady Miami-based import-export dealer.',
      trailer: 'https://www.youtube.com/watch?v=76wkiFmQ6as'
    },
    {
      title: 'Mission Impossible 7',
      image: 'https://m.media-amazon.com/images/M/MV5BYzFiZjc1YzctMDY3Zi00NGE5LTlmNWEtN2Q3OWFjYjY1NGM2XkEyXkFqcGdeQXVyMTUyMTUzNjQ0._V1_FMjpg_UX1000_.jpg',
      rating: '7.8',
      description: 'Ethan Hunt and his team race against time to prevent a global catastrophe, as a new danger emerges from the shadows.',
      trailer: 'https://www.youtube.com/watch?v=VPdWsJtZhDc'
    },
    {
      title: 'Shrek',
      image: 'https://m.media-amazon.com/images/M/MV5BOGZhM2FhNTItODAzNi00YjA0LWEyN2UtNjJlYWQzYzU1MDg5L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg',
      rating: '7.8',
      description: 'An ogre, in order to regain his swamp, travels along with an annoying donkey in order to bring a princess to a scheming lord, wishing himself King.',
      trailer: 'https://www.youtube.com/watch?v=W37DlG1i61s'
    },
    {
      title: 'Captain America:The Winter Soldier',
      image: 'https://m.media-amazon.com/images/M/MV5BMzA2NDkwODAwM15BMl5BanBnXkFtZTgwODk5MTgzMTE@._V1_FMjpg_UX1000_.jpg',
      rating: '7.8',
      description: 'As Steve Rogers struggles to embrace his role in the modern world, he teams up with a fellow Avenger and S.H.I.E.L.D agent, Black Widow, to battle a new threat.',
      trailer: 'https://www.youtube.com/watch?v=NLWsK1ZFunA'
    },
    {
      title: 'Finding Nemo',
      image: 'https://m.media-amazon.com/images/M/MV5BYWE0MzUzNDctNTFiYS00YzY3LWEzYWMtMDQyMWE5OTMxOTBiXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg',
      rating: '7.8',
      description: 'After his son is captured in the Great Barrier Reef and taken to Sydney, a timid clownfish sets out on a journey to bring him home.',
      trailer: 'https://www.youtube.com/watch?v=wZdpNglLbt8'
    },
    {
      title: 'Indiana Jones',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTROaOUa-kX-n1OugzXkU7VwLw_oYxwkIWgPg&s',
      rating: '7.8',
      description: 'Archaeologist and adventurer Indiana Jones is hired by the U.S. government to find the Ark of the Covenant before the Nazis can obtain its awesome powers.',
      trailer: 'https://www.youtube.com/watch?v=x9Jq7sKElX4'
    },
    {
      title: 'Transformers',
      image: 'https://m.media-amazon.com/images/M/MV5BZTNiNDA4NmMtNTExNi00YmViLWJkMDAtMDAxNmRjY2I2NDVjXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg',
      rating: '7.8',
      description: 'An ancient struggle between two Cybertronian races, the heroic Autobots and the evil Decepticons, comes to Earth, with a clue to the ultimate power held by a teenager.',
      trailer: 'https://www.youtube.com/watch?v=dYDGqmxMZFI'
    },
    {
      title: 'Eternals',
      image: 'https://m.media-amazon.com/images/M/MV5BMTExZmVjY2ItYTAzYi00MDdlLWFlOWItNTJhMDRjMzQ5ZGY0XkEyXkFqcGdeQXVyODIyOTEyMzY@._V1_FMjpg_UX1000_.jpg',
      rating: '7.8',
      description: 'The saga of the Eternals, a race of immortal beings who lived on Earth and shaped its history and civilizations.',
      trailer: 'https://www.youtube.com/watch?v=0WVDKZJkGlY'
    }
  ];
  

  const genres = ['All', 'Action', 'Comedy', 'Drama', 'Horror', 'Romance', 'Sci-Fi'];

  const MoviesSection = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedGenre, setSelectedGenre] = useState('All');
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState(null);
  
    const handleSearchChange = (value) => {
      setSearchTerm(value);
    };
  
    const handleGenreChange = (key) => {
      setSelectedGenre(key);
    };
  
    const handleSeeMore = (movie) => {
      setSelectedMovie(movie);
      setModalVisible(true);
    };
  
    const filteredMovies = moviesData.filter(movie => 
      (selectedGenre === 'All' || movie.genre === selectedGenre) &&
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    return (
      <Layout style={{backgroundColor: "white"}}>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">Home</Menu.Item>
            <Menu.Item key="2">Top Rated</Menu.Item>
            <Menu.Item key="3">Categories</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px', marginTop: 64 }}>
          <div className="site-layout-content" style={{ padding: 24, minHeight: 380 }}>
            <Row gutter={16} style={{ marginBottom: '20px' }}>
              <Col span={12}>
                <Search 
                  placeholder="Search Movies" 
                  onSearch={handleSearchChange} 
                  enterButton 
                  style={{ width: '100%' }} 
                />
              </Col>
            </Row>
            <Tabs defaultActiveKey="All" onChange={handleGenreChange}>
              {genres.map(genre => (
                <TabPane tab={genre} key={genre}>
                  <Row gutter={[16, 16]}>
                    {filteredMovies.map((movie, index) => (
                      <Col key={index} xs={24} sm={12} md={8} lg={6} xl={4}>
                        <Card
                          hoverable
                          cover={<img alt={movie.title} src={movie.image} />}
                        >
                          <Meta title={movie.title} />
                          <div className="movie-overlay">
                            <p>Rating: {movie.rating}</p>
                            <p>{movie.description}</p>
                            <a href="#" onClick={() => handleSeeMore(movie)}>See more</a>
                          </div>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </TabPane>
              ))}
            </Tabs>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Movie Website ©2024 Created by Learning System</Footer>
  
        <Modal
          title={selectedMovie ? selectedMovie.title : ''}
          centered
          visible={modalVisible}
          onCancel={() => setModalVisible(false)}
          footer={null}
        >
          {selectedMovie && (
            <div className="modal-content">
              <iframe
                width="100%"
                height="315"
                src={selectedMovie.trailer.replace('watch?v=', 'embed/')}
                frameBorder="0"
                allowFullScreen
                title="Movie Trailer"
              />
            </div>
          )}
        </Modal>
      </Layout>
    );
  };
  
  export default MoviesSection;