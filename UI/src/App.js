import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Link } from 'react-router-dom'
import Create from './components/create';
import Read from './components/read';


function App() {
  return (
    <div className="app">
      <Router>
        <div>
          <ul>
            <li><Link to="/">Create</Link></li>
            <li><Link to="/read">Users</Link></li>
          </ul>

          <Route exact path='/' component={Create}/>
          <Route  path='/read' component={Read}/>
        </div>
      </Router>
    </div>
  );
}

export default App;
