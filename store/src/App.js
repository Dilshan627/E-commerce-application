import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/pages/Home";
import ItemPage from "./components/pages/Item";
import Adminlogin from "./components/pages/AdminLogin";

function App() {
  return (
    <div className="App">
      <nav className="nav">
        <a href="/" className="nav-item">
          Home
        </a>
        <a href="/item" className="nav-item">
          Store
        </a>
        <a href="/cart" className="nav-item">
          Cart
        </a>
      </nav>

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/item" element={<ItemPage />} />
        <Route path="/admin" element={<Adminlogin />} />
      </Routes>
    </div>
  );
}

export default App;
