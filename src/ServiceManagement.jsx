import React, { useState } from "react";
import "./ServiceManagement.css";
import { FiEdit, FiPlus, FiTrash2 } from "react-icons/fi";
import AdsManagement from "./AdsManagement";

export default function ServiceManagement() {
  const [collars, setCollars] = useState(["Blue-collar", "White-collar", "Grey-collar"]);

  const addNewCollar = () => {
    setCollars([...collars, "New Collar"]);
  };

  const removeCollar = (index) => {
    setCollars(collars.filter((_, i) => i !== index));
  };
  return (
    <div className="service-page">
      <h2 className="page-title">Service </h2>

      <div className="service-grid">
        {/* LEFT TYPE CARD */}
        <div className="card type-card">
          <div className="type-header">
            <h3>Type</h3>
            <FiEdit />
          </div>

          <button className="type-btn active">Daily work</button>
          <button className="type-btn">One Time Lead</button>
          <button className="type-btn add" onClick={addNewCollar}>+ Add New</button>
        </div>

        {/* RIGHT DETAILS CARD */}
        <div className="card details-card">
          <h3>Daily work</h3>

          <div className="form">
            <input placeholder="Daily work" />
            <input placeholder="Details" />
            <select>
              <option>Currency</option>
            </select>
          </div>

          <div className="collar-header">
            <span>Collar</span>
            <button className="add-new" onClick={addNewCollar}>
              Add new <FiPlus />
            </button>
          </div>

          {/* ROWS */}
          {collars.map((item, index) => (
            <div className="collar-row" key={index}>
              <input value={item} onChange={(e) => {
                const newCollars = [...collars];
                newCollars[index] = e.target.value;
                setCollars(newCollars);
              }} />
              <input placeholder="Lead Quantity" />
              <input placeholder="Rate" />
              <FiTrash2 className="delete-icon" onClick={() => removeCollar(index)} />
            </div>
          ))}

          {/* ACTIONS */}
          <div className="actions">
            <button className="btn delete">Delete</button>
            <button className="btn outline">Save as Draft</button>
            <button className="btn primary">Save</button>
          </div>
        </div>
      </div>
    </div>
  );
}
