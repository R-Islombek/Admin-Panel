import { useNavigate } from "react-router-dom";
import "../Styles/Dashboard.css";

export default function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    
    localStorage.removeItem("token");

    navigate("/");
  };

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2>⚡ Admin Panel</h2>
        <ul>
          <li>👥 Users</li>
          <li>⚙️ Settings</li>
          <li>📊 Reports</li>
        </ul>
        <button onClick={handleLogout}>🚪 Logout</button>
      </aside>

      <main className="content">
        <h1>Welcome, Admin! 🎉</h1>
        <p>Bu zamonaviy dashboard sahifasi.</p>
        <div className="cards">
          <div className="card">👥 150 Users</div>
          <div className="card">📦 80 Orders</div>
          <div className="card">💰 $12,300 Revenue</div>
        </div>
      </main>
    </div>
  );
}