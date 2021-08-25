import {Navbar,Nav,NavDropdown } from 'react-bootstrap'
import {Link} from 'react-router-dom'

function Header(){
    //finds the user-name 
    const user = JSON.parse(localStorage.getItem('user-info'))
    console.log(user)
return(
    <div className="mr-auto nav_bar_wrapper">
    <Navbar bg="dark" variant="dark">
       
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        {/* protected routes after user info the login and resister is disables */}
           <Nav className="me-auto">
               {
                   localStorage.getItem('user-info') ?
                   <>
                    <Link to="/add">Add Product</Link>
                    <Link to="/update">Update Product</Link>
                   </> :

                   <>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                   </>
               }
               
               
            </Nav>
            <Nav>
            <NavDropdown title={user.name}>
                <NavDropdown.Item>LOgout</NavDropdown.Item>
                <NavDropdown.Item>Profile</NavDropdown.Item>

                </NavDropdown>
            </Nav>
           
            </Navbar>
        </div>

)
  
}
export default Header