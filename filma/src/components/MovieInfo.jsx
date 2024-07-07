import React, { useState } from 'react';
import { Typography, Button, Modal } from 'antd';
import { StarFilled } from '@ant-design/icons';
import './MovieInfo.css'; 

const { Title, Paragraph } = Typography;


const MovieInfoPage = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleWatchNow = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (

  <div className="movie-info-page" style={{marginLeft:"-400px", marginTop:"50px"}}>
    <div className="movie-info-content" style={{display:"flex", flexDirection:"column", justifyContent:"center"}}>
      <span className="movie-title">Deadpool 2</span>
      <div className="d-flex flex-row">
      <div className="movie-rating" style={{fontSize:"16px"}}>
        <StarFilled style={{ color: 'yellow' }} />
        <StarFilled style={{ color: 'yellow' }} />
        <StarFilled style={{ color: 'yellow' }} />
        <StarFilled style={{ color: 'yellow' }} />
        <StarFilled style={{ color: 'white' }} />
      </div>
      <span style={{marginLeft:"15px"}}> Action, Adventure, Comedy, 18 May 2018</span>
      </div>
      <Paragraph className="movie-description" style={{color:"lightgrey"}}>
      After surviving a near-death experience, irreverent mercenary Wade Wilson, aka Deadpool, forms a team of mutants called X-Force to protect a young mutant boy with powerful abilities from the time-traveling soldier Cable. As Deadpool battles Cable and his own inner demons, he discovers the importance of family and what it means to truly be a hero.      </Paragraph>
    
      <div className="movie-buttons" style={{marginTop:"50px"}}>
      <button  className="btn " style={{ background: "red", color: "white", width: "200px" }} onClick={handleWatchNow}>
            Watch Now
          </button>      </div>

      
    </div>
    <Modal
        title="Deadpool 2 Trailer"
        visible={modalVisible}
        onCancel={closeModal}
        footer={null}
      >
        <div className="video-container">
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/D86RtevtfrA"  
            title="Deadpool 2 Trailer"
            frameBorder="0"
            allowFullScreen
          />
        </div>
      </Modal>
  </div>
  )
};

export default MovieInfoPage;
