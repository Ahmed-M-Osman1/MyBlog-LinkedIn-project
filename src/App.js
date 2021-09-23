
import './App.css';
import { BrowserRouter as Router, Route }from 'react-router-dom'

import HomePage from './pages/HomePage';
function App() {
  return (
    <Route>
    <div className="App">
      <Route exact path="/" component={HomePage}/>
    </div>
    </Route>
  );
}

export default App;
