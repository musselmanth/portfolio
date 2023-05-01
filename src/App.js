import './App.css';
import NavBar from './NavBar.js';
import Home from './pages/about/AboutPage.js';
import Blog from './pages/blog/BlogPage.js'
import { Routes, Route} from 'react-router-dom';
import Portfolio from './pages/portfolio/PortfolioPage';
import Resume from './pages/resume/ResumePage';

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <Routes>
        <Route path="/" element={ <Home /> }/>
        <Route path="/blog" element={ <Blog /> }/>
        <Route path="/portfolio" element={ <Portfolio /> }/>
        <Route path="/resume" element={ <Resume /> }/>
      </Routes>
    </div>
  );
}

export default App;
