import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';

import { Button } from "react-bootstrap";
import Login from "./Login";
import Register from "./Register";
import Header from "./Header";
import AddProduct from "./AddProduct";
import UpdateProduct from "./UpdateProduct";
import ProductList from "./ProductList";

import Protected from "./Protected";

function App() {
  return (
    <Router>
      
        <div className="App">
        <Switch>
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
                {/* blank path should be last so it doesnot overlaps othenr routes */}
                <Route path="/">
                  <Protected Cmp={ProductList} />
                </Route>
              </Switch>
        </div>
    </Router>
  );
}

export default App;
