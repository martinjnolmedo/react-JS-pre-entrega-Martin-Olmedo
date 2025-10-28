import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css';

const Footer = () => {
    return (
        <footer className="bg-dark text-white text-center py-4 mt-4">
            <Container>
                <Row>
                    <Col md={6}>
                        <p className="mb-0">Práctica ReactJS Talento Tech - BA</p>
                        <p className="mb-0">CABA - Argentina</p>
                    </Col>
                    <Col md={6}>
                        <div>
                            <a href="http://facebook.com" className="text-white me-3" target='_blank'>
                                <i className="fa fa-facebook fa-2x"></i>
                            </a>
                            <a href="http://x.com" className="text-white me-3" target='_blank'>
                                <i className="fa fa-twitter fa-2x"></i>
                            </a>
                            <a href="http://instagram.com" className="text-white" target='_blank'>
                                <i className="fa fa-instagram fa-2x"></i>
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;