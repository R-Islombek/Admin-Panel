import "./Dashboard.css"

function Dashboard() {
  return (
    <div>
      <h2>📊 Dashboard</h2>
      <p>Bu yerda sayt statistikasi bo‘ladi.</p>

      <div className="stats">
        <div className="card">
          <h3>👥 Users</h3>
          <p>150 ta foydalanuvchi</p>
        </div>
        <div className="card">
          <h3>📦 Orders</h3>
          <p>85 ta buyurtma</p>
        </div>
        <div className="card">
          <h3>💰 Income</h3>
          <p>$3,200</p>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;