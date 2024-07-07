import React, { useState, useEffect } from 'react';
import movieQuotesData from '../Data/movie-quotes.json';
import './MovieQuote.css'; // Assuming you have a CSS file for styling
import { Sidebar, SidebarButton } from '../components/Sidebar';

const MovieQuotes = () => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [quotes, setQuotes] = useState(movieQuotesData);
  const [loading, setLoading] = useState(false); // If you want to add loading state
  const [isSidebarOpen, setSidebarOpen] = useState(false);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((currentQuoteIndex + 1) % quotes.length);
    }, 5000); 



    return () => clearInterval(interval);
  }, [currentQuoteIndex, quotes.length]);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };


  return (
    <div className="containerr">
       <SidebarButton toggleSidebar={toggleSidebar} color={"white"} />
       <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="background-imagee"></div>
      <div className="containerr-content">
        <div className="quote-container">
          <div className="quote-item">
            <p className="quote-text">{quotes[currentQuoteIndex]}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieQuotes;
