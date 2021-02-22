import './App.css';
import Headers from './Headers';
import {BrowserRouter as Router} from 'react-router-dom' 

function App() {
  return (
    <Router>
    <div className="App">
      <Headers/>
    </div>
    </Router>
  );
}

export default App;
