import {Navbar,Nav } from 'react-bootstrap'
import {Link} from 'react-router-dom'

function Header(){
return(
    <div className="mr-auto nav_bar_wrapper">
    <Navbar bg="dark" variant="dark">
       
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
           <Nav className="me-auto">
               <Link to="/add">Add Product</Link>
               <Link to="/update">Update Product</Link>
               <Link to="/login">Login</Link>
               <Link to="/register">Register</Link>
            </Nav>
           
            </Navbar>
        </div>

)
  
}
export default Header