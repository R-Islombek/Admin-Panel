
import "./Settings.css"

function Settings() {
  const handleLogout = () => {
    localStorage.removeItem("auth");
    window.location.href = "/login";
  };

  return (
    <div>
      <h2>⚙️ Settings</h2>
      <p>Bu yerda admin panel sozlamalari bo‘ladi.</p>

      <div className="settings">
        <div className="card">
          <h3>Tema</h3>
          <p>🌙 Dark mode / ☀️ Light mode (keyinchalik qo‘shish mumkin)</p>
        </div>

        <div className="card">
          <h3>Tizimdan chiqish</h3>
          <button onClick={handleLogout}>🚪 Logout</button>
        </div>
      </div>
    </div>
  );
}
export default Settings;