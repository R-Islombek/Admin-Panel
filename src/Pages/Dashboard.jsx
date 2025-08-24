import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "../Styles/Dashboard.css";
import { useState } from "react";

export default function Dashboard() {

  const [users, setUsers] = useState([]);

  async function fetchUsers() {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      setUsers(res.data);
    } catch (error) {
      console.log("error", error);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);


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
        {users.map((user) => (
          <div key={user.id}>
            <img src={`https://picsum.photos/id/${user.id}/300/300`} alt={user.name} />
            <h1>{user.name}</h1>
          </div>
        ))}
      </main>
    </div>
  );
}