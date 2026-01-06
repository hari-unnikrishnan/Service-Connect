import React from "react";
import { useNavigate } from 'react-router-dom';
import "./Service Providers Verification Form.css";

export default function ServiceProvidersVerificationForm() {
  const navigate = useNavigate();

  const handleVerifyClick = () => {
    // 🔹 change this path to match your Route path
    navigate("/service-verification");
  };

  return (
    <div className="spvf-content">
      {/* <h2>Service Providers Verification Form</h2> */}

      {/* FORM BOX */}
      <div className="spvf-form-box">
        <FormField label="Inspector Name" />
        <FormField label="Inspector Role" />
        <FormField label="Member's Name" />
        <FormField label="Date of Verification" />

        <SelectField label="Supporting Documents" />
        <SelectField label="Verification Status" />

        {/* BUTTONS */}
        <div className="spvf-buttons">
          <button className="spvf-cancel-btn">
            Cancel
          </button>

          <button className="spvf-confirm-btn" onClick={handleVerifyClick}>
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}

/* ---------------- SIDEBAR ---------------- */

function Sidebar() {
  return (
    <div className="spvf-sidebar">
      <div className="spvf-logo">SC</div>

      <ul>
        <SideItem icon={<Home />} text="Dashboard" />
        <SideItem icon={<Users />} text="Users" />
        <SideItem icon={<Briefcase />} text="Service Providers" />
        <SideItem icon={<BadgeDollarSign />} text="Franchisee" active />
        <SideItem icon={<Wallet />} text="Finance" />
        <SideItem icon={<Coins />} text="Accounts" />
        <SideItem icon={<User />} text="Profile" />
        <SideItem icon={<MessageSquare />} text="Chat" />
        <SideItem icon={<Settings />} text="Settings" />
        <SideItem icon={<MonitorSmartphone />} text="Service Management" />
        <SideItem icon={<Bell />} text="Notifications" />
      </ul>

      <div className="spvf-footer">
        <p>Service Connect</p>
        <span>Lets Grow Together</span>
      </div>
    </div>
  );
}

function SideItem({ icon, text, active }) {
  return (
    <li className={`spvf-side-item ${active ? 'active' : ''}`}>
      {icon} {text}
    </li>
  );
}

/* ---------------- TOP BAR ---------------- */

function Topbar() {
  return (
    <div className="spvf-topbar">
      <div></div>

      {/* Search Bar */}
      <div className="spvf-search">
        <Search size={18} />
        <input placeholder="Search here..." />
      </div>

      {/* Right icons */}
      <div className="spvf-header-right">
        <div className="spvf-circle-icon">
          <Bell />
        </div>
        <div className="spvf-circle-icon">
          <Settings />
        </div>
        <div className="spvf-profile">
          <img src="https://i.pravatar.cc/45" alt="profile" />
        </div>
      </div>
    </div>
  );
}

/* ---------------- FORM FIELDS ---------------- */

function FormField({ label }) {
  return (
    <div className="spvf-form-field">
      <p>{label}</p>
      <input type="text" placeholder="Value" />
    </div>
  );
}

function SelectField({ label }) {
  return (
    <div className="spvf-select-field">
      <p>{label}</p>
      <select>
        <option>Value</option>
      </select>
    </div>
  );
}
