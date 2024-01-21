// src/components/LoginForm.js
import React, { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
  };
  const backgroundImageUrl = "src/abstract-fluid-background-with-blue-yellow-color-vector-illustration_500223-973.avif";

  return (
    <div className="form-pane rounded shadow" style={{ backgroundImage: backgroundImageUrl, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <form onSubmit={handleLogin} className="form-example">
        {/* ... */}
      </form>
    </div>
  );
};

export default LoginForm;
