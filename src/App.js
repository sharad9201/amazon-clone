import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';

import { Button } from "react-bootstrap";
import Login from "./Login";
import Register from "./Register";
import Header from "./Header";
import AddProduct from "./AddProduct";
import UpdateProduct from "./UpdateProduct";
import Protected from "./Protected";

function App() {
  return (
    <Router>
      <div className="App">
          {/* <h1>E-Comm Project</h1> */}
             <Route path="/login">
                <Login />
              </Route>
              <Route path="/register">
                <Register />
              </Route>
              <Route path="/add">
                <Protected Cmp={AddProduct} />
              </Route>
              <Route path="/update">
              <Protected Cmp={UpdateProduct} />
              </Route>
      </div>
    </Router>
  );
}

export default App;
