import React from 'react';
import { Drawer, Button, Menu } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import './Sidebar.css';
import { Link } from 'react-router-dom';

const { Item } = Menu;

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <Drawer
      title="Menu"
      placement="left"
      closable={true}
      onClose={toggleSidebar}
      visible={isOpen}
      width={250} 
    >
      <Menu mode="vertical">
        <Item key="1">
          <Link to="/">Home</Link>
        </Item>
        <Item key="2">
          <Link to="/movies">Movies</Link>
        </Item>
        <Item key="3">
          <Link to="/tv-series">Tv Series</Link>
        </Item>
        <Item key="4">
          <Link to="/movie-quote">Movie Quotes</Link>
        </Item>
      </Menu>
    </Drawer>
  );
};

const SidebarButton = ({ toggleSidebar, color }) => {
  return (
    <Button
      type="none"
      icon={<MenuOutlined style={{ fontSize: '24px' }} />}
      onClick={toggleSidebar}
      className="menu-button"
      style={{ color: color }}
    />
  );
};

export { Sidebar, SidebarButton };
