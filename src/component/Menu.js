import React from 'react'
import {
    Navbar, Container, NavDropdown, Form, FormControl, Button, Nav
} from 'react-bootstrap'

const Menu = ({ menuToCard, result }) => {
    return (
        <Navbar bg="light" expand="lg" sticky="top" >
            <Container fluid>
                <Navbar.Brand href="#">Pokedex</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                        eventKey={menuToCard}
                        onSelect={(event, eventKey) => menuToCard(event)}
                    >
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <NavDropdown title="lingua">
                            <NavDropdown.Item eventKey={"english"} >english</NavDropdown.Item>
                            <NavDropdown.Item eventKey={"japanese"}>japanese</NavDropdown.Item>
                            <NavDropdown.Item eventKey={"chinese"} >chinese</NavDropdown.Item>
                            <NavDropdown.Item eventKey={"french"}  >french</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form className="d-flex" >
                        <FormControl
                            style={{ maxWidth: '20rem' }}
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            onChange={(event) => result(event.target.value)}
                        />
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Menu