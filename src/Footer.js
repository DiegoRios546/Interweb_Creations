import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={4}>
            <h5>Interweb Creations</h5>
            <p>Desarrollamos soluciones de software personalizadas para llevar tu negocio al siguiente nivel.</p>
          </Col>
          <Col md={4}>
            <h5>Enlaces Rápidos</h5>
            <Nav className="flex-column">
              <Nav.Link href="/about">Sobre Nosotros</Nav.Link>
              <Nav.Link href="/services">Servicios</Nav.Link>
              <Nav.Link href="/contact">Contacto</Nav.Link>
              <Nav.Link href="/terms">Términos y Condiciones</Nav.Link>
              <Nav.Link href="/privacy-policy">Política de Privacidad</Nav.Link>
            </Nav>
          </Col>
          <Col md={4}>
            <h5>Contacto</h5>
            <p>Email: info@interwebcreations.com</p>
            <p>Teléfono: +123 456 7890</p>
            <h5>Síguenos</h5>
            <Nav>
              <Nav.Link href="https://www.facebook.com" target="_blank">
                <FontAwesomeIcon icon={faFacebook} /> Facebook
              </Nav.Link>
              <Nav.Link href="https://www.twitter.com" target="_blank">
                <FontAwesomeIcon icon={faTwitter} /> Twitter
              </Nav.Link>
              <Nav.Link href="https://www.linkedin.com" target="_blank">
                <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
              </Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Container>
      <div className="text-center py-3">
        <p>&copy; {new Date().getFullYear()} Interweb Creations. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
