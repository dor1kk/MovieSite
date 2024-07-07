import React from 'react';
import { Menu } from 'antd';
import { HomeOutlined, VideoCameraOutlined, EnvironmentOutlined, InfoCircleOutlined } from '@ant-design/icons';

const Navbar = () => (
  <Menu mode="horizontal" className="custom-menu w-100" style={{marginLeft:"450px",marginTop:"-100px"}} theme="none" selectable={false}>
    <Menu.Item key="home" icon={<HomeOutlined />} className="custom-menu-item text-white">
      Home
    </Menu.Item>
    <Menu.Item key="movies" icon={<VideoCameraOutlined />} className="custom-menu-item text-white">
      Movies
    </Menu.Item>
    <Menu.Item key="theaters" icon={<EnvironmentOutlined />} className="custom-menu-item text-white">
      Theaters
    </Menu.Item>
    <Menu.Item key="about" icon={<InfoCircleOutlined />} className="custom-menu-item text-white">
      About
    </Menu.Item>
  </Menu>
);

export default Navbar;
