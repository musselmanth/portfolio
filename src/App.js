import './App.css';
import NavBar from './NavBar.js';
import Home from './Home.js';
import Blog from './Blog.js'
import { Routes, Route} from 'react-router-dom';
import Portfolio from './Portfolio';
import Resume from './Resume';

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
