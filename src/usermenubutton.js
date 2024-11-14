import React, { useState, useEffect } from 'react';

function UserMenuButton() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Simulating fetching user data from local storage or API
    const fetchedUser = {
      name: "John Doe",
      photo: "https://www.example.com/photo.jpg", // URL or local path to user photo
    };
    setUser(fetchedUser);
  }, []);

  if (!user) return null;

  return (
    <div className="user-menu-button">
      <img src={user.photo} alt="User Avatar" className="user-avatar" />
      <span className="user-name">{user.name}</span>
    </div>
  );
}

export default UserMenuButton;
