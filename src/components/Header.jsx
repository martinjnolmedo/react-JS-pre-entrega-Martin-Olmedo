import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <Navbar bg="primary" variant="light" expand="lg" className="mb-4">
            <Container>
                <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
                    <img
                        src="https://img.icons8.com/?size=100&id=121371&format=png&color=000000"
                        alt="Logo"
                        className="d-inline-block align-top me-2"
                    />
                    <span>Tienda de ropa</span>
                </Navbar.Brand>

                <Nav className="ms-auto align-items-center">
                    <Nav.Link as={Link} to="/" className="me-3">Home</Nav.Link>
                    <Nav.Link as={Link} to="/ofertas" className="me-3">Ofertas</Nav.Link>
                    <Nav.Link as={Link} to="/infaltables" className="me-3">Exclusivos</Nav.Link>

                    <div className="d-flex align-items-center">
                        <Button variant="outline-dark" as={Link} to="/administracion" className="me-2">
                            Administración
                        </Button>
                        <Link to="/carrito" className="text-white">
                            <FontAwesomeIcon icon={faShoppingCart} size="lg" />
                        </Link>
                    </div>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;