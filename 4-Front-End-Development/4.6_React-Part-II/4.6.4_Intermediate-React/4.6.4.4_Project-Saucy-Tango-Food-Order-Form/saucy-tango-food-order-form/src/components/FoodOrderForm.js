import React, { useState } from "react";
import styles from "../styles/FoodOrderForm.module.css";

function FoodOrderForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [order, setOrder] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`
    Order Successful!
    Your order was:${order}.
    Please show your confirmation number for pickup.
    `);
    // console.log(`
    // Order Successful!
    // Your order was:${order}.
    // Please show your confirmation number for pickup.
    // `);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.mainform}>
        <div className={styles.inputcontainer}>
          <label htmlFor="fullName">Full Name: </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className={styles.inputcontainer}>
          <label htmlFor="phone">Phone: </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
          />
        </div>
        <div className={styles.inputcontainer}>
          <label htmlFor="address">Address: </label>
          <input
            id="address"
            name="address"
            type="text"
            onChange={(e) => setAddress(e.target.value)}
            value={address}
          />
        </div>
        <div className={styles.inputcontainer}>
          <label htmlFor="order">Order: </label>
          <input
            id="order"
            name="order"
            type="text"
            onChange={(e) => setOrder(e.target.value)}
            value={order}
          />
        </div>
        <input
          type="submit"
          value="Submit Order"
          className={styles.submitbutton}
        />
      </form>
    </>
  );
}

export default FoodOrderForm;
