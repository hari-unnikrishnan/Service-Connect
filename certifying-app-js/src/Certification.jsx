import React from "react";
import "./Certification.css";

export default function Certification() {
  return (
    <div className="certification-content">
      <h2>Certification Management</h2>

      {/* Service Providers Verification Form */}
      <div className="certification-section">
        <h3>Service Providers Verification</h3>
        <div className="certification-form-box">
          <FormField label="Inspector Name" />
          <FormField label="Inspector Role" />
          <FormField label="Member's Name" />
          <FormField label="Date of Verification" />
          <SelectField label="Supporting Documents" />
          <SelectField label="Verification Status" />
          <div className="certification-buttons">
            <button className="certification-cancel-btn">Cancel</button>
            <button className="certification-confirm-btn">Confirm</button>
          </div>
        </div>
      </div>

      {/* Service Verification */}
      <div className="certification-section">
        <h3>Service Verification</h3>
        <div className="certification-form-box">
          <FormField label="Service Name" />
          <FormField label="Provider Name" />
          <FormField label="Verification Date" />
          <SelectField label="Status" />
          <div className="certification-buttons">
            <button className="certification-cancel-btn">Cancel</button>
            <button className="certification-confirm-btn">Confirm</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function FormField({ label }) {
  return (
    <div className="certification-form-field">
      <p>{label}</p>
      <input type="text" placeholder="Value" />
    </div>
  );
}

function SelectField({ label }) {
  return (
    <div className="certification-select-field">
      <p>{label}</p>
      <select>
        <option>Value</option>
      </select>
    </div>
  );
}
