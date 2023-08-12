import axios from "axios";

export function login(email, password) {
  const Url = "http://localhost:8000/users/signin";

  return axios
    .post(Url, { email: email, password: password })
    .then((response) => {
      const { user, token } = response.data;
      console.log("Logged-in user:", user);
      console.log("JWT token:", token);
      return true;
    })
    .catch((error) => {
      console.error("Error during login:", error);
      throw error;
    });
}

// import React from "react";
// import "../css/Payment.css";

// function Payment() {
//   const handlePrintLocalStorageData = () => {
//     const existingCartData = localStorage.getItem("cartData");
//     if (existingCartData) {
//       const cartData = JSON.parse(existingCartData);

//       for (let i = 0; i < localStorage.length; i++) {
//         const key = localStorage.key(i);
//         const data = localStorage.getItem(key);
//         //        console.log(cartData[i].name);
//         console.log(`Item with key "${key}":`, data);
//       }
//     } else {
//       console.log("No data found in localStorage");
//     }
//   };

//   const clearAllDataFromLocalStorage = () => {
//     localStorage.clear();
//   };

//   return (
//     <div className="payment-container">
//       <div>
//         <button onClick={handlePrintLocalStorageData}>get data</button>
//         <button onClick={clearAllDataFromLocalStorage}>clear</button>
//       </div>
//     </div>
//   );
// }

// export default Payment;
