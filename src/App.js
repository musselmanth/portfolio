import './App.css';
import NavBar from './NavBar/NavBar.js';
import Home from './pages/about/AboutPage.js';
import Blog from './pages/blog/BlogPage.js'
import { Routes, Route} from 'react-router-dom';
import Portfolio from './pages/portfolio/PortfolioPage';
import Resume from './pages/resume/ResumePage';

import useWindowResizeThreshold from './useWindowResizeThreshold';

const MAX_MOBILE_WIDTH = 960;

const App = () => {
  const isMobileSize = useWindowResizeThreshold(MAX_MOBILE_WIDTH)

  return (
    <>
      <NavBar isMobileSize={isMobileSize}/>
      <div className={`page-content ${isMobileSize && "sm-margin"}`}>
        <Routes>
          <Route path="/" element={ <Home /> }/>
          <Route path="/blog" element={ <Blog /> }/>
          <Route path="/portfolio" element={ <Portfolio /> }/>
          <Route path="/resume" element={ <Resume /> }/>
        </Routes>
      </div>
    </>
  );
}

export default App;
