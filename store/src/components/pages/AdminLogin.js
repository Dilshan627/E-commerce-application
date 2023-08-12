import React, { useState } from "react";
import Dashboard from "./AdminDashBoard";
import { login } from "../request/request";
import "../css/Admin.css";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //const success = await login("adc@gmail.com", "1234");
      const success = await login(username, password);
      console.log(username, password);
      if (success) {
        setIsLoggedIn(true);
        setError("");
      }
    } catch (error) {
      setError("Invalid username or password");
      console.error("Error during login:", error);
    }
  };

  if (isLoggedIn) {
    return <Dashboard />;
  }

  return (
    <div className="login-container">
      <h1>Admin Login</h1>
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="button" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
