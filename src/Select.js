import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { FaShoppingCart, FaBuilding, FaGraduationCap, FaHeartbeat, FaDollarSign, FaIndustry } from 'react-icons/fa';
import './select.css';

const Select = () => {
  // Definimos los enlaces y títulos de cada botón
  const links = [
    { label: 'E-commerce', url: '/ecommerce', icon: <FaShoppingCart /> },
    { label: 'Construcción', url: '/construccion', icon: <FaBuilding /> },
    { label: 'Educación', url: '/educacion', icon: <FaGraduationCap /> },
    { label: 'Salud', url: '/salud', icon: <FaHeartbeat /> },
    { label: 'Finanzas', url: '/finanzas', icon: <FaDollarSign /> },
    { label: 'Manufactura', url: '/manufactura',icon: <FaIndustry /> },
  ];

  return (
    <Container fluid className="large-section">
      <h1 className="section-title text-center mb-5">Selecciona el Tipo de Desarrollo que Necesitas</h1>
      <div className="button-list d-flex flex-column align-items-center">
        {links.map((link, index) => (
          <Button 
            key={index} 
            href={link.url} 
            variant="outline-light" 
            className="link-button my-2"
            size="lg"
          >
            {link.label}
          </Button>
        ))}
      </div>
    </Container>
  );
};

export default Select;
