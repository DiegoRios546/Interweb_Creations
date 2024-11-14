import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

const TermsModal = ({ show, onAccept, onReject }) => {
  const location = useLocation();

  // No mostrar el modal si la ruta es /terms o /privacy-policy
  if (location.pathname === '/terms') {
    return null; // No renderiza el modal
  }

  return (
    <Modal show={show} backdrop="static" keyboard={false}>
      <Modal.Header>
        <Modal.Title>Términos y Condiciones</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Al hacer clic en "Aceptar", aceptas nuestros 
          <a href="/terms" onClick={onReject}> Términos y Condiciones y la Política de Privacidad</a>.
        </p>
        <p>
          Para utilizar todas las funcionalidades de nuestra aplicación, debe aceptar los términos.
        </p>
      </Modal.Body>
      <Modal.Footer>
      <Button variant="secondary" onClick={onReject}>
          Rechazar
        </Button>
        <Button variant="primary" onClick={onAccept}>
          Aceptar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default TermsModal;
