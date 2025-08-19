import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css"
function Sidebar() {
  const location = useLocation();

  return (
    <div className="sidebar">
      {/* Navbarni shu yerga qo‘shamiz */}
      <div className="navbar">
        <h2>🚀 Admin Panel</h2>
      </div>

      <ul>
        <li className={location.pathname === "/" ? "active" : ""}>
          <Link to="/">📊 Dashboard</Link>
        </li>
        <li className={location.pathname === "/users" ? "active" : ""}>
          <Link to="/users">👥 Users</Link>
        </li>
        <li className={location.pathname === "/settings" ? "active" : ""}>
          <Link to="/settings">⚙️ Settings</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;