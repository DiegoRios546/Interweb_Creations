import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ExpertForm.css'; 
import experto from "../src/Pictures/experto.png";

const ExpertForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    needs: '',
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.termsAccepted) {
      alert('Formulario enviado con éxito');
    } else {
      alert('Debes aceptar los Términos y Condiciones');
    }
  };

  return (
    <div className="expert-form-container">
      <div className="form-container">
        <h2>¿Quieres desarrollar tu nuevo proyecto web?</h2>
        <p>
            Para dirigirte con las personas correctas primero llena los datos del formulario y nos comunicaremos contigo.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">Nombre:</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Apellido:</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="company">Nombre de Empresa:</label>
            <input
              type="text"
              className="form-control"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="needs">¿Qué necesita?</label>
            <textarea
              className="form-control"
              id="needs"
              name="needs"
              rows="4"
              value={formData.needs}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="termsAccepted"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="termsAccepted">
              Acepto los <Link to="/terms">Términos y Condiciones y la Política de Privacidad</Link>.
            </label>
          </div>

          <button type="submit" className="btn-form btn-primary">
            Enviar
          </button>
        </form>
      </div>
      <div className="form-image-container">
      <img src={experto} className="img-fluid form-image" alt="asistente experto"/>
      </div>
    </div>
  );
};

export default ExpertForm;
