"use client";
import React, { useState, useRef } from "react";
import "./styles.css";
import QRCode from "react-qr-code";
import { useRouter } from "next/router";

export default function Home() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [dough, setDough] = useState("thin");
  const [size, setSize] = useState("25");
  const [toppings, setToppings] = useState([]);
  const [additions, setAdditions] = useState([]);
  const [subjects, setSubjects] = useState([]);

  const toppingsRef = useRef([]);
  const additionsRef = useRef([]);

  const handleCloseOrder = (index) => {
    setSubjects((prevSubjects) =>
      prevSubjects.filter((subject, i) => i !== index)
    );
  };

  const handleClearForm = () => {
    setName("");
    setPhone("");
    setAddress("");
    setDough("thin");
    setSize("25");
    setToppings([]);
    setAdditions([]);

    toppingsRef.current.forEach((checkbox) => {
      checkbox.checked = false;
    });
    additionsRef.current.forEach((checkbox) => {
      checkbox.checked = false;
    });
  };

  const toppingsPrice = 3;
  const additionsPrice = 0.5;
  const sizePrice = 1;
  const doughPrice = {
    thin: 0.5,
    medium: 1,
    thick: 2,
  };

  const handleAddSubject = (e) => {
    e.preventDefault();

    if (!name || !phone || !address) {
      alert("Please enter name, phone, and address.");
      return;
    }

    const toppingCost = toppings.length * toppingsPrice;
    const additionCost = additions.length * additionsPrice;
    const sizeCost = parseInt(size) * sizePrice;
    const doughCost = doughPrice[dough];
    const total = toppingCost + additionCost + sizeCost + doughCost;

    const order = {
      name,
      phone,
      address,
      dough,
      size,
      toppings,
      additions,
      total,
    };

    setName("");
    setPhone("");
    setAddress("");
    setDough("thin");
    setSize("25");
    setToppings([]);
    setAdditions([]);
    toppingsRef.current.forEach((checkbox) => {
      checkbox.checked = false;
    });
    additionsRef.current.forEach((checkbox) => {
      checkbox.checked = false;
    });

    setSubjects((prevSubjects) => [...prevSubjects, order]);
  };

  const handleCheckboxChange = (value, isChecked) => {
    if (isChecked) {
      setToppings((prevToppings) => [...prevToppings, value]);
    } else {
      setToppings((prevToppings) =>
        prevToppings.filter((topping) => topping !== value)
      );
    }
  };

  const handleAdditionChange = (value, isChecked) => {
    if (isChecked) {
      setAdditions((prevAdditions) => [...prevAdditions, value]);
    } else {
      setAdditions((prevAdditions) =>
        prevAdditions.filter((addition) => addition !== value)
      );
    }
  };

  const OrderInfoPage = () => {
    const router = useRouter();
    const { order } = router.query;
  };

  

  return (
    <div className="m-wrapper">
      <h1>Pizza Order</h1>
      <input
        type="text"
        placeholder="User name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <br />
      <div className="phone-input-container">
        <div className="country-code">
          <strong>+998</strong>
        </div>
        <input
          type="tel"
          placeholder="Phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <br />
      <input
        type="text"
        placeholder="User address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <br />
      <label>
        <h4>Dough thickness:</h4>
        <select value={dough} onChange={(e) => setDough(e.target.value)}>
          <option value="thin">thin</option>
          <option value="medium">medium</option>
          <option value="thick">thick</option>
        </select>
      </label>
      <br />
      <label>
        <h4>Size:</h4>
        <div
          className={`selection-boxes ${size === "25" ? "selected" : ""}`}
          onClick={() => setSize("25")}
        >
          25 sm
        </div>
        <div
          className={`selection-boxes ${size === "30" ? "selected" : ""}`}
          onClick={() => setSize("30")}
        >
          30 sm
        </div>
        <div
          className={`selection-boxes ${size === "35" ? "selected" : ""}`}
          onClick={() => setSize("35")}
        >
          35 sm
        </div>
      </label>

      <label className="ingredient">
        <h5>On pizza:</h5>
        
        <div className="pieces">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
            checked={toppings.includes("Tomato")}
            onChange={(e) => handleCheckboxChange("Tomato", e.target.checked)}
            ref={(el) => (toppingsRef.current[0] = el)}
          />
          
            Tomato
          
        </div>
        <div className="pieces">
          <input
            type="checkbox"
            onChange={(e) =>
              handleCheckboxChange("Turkey meat", e.target.checked)
            }
            ref={(el) => (toppingsRef.current[1] = el)}
          />
          Turkey meat
        </div>
        <div className="pieces">
          <input
            type="checkbox"
            onChange={(e) => handleCheckboxChange("Olive", e.target.checked)}
            ref={(el) => (toppingsRef.current[2] = el)}
          />
          Olive
        </div>
        <br />
        <div className="pieces">
          <input
            type="checkbox"
            onChange={(e) =>
              handleCheckboxChange("Pickled Cucumber", e.target.checked)
            }
            ref={(el) => (toppingsRef.current[3] = el)}
          />
          Pickled Cucumber
        </div>
        <div className="pieces">
          <input
            type="checkbox"
            onChange={(e) =>
              handleCheckboxChange("Mushrooms", e.target.checked)
            }
            ref={(el) => (toppingsRef.current[4] = el)}
          />
          Mushrooms
        </div>
        <div className="pieces">
          <input
            type="checkbox"
            onChange={(e) =>
              handleCheckboxChange("Horse meat", e.target.checked)
            }
            ref={(el) => (toppingsRef.current[5] = el)}
          />
          Horse meat
        </div>
      </label>
      <label className="ingredient_">
        <h5>Add:</h5>
        <div className="pieces_">
          <input
            type="checkbox"
            onChange={(e) => handleAdditionChange("Pepper", e.target.checked)}
            ref={(el) => (additionsRef.current[0] = el)}
          />
          Pepper
        </div>
        <div className="pieces_">
          <input
            type="checkbox"
            onChange={(e) => handleAdditionChange("Sausage", e.target.checked)}
            ref={(el) => (additionsRef.current[1] = el)}
          />
          Sausage
        </div>
      </label>

      <div className="button">
        <button className="save" onClick={handleAddSubject}>
          Save
        </button>
        <br />
        <button className="clear" onClick={handleClearForm}>
          Clear
        </button>
      </div>
      <div className="order-container">
        {subjects.map((subject, index) => (
          <div key={index} className="order">
            <div className="order-header">
              <h2>Order: {index + 1}</h2>
            </div>
            <div className="close" onClick={() => handleCloseOrder(index)}>
              &times;
            </div>
            <div className="order-content">
              <div className="line"></div>
              <p>
                <strong>Name:</strong> {subject.name}
              </p>
              <p>
                <strong>Phone:</strong> {subject.phone}
              </p>
              <p>
                <strong>Address:</strong> {subject.address}
              </p>
              <div className="line"></div>
              <p>
                <strong>Dough thickness:</strong> {subject.dough}
              </p>
              <p>
                <strong>Size:</strong> {subject.size}
              </p>
              <p>
                <strong>On pizza:</strong> {subject.toppings.join(", ")}
              </p>
              <p>
                <strong>Add:</strong> {subject.additions.join(", ")}
              </p>
              <div className="line"></div>
              <div className="total">
                <p>
                  <strong>Total:</strong> ${subject.total}
                </p>
              </div>
              <QRCode
                value={`Name: ${subject.name} \nPhone: ${subject.phone} \nAddress: ${subject.address} \nDough: ${subject.dough} \nSize: ${subject.size} \nToppings: ${subject.toppings} \nAdditions: ${subject.additions} \nTotal: ${subject.total}`}
                imageSettings={{
                  src: "https://shorturl.at/nABDG",
                  height: 60,
                  width: 60,
                  excavate: true,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
