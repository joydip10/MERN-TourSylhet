import React from 'react';
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import UseAuth from './../AuthProvider/UseAuth';
const Header = () => {
    const { user } = UseAuth();
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/" className="text-success">Tour Dé Sylhet</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            {
                                (user?.email) &&
                                <>
                                    <Nav.Link as={Link} to="/myEvents">My Events</Nav.Link>
                                </>
                            }
                            <Nav.Link as={Link} to="/addEvents">Add Events</Nav.Link>
                            <Nav.Link as={Link} to="/manageEvents">Manage Events</Nav.Link>
                            
                            <Nav.Link as={Link} to="/login">{(user?.email)?"Log Out" : "Log In"}</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Collapse className="justify-content-end">
                        {
                            (user?.email) &&
                            <Navbar.Text>
                                Signed in as: {user?.displayName}
                            </Navbar.Text>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;