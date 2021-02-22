import './App.css';
import Headers from './Headers';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom' 
import Login from './Login';
import Home from './Home'

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path="/checkout">
         <Headers/>
         </Route>
         <Route path="/login">
          <Login/>
        </Route>
        <Route path="/">
          <Headers/>
          <Home/>
        </Route>
      
      </Switch>
      
      
    </div>
    </Router>
  );
}

export default App;
