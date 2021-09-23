import './App.css';
import { BrowserRouter as Router, Route,Switch }from 'react-router-dom'
import AboutPage from './pages/AboutPage';
import ArticleListPage from './pages/ArticleListPage';
import ArticalPage from './pages/ArticalPage'
import HomePage from './pages/HomePage';
import Navbar from './Navbar';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route path="/about" component={AboutPage}/>
      <Route path="/articles-list" component={ArticleListPage}/>
      <Route path="/article/:name" component={ArticalPage}/>
      <Route component={NotFoundPage}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
