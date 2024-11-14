import { useState, useEffect } from 'react';

// Hook personalizado para gestionar la aceptación de los términos
export const useTermsAcceptance = () => {
  const [hasAccepted, setHasAccepted] = useState(false);

  useEffect(() => {
    // Revisamos si ya se han aceptado los términos en localStorage
    const termsAccepted = localStorage.getItem('hasAcceptedTerms');
    if (termsAccepted === 'true') {
      setHasAccepted(true);
    }
  }, []);

  const acceptTerms = () => {
    setHasAccepted(true);
    localStorage.setItem('hasAcceptedTerms', 'true');
  };

  const rejectTerms = () => {
    setHasAccepted(false);
    localStorage.removeItem('hasAcceptedTerms');
  };

  return { hasAccepted, acceptTerms, rejectTerms };
};
