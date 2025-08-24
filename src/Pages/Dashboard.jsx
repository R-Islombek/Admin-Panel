import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios"; // ❗ axios import qilindi
import "../Styles/Dashboard.css";

export default function Dashboard() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  // Usersni fetch qilish
  async function fetchUsers() {
    try {
      const token = localStorage.getItem("token"); // agar token kerak bo'lsa
      const res = await axios.get("https://educrm.ittimeagency.uz/api/v1/users",
      {
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      });
      setUsers(res.data);
    } catch (error) {
      console.log("error", error);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

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
        {users.map((user) => (
          <div key={user.id}>
            <img src={`https://picsum.photos/id/${user.id}/300/300`} alt={user.name} />
            <h1>{user.firstName}</h1>
            <p>{user.createdAt}</p>
          </div>
        ))}
      </main>
    </div>
  );
}
