import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://educrm.ittimeagency.uz/api/v1/auth/login",
        { phone, password }
      );

    
      localStorage.setItem("token", res?.data?.accessToken);
       
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      alert("❌ Login yoki parol noto‘g‘ri!");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>🔐 Admin Panel</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="📱 Telefon raqam"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="🔑 Parol"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Kirish</button>
        </form>
      </div>
    </div>
  );
}