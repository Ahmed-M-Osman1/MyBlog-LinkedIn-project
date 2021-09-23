import './App.css';
import { BrowserRouter as Router, Route }from 'react-router-dom'
import AboutPage from './pages/AboutPage';
import ArticalList from './pages/ArticalList';
import ArticalPage from './pages/ArticalPage'
import HomePage from './pages/HomePage';
function App() {
  return (
    <Route>
    <div className="App">
      <Route exact path="/" component={HomePage}/>
      <Route path="/about" component={AboutPage}/>
      <Route path="/articles-list" component={ArticalList}/>
      <Route path="/article" component={ArticalPage}/>
    </div>
    </Route>
  );
}

export default App;
