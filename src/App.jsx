import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"
import Sidebar from "./Components/Sidebar.jsx";
import Navbar from "./Components/Navbar.jsx";
import Dashboard from "./Pages/Dashboard.jsx";
import Users from "./Components/UserForm.jsx"
import Settings from "./Pages/Settings.jsx";
import Login from "./Auth/Login.jsx";
import ProtectedRoute from "./Auth/ProtectedRoute.jsx";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/*"
          element={
            <ProtectedRoute>
              <div className="app">
                <Sidebar />
                <div className="main">
                  <Navbar />
                  <div className="content">
                    <Routes>
                      <Route path="/" element={<Dashboard />} />
                      <Route path="/users" element={<Users />} />
                      <Route path="/settings" element={<Settings />} />
                    </Routes>
                  </div>
                </div>
              </div>
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;