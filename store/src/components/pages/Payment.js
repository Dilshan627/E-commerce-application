import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/Payment.css";

const Payment = () => {
  const [cartItems, setCartItems] = useState([]);
  const [customerName, setCustomerName] = useState("");
  const [customerNumber, setCustomerNumber] = useState("");
  const [payment, setPaymentMethod] = useState("visa");
  const products = JSON.parse(localStorage.getItem("cartData"));

  useEffect(() => {
    const cartData = localStorage.getItem("cartData");
    if (cartData) {
      const parsedCartData = JSON.parse(cartData);
      setCartItems(parsedCartData);
    }
  }, []);

  const clearAllDataFromLocalStorage = () => {
    localStorage.clear();
    window.location.reload();
  };

  const handlePayment = () => {
    const paymentData = {
      customerName,
      customerNumber,
      products,
      totalPrice,
      payment,
    };
    axios
      .post("http://localhost:8000/purchases/", paymentData)
      .then((response) => {
        console.log("Payment successful:", response.data);
      })
      .catch((error) => {
        console.error("Payment error:", error);
      });
  };
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
  const totalCount = cartItems.length;

  return (
    <div className="payment-container">
      <div>
        <h2>Your Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                <p>Name: {item.name}</p>
                <p>Price: {item.price}</p>
              </li>
            ))}
          </ul>
        )}
        <h6>Total item: {totalCount}</h6>
        <h6>Total Price(RS): {totalPrice.toFixed(2)}</h6>
        <button className="btn" onClick={clearAllDataFromLocalStorage}>
          Clear
        </button>
      </div>

      <div>
        <h2>Payment Details</h2>
        <div>
          <label htmlFor="customerName">Customer Name:</label>
          <input
            type="text"
            id="customerName"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="customerNumber">Customer Number:</label>
          <input
            type="text"
            id="customerNumber"
            value={customerNumber}
            onChange={(e) => setCustomerNumber(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="totalPrice">Total Price:</label>
          <p>${totalPrice.toFixed(2)}</p>
        </div>
        <div>
          <label htmlFor="paymentMethod">Payment Method:</label>
          <select
            id="paymentMethod"
            value={payment}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option value="visa">Visa</option>
            <option value="master">Master</option>
            <option value="cash">Cash</option>
          </select>
        </div>
        <button className="btn" onClick={handlePayment}>
          Place order
        </button>
      </div>
    </div>
  );
};

export default Payment;
