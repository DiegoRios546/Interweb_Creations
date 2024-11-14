import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const notifySuccess = () => {
    toast.success('Términos aceptados!', {
        position: "top-right", // Cambiado a un string en lugar de usar `toast.POSITION.TOP_RIGHT`
        autoClose: 5000, // Tiempo de cierre automático
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
};

export const notifyWarning = () => {
    toast.warn('Debes aceptar los términos para continuar', {
        position: "top-right", // Cambiado a un string en lugar de usar `toast.POSITION.TOP_RIGHT`
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
};
