import React, { useState } from "react";
import axios from "axios";

function Login({ setToken }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const { data } = await axios.post("http://localhost:3001/login", { email, password });
      setToken(data.token);
      alert("Login exitoso");
    } catch (err) {
      alert("Error en el login");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input placeholder="Contraseña" type="password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Iniciar sesión</button>
    </div>
  );
}

export default Login;
