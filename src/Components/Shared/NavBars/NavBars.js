import React from 'react';
import { Navbar, Nav, NavDropdown, DropdownButton } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavBars.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { UserContext } from '../../../App';


const NavBars = () => {

    const [logInUser, setLogInUser] = useContext(UserContext)
    return (
        <>
            <Navbar style={{ backgroundColor: "#6047ec" }} sticky="top" expand="lg">
                <div className="container">
                    <Navbar.Brand as={Link} to="/"><h4 style={{ color: '#ffff' }}>User Interface</h4></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ml-auto my-2 my-lg-0 "
                            style={{ maxHeight: '100px' }}

                        >
                            <Nav.Link as={Link} to="/home" >Home</Nav.Link>
                            <Nav.Link as={Link} to="/addPost">My Profile</Nav.Link>
                            <Nav.Link as={Link} to="/contract">Contract</Nav.Link>

                            {logInUser.email && <div className="mr-5">
                                <NavDropdown
                                    id="navbarScrollingDropdown"
                                    title={
                                        logInUser.photoURL ? <img className="nav-img" src={logInUser.photoURL} alt="" /> : <FontAwesomeIcon icon={faUserCircle} style={{ fontSize: '25px', color: "white" }} />
                                    }
                                >
                                    <div className="text-center ">
                                        <NavDropdown.Item as={Link} to="/addPost">
                                            {
                                                logInUser.photoURL ? <img className="nav-img-profile" src={logInUser.photoURL} alt="" /> : <FontAwesomeIcon icon={faUserCircle} style={{ fontSize: "100px" }} />

                                            }
                                        </NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to="/"> <h5>{logInUser.name}</h5></NavDropdown.Item>

                                        <NavDropdown.Item as={Link} to="/addPost">
                                            <span className="view-profile">View Profile</span>
                                        </NavDropdown.Item>
                                        <NavDropdown.Divider />

                                        <NavDropdown.Item as={Link} to="/addPost">
                                            <div
                                                onClick={() => setLogInUser({})}
                                                className="text-danger">
                                                <FontAwesomeIcon icon={faSignOutAlt} className="black" />
                                                <b className="black" > Log Out</b>
                                            </div>
                                        </NavDropdown.Item>
                                    </div>
                                </NavDropdown>
                            </div>}
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </>
    );
};

export default NavBars;