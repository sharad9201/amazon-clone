import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

function Header() {
  const history = useHistory();
  //finds the user-name
  const user = JSON.parse(localStorage.getItem("user-info"));
  console.log(user);

  function logout() {
    localStorage.clear();
    history.push("/register");
  }
  return (
    <div className="mr-auto nav_bar_wrapper">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        {/* protected routes after user info the login and resister is disables */}
        <Nav className="me-auto">
          {localStorage.getItem("user-info") ? (
            <>
              <Link to="/">Products</Link>
              <Link to="/add">Add Product</Link>
              <Link to="/update">Update Product</Link>
              <Link to="/search">Search Product</Link>

            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}
        </Nav>

        {localStorage.getItem("user-info") ? (
          <Nav>
            <NavDropdown title={user && user.name}>
              <NavDropdown.Item onClick={logout}>LOgout</NavDropdown.Item>
              <NavDropdown.Item>Profile</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        ) : null}
      </Navbar>
    </div>
  );
}
export default Header;
