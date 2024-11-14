import React, { useState, useEffect } from "react";
import axios from "axios";

function Profile({ token }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    // Aquí puedes agregar una función para cargar los datos actuales del usuario usando el token
  }, [token]);

  const handleUpdate = async () => {
    try {
      await axios.put("http://localhost:3001/profile", { token, username, email });
      alert("Perfil actualizado");
    } catch (err) {
      alert("Error al actualizar el perfil");
    }
  };

  return (
    <div>
      <h2>Editar Perfil</h2>
      <input placeholder="Usuario" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <button onClick={handleUpdate}>Actualizar perfil</button>
    </div>
  );
}

export default Profile;
