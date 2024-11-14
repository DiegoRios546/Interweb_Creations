import React, { useState } from 'react';
import axios from 'axios';
import './Register.css';

function Register() {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = isLogin ? '/login' : '/register';
        try {
            const { data } = await axios.post(`http://localhost:5000${url}`, formData);
            alert(data.message || '¡Autenticación exitosa!');
        } catch (error) {
            alert('Error en la autenticación');
        }
    };

    return (
        <div className="auth-container">
            <h2>{isLogin ? 'Iniciar Sesión' : 'Registro'}</h2>
            <form onSubmit={handleSubmit}>
                {!isLogin && (
                    <input
                        type="text"
                        name="name"
                        placeholder="Nombre"
                        value={formData.name}
                        onChange={handleChange}
                    />
                )}
                <input
                    type="email"
                    name="email"
                    placeholder="Correo electrónico"
                    value={formData.email}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    value={formData.password}
                    onChange={handleChange}
                />
                <button type="submit">{isLogin ? 'Iniciar Sesión' : 'Registrar'}</button>
            </form>
            <button onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? '¿No tienes cuenta? Regístrate' : '¿Ya tienes cuenta? Inicia sesión'}
            </button>
            <button className="google-btn">Iniciar sesión con Google</button>
        </div>
    );
}

export default Register;
