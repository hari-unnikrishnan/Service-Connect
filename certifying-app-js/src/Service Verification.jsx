import React from "react";
import "./Service Verification.css";

export default function ServiceVerification() {
  return (
    <div className="sv-content">
      {/* PAGE TITLE */}
      <h1 className="sv-title">
        Payment Request Form
      </h1>

      {/* FORM CARD */}
      <div className="sv-form-card">
        {/* FORM GRID (2 Columns) */}
        <div className="sv-form-grid">
          <FormField label="Full Name" />
          <FormField label="Email Address" />

          <FormField label="Contact Number" />
          <FormField label="Payment Amount" />

          <SelectField label="Payment Method" />

          <FormField label="Bank Name" />

          <FormField label="Account Holder Name" />
          <FormField label="Account Number" />

          <FormField label="Bank Branch" />
          <FormField label="IFSC Code" />

          <FormField label="Supporting Documents" />
        </div>

        {/* BUTTONS */}
        <div className="sv-buttons">
          <button className="sv-cancel-btn">
            Cancel
          </button>

          <button className="sv-confirm-btn">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}

/* -------------------- COMPONENTS -------------------- */

function CircleIcon({ icon }) {
  return (
    <div className="sv-circle-icon">
      {icon}
    </div>
  );
}

function FormField({ label }) {
  return (
    <div className="sv-form-field">
      <p>{label}</p>
      <input type="text" placeholder="Value" />
    </div>
  );
}

function SelectField({ label }) {
  return (
    <div className="sv-select-field">
      <p>{label}</p>
      <select>
        <option>Value</option>
      </select>
    </div>
  );
}
