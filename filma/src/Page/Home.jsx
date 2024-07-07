import { useState } from 'react'

import LandingPage from '../Templates/LandingPage'
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import Toprated from '../Templates/TopRated';
import ThisYears from '../Templates/ThisYears';
import MoviesSection from '../Templates/Movies';


function Home() {

  return (
    <>
    <LandingPage />
    <Toprated />
    <ThisYears />
    <MoviesSection />
   </>
  )
}

export default Home
