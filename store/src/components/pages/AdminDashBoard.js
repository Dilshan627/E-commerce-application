import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/Dashboard.css";

const AdminDashBoard = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    const url = "http://localhost:8000/products/getItem";
    axios
      .get(url)
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const addData = () => {
    const newItem = {
      name,
      brand,
      category,
      description,
      price,
      image,
    };

    axios
      .post("http://localhost:8000/products/add", newItem)
      .then((response) => {
        setData([...data, response.data]);
        setName("");
        setBrand("");
        setCategory("");
        setDescription("");
        setPrice("");
        setImage("");
      })
      .catch((error) => {
        console.error("Error adding item:", error);
      });

    fetchData();
  };

  const deleteData = (id) => {
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <div className="input-container">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Brand"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <button className="btn" onClick={addData}>
          Add
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Brand</th>
            <th>Category</th>
            <th>Description</th>
            <th>Price</th>
            {/* <th>Image</th> */}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.brand}</td>
              <td>{item.category}</td>
              <td>{item.description}</td>
              <td>{item.price}</td>
              {/* <td>
                <img src={item.image} alt={item.name} />
              </td> */}
              <td>
                <button className="btn" clonClick={() => deleteData(item.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashBoard;
