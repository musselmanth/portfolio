import './App.css';
import NavBar from './NavBar/NavBar.js';
import Home from './pages/about/AboutPage.js';
import Blog from './pages/blog/BlogPage.js'
import { Routes, Route} from 'react-router-dom';
import Portfolio from './pages/portfolio/PortfolioPage';
import Resume from './pages/resume/ResumePage';
import useWindowResizeThreshold from './hooks/useWindowResizeThreshold';
import useWindowScrolled from './hooks/useWindowScrolled';
import Footer from './Footer/Footer';
import NotFound from './NotFound'

const MAX_MOBILE_WIDTH = 890;
const SCROLLED_AMT = 120

const App = () => {
  const isMobileSize = useWindowResizeThreshold(MAX_MOBILE_WIDTH)
  const isScrolled = useWindowScrolled(SCROLLED_AMT)

  return (
    <>
      <NavBar isMobileSize={isMobileSize} isScrolled={isScrolled}/>
      <div className={`page-content ${(isMobileSize || isScrolled) && "sm-margin"}`}>
        <Routes>
          <Route path="/" element={ <Home /> }/>
          <Route path="/blog" element={ <Blog /> }/>
          <Route path="/portfolio" element={ <Portfolio /> }/>
          <Route path="/resume" element={ <Resume /> }/>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
