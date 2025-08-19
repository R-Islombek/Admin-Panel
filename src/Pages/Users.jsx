import { useState } from "react";
import UserForm from "../../Components/UseForm/UserForm";
function Users() {
  const [users, setUsers] = useState([
    { id: 1, name: "Islombek" },
    { id: 2, name: "Javohir" },
  ]);

  const addUser = (user) => setUsers([...users, user]);
  const deleteUser = (id) => setUsers(users.filter((u) => u.id !== id));
  const editUser = (id, newName) => {
    setUsers(users.map((u) => (u.id === id ? { ...u, name: newName } : u)));
  };

  return (
    <div>
      <h2>👥 Users</h2>
      <UserForm addUser={addUser} />

      <ul className="user-list">
        {users.map((u) => (
          <li key={u.id}>
            {u.name}
            <button onClick={() => deleteUser(u.id)}>❌ Delete</button>
            <button
              onClick={() => {
                const newName = prompt("Yangi ism kiriting:", u.name);
                if (newName) editUser(u.id, newName);
              }}
            >
              ✏️ Edit
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;