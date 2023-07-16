import React, { useState } from "react";
import "../css/Dashboard.css";

const AdminDashboard = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [website, setWebsite] = useState("");
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedUser) {
      // Update existing user
      const updatedUsers = users.map((user) =>
        user === selectedUser
          ? { ...user, name, email, phone, address, website }
          : user
      );
      setUsers(updatedUsers);
    } else {
      // Add new user
      const newUser = { name, email, phone, address, website };
      setUsers([...users, newUser]);
    }

    // Clear the input fields
    setName("");
    setEmail("");
    setPhone("");
    setAddress("");
    setWebsite("");
    setSelectedUser(null);
  };

  const handleEdit = (user) => {
    setSelectedUser(user);
    setName(user.name);
    setEmail(user.email);
    setPhone(user.phone);
    setAddress(user.address);
    setWebsite(user.website);
  };

  const handleDelete = (user) => {
    const updatedUsers = users.filter((u) => u !== user);
    setUsers(updatedUsers);
  };

  return (
    <div className="dashboard-container">
      <div className="manu">
        <button className="button">Item</button>
        <button className="button">Income</button>
      </div>
      <div className="admin-view">
        <div>
          <form className="input-container" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              type="text"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <input
              type="text"
              placeholder="Website"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />
            <button className="btn" type="submit">
              {selectedUser ? "Update User" : "Add User"}
            </button>
          </form>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Address</th>
                <th>Website</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.address}</td>
                  <td>{user.website}</td>
                  <td>
                    <button className="btn" onClick={() => handleEdit(user)}>
                      Edit
                    </button>
                    <button className="btn" onClick={() => handleDelete(user)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default AdminDashboard;
