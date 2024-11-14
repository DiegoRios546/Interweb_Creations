import React, { useState } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import TermsModal from './TermsModal';

import { useTermsAcceptance } from './useTermsAcceptance';
import { notifyWarning, notifySuccess } from './Notification';
import Footer from './Footer';
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Service from "./Service";
import Navbar from "./Navbar";
import Register from "./Register";
import TermsConditions from './TermsConditions'; 

function App() {
  const { hasAccepted, acceptTerms, rejectTerms } = useTermsAcceptance();
  const [showModal, setShowModal] = useState(!hasAccepted);

  const handleAccept = () => {
    acceptTerms();
    setShowModal(false);
    notifySuccess();
  };

  const handleReject = () => {
    rejectTerms();
    setShowModal(true);
    notifyWarning();
  };

  const handleRestrictedAction = () => {
    if (!hasAccepted) {
      notifyWarning();
      return;
    }
    // Lógica de solicitud de cotización o envío de mensajes
    alert('Acción permitida.');
  };

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/service" component={Service} />
        <Route exact path="/contact" component={Contact} />
        <Route path="/terms" component={TermsConditions} />
        <Route exact path="/register" component={Register} />
        <Redirect to="/" />
      </Switch>
      <Footer />
      {/* Mostrar el modal si el usuario no ha aceptado los términos */}
      <TermsModal show={showModal} onAccept={handleAccept} onReject={handleReject} />
    </Router>
  );
}

export default App;
