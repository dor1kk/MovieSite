import React, { useState } from 'react';
import { Layout, Menu, Input, Select, Row, Col, Typography } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import MovieList from '../components/MovieList';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './TopRated.css'; // Import custom CSS for glowing elements

const { Header, Content, Footer } = Layout;
const { Option } = Select;
const { Title } = Typography;

const Toprated = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('All');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (value) => {
    setCategory(value);
  };

  return (
    <Layout style={{ backgroundColor: "white", height:"70vh" }}>
   
      <Content style={{ padding: '0 50px', marginTop: "50px" }}>
        <div className="site-layout-content" style={{ padding: 24, minHeight: 380, maxWidth: 1100, margin: '0 auto', marginBottom:"-50px" }}>
          <Title level={2} style={{ textAlign: 'center' }}>Top Rated Movies</Title>
          <Row gutter={16} style={{ marginBottom: '20px' }}>
            <Col span={12}>
              <Input 
                placeholder="Search Movies" 
                value={searchTerm} 
                onChange={handleSearchChange} 
                style={{ width: '100%' }} 
                suffix={<SearchOutlined />}
              />
            </Col>
            <Col span={12}>
              <Select 
                defaultValue="All" 
                style={{ width: '100%' }} 
                onChange={handleCategoryChange}
              >
                <Option value="All">All Categories</Option>
                <Option value="Action">Action</Option>
                <Option value="Comedy">Comedy</Option>
                <Option value="Drama">Drama</Option>
                <Option value="Horror">Horror</Option>
                <Option value="Romance">Romance</Option>
                <Option value="Sci-Fi">Sci-Fi</Option>
              </Select>
            </Col>
          </Row>
         
          <MovieList searchTerm={searchTerm} category={category} />
        </div>
      
      </Content>
    </Layout>
  );
};

export default Toprated;
