import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './styles/global.scss'
import Home from './view/pages/Home.jsx'
import NotFound from './view/pages/NotFound.jsx'
import Navbar from './view/components/Navbar.jsx';
import Rates from './view/pages/Rates.jsx';
import BackToTop from './view/components/backToTop.jsx';
import {getInitialTheme, setTheme} from './controllers/themeController.js'


function App() {
useEffect(() => {setTheme(getInitialTheme())}, []);


  return (
    <Router basename="/">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/rates" element={<Rates />} />
      </Routes>
      <BackToTop />
      {/* <Footer /> */}

    </Router>
  )
}

export default App
