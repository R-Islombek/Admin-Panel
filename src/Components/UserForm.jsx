import { useState } from "react";

function UserForm({ addUser }) {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      addUser({ id: Date.now(), name }); // yangi user qo‘shish
      setName(""); // inputni tozalash
    }
  };

  return (
    <form onSubmit={handleSubmit} className="user-form">
      <input
        type="text"
        placeholder="Yangi foydalanuvchi ismini kiriting"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">➕+ Add</button>
    </form>
  );
}

export default UserForm;