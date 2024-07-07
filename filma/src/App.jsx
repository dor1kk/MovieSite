import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import LandingPage from './Templates/LandingPage';
import Home from './Page/Home';
import AllMovies from './Page/AllMovies'; 
import AllSeries from './Page/AllSeries';
import MovieQuotesPage from './Page/MovieQuote';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<AllMovies />} />
          <Route path="/tv-series" element={<AllSeries/>} />
          <Route path="/movie-quote" element={<MovieQuotesPage/>} />


        </Routes>
      </div>
    </Router>
  );
}

export default App;
