import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './view/pages/Home'
import NotFound from './view/pages/NotFound'
import Navbar from './view/components/Navbar';
import Rates from './view/pages/Rates';
import AccessibilityChecker from './view/pages/AccessibilityChecker';
import BackToTop from './view/components/backToTop';
import { getInitialTheme, setTheme } from './controllers/themeController'


function App() {
  useEffect(() => { setTheme(getInitialTheme()) }, []);


  return (
    <Router basename="/">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/rates" element={<Rates />} />
        <Route path="/free-tools/accessibility-checker" element={<AccessibilityChecker />} />
      </Routes>
      <BackToTop />
      {/* <Footer /> */}

    </Router>
  )
}

export default App
