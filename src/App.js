import './App.css';
import { BrowserRouter as Router, Route }from 'react-router-dom'
import AboutPage from './pages/AboutPage';
import ArticalList from './pages/ArticalList';
import ArticalPage from './pages/ArticalPage'
import HomePage from './pages/HomePage';
import Navbar from './Navbar';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <Route exact path="/" component={HomePage}/>
      <Route path="/about" component={AboutPage}/>
      <Route path="/articles-list" component={ArticalList}/>
      <Route path="/article/:name" component={ArticalPage}/>
    </div>
    </Router>
  );
}

export default App;
