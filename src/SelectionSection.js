import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './SelectionSection.css';
import appmovil from "../src/Pictures/appmovil.png";
import appweb from "../src/Pictures/appweb.png";
import adminDB from "../src/Pictures/adminDB.png";
import cloud from "../src/Pictures/cloud.png";
import marketing from "../src/Pictures/marketing.png";
import redes from "../src/Pictures/redes.png";

const SelectionSection = () => {
  // Opciones de selección con título, descripción, ícono y enlace
  const options = [
    {
      label: 'IWC Mobile Application',
      description: 'Desarrollo de aplicaciones moviles para android y Ios. Seguras y robustas.',
      imageUrl: appmovil,
      url: '/mobileapp'
    },
    {
      label: 'IWC Web Application',
      description: 'Soluciones tecnológicas para tu industria o negocio. Agil y eficiente.',
      imageUrl: appweb,
      url: '/webapp'
    },
    {
      label: 'IWC Admin Database',
      description: 'Gestion y analisis de datos en bases de datos de grandes cantidades.',
      imageUrl: adminDB,
      url: '/admin'
    },
    {
      label: 'IWC Cloud',
      description: 'Almacenamiento de datos en la nube.',
      imageUrl: cloud,
      url: '/cloud'
    },
    {
      label: 'IWC Marketing digital',
      description: 'Creacion y gestion de campañas de marketing ajustadas al cliente.',
      imageUrl: marketing,
      url: '/marketing'
    },
    {
      label: 'IWC Redes',
      description: 'Instalacion y configuracion de conexiones de cableado para redes y wifi.',
      imageUrl: redes,
      url: '/redes'
    },
  ];

  return (
    <Container fluid className="detailed-section">
      <h2>-Nuestros Productos-</h2>
      <h1 className="section-title mb-5">Las mejores soluciones para potenciar tu negocio.</h1>
      <Row className="text-center">
        {options.map((option, index) => (
          <Col md={4} sm={6} xs={12} key={index} className="mb-4">
            <div className="option-card shadow-sm p-4">
            <img src={option.imageUrl} alt={option.label} className="option-image" />
              <h4 className="option-label">{option.label}</h4>
              <p className="option-description">{option.description}</p>
              <Button href={option.url} variant="outline-light" className="explore-button">
                Explorar
              </Button>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SelectionSection;
