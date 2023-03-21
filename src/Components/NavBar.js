import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'


export const NavBar = ({FilterBySearch}) => {
    const [searchValue, setSerachValue] = useState("")

    const onSearch = (e) => {
        e.preventDefault()
        FilterBySearch(searchValue)
        setSerachValue("")
    }

    return (
        <Row>
            <Col>
                <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#">
                        <div className='navbar-logo'>
                            مطعم اللؤلؤة 
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                        type="text"
                        placeholder="بحث .."
                        className="mx-2"
                        aria-label="Search"
                        onChange={(e) => setSerachValue(e.target.value)}
                        value={searchValue}
                        />
                        <button onClick={ (e) => onSearch(e)} className='btn-search fw-bold '>ابحث</button>
                    </Form>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
            </Col>
        </Row>
    )
}
