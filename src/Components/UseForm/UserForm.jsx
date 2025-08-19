import { useState } from "react";
import "./UserForm.css"
function UserForm({ addUser }) {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      addUser({ id: Date.now(), name });
      setName("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="user-form">
      <input
        type="text"
        placeholder="Yangi foydalanuvchi"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">➕ Add</button>
    </form>
  );
}

export default UserForm;