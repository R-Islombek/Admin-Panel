import { useState } from "react";

function Login() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login:", login, "Password:", password);
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h2 className="login-title">👋 Xush kelibsiz</h2>
        <p className="login-subtitle">Iltimos, tizimga kiring</p>

        <form onSubmit={handleLogin} className="login-form">
          <div className="input-group">
            <input
              type="text"
              placeholder="Email kiriting"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <input
              type="password"
              placeholder="Parol kiriting"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="login-btn">
            🚀 Kirish
          </button>

          <p className="login-footer">
            Akkountingiz yo‘qmi? <a href="#">Ro‘yhatdan o‘ting</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;