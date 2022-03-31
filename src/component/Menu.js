import React from 'react'
import {
    Navbar, Container, NavDropdown, Form, FormControl, Nav
} from 'react-bootstrap'

const Menu = ({ menuToCard, result }) => {
    return (
        <Navbar style={{ backdropFilter: "blur(6px)" }} expand="lg" sticky="top" >
            <Container fluid>
                <Navbar.Brand href="#">Pokedex</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '150px' }}
                        navbarScroll
                        eventKey={menuToCard}
                        onSelect={(event, eventKey) => menuToCard(event)}
                    >
                        <Nav.Link>Home</Nav.Link>
                        <NavDropdown title="Lingua" style={{ maxWidth: '10rem' }}>
                            <NavDropdown.Item eventKey={"english"} >english</NavDropdown.Item>
                            <NavDropdown.Item eventKey={"japanese"}>japanese</NavDropdown.Item>
                            <NavDropdown.Item eventKey={"chinese"} >chinese</NavDropdown.Item>
                            <NavDropdown.Item eventKey={"french"}  >french</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Ricerca per statistiche" >
                            <tbody className=" text-center">
                                <tr>
                                    <td >HP</td>
                                    <td><FormControl onChange={result} name="HP" /></td>
                                    <td>Sp. Attack</td>
                                    <td><FormControl onChange={result} name="spAttack" /></td>
                                </tr>
                                <tr>
                                    <td>Attack</td>
                                    <td><FormControl onChange={result} name="Attack" /></td>
                                    <td>Sp. Defense</td>
                                    <td><FormControl onChange={result} name="spDefense" /></td>
                                </tr>
                                <tr>
                                    <td>Defense</td>
                                    <td><FormControl onChange={result} name="Defense" /></td>
                                    <td>Speed</td>
                                    <td><FormControl onChange={result} name="Speed" /></td>
                                </tr>
                            </tbody>
                        </NavDropdown>
                    </Nav>
                    <Form className="d-flex" >
                        <FormControl
                            style={{ maxWidth: '18rem' }}
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            onChange={result} name="search"
                        />
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    )
}

export default Menu