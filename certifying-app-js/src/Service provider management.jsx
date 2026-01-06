import React from "react";
import {
  Search,
  PhoneCall, Mail, MoreHorizontal
} from "lucide-react";
import "./Service provider management.css";

export default function ServiceProviderManagement() {
  const users = [
    { name: "Samanta William", id: "123456789", date: "March 25, 2021", verified: "-", location: "Jakarta", status: "Not Verified" },
    { name: "Tony Soap", id: "123456789", date: "March 25, 2021", verified: "-", location: "Jakarta", status: "Not Verified" },
    { name: "Karen Hope", id: "123456789", date: "March 25, 2021", verified: "Jakarta", location: "Jakarta", status: "Active" },
    { name: "Jordan Nico", id: "123456789", date: "March 25, 2021", verified: "Jakarta", location: "Jakarta", status: "Active" },
    { name: "Nadila Adja", id: "123456789", date: "March 25, 2021", verified: "Jakarta", location: "Jakarta", status: "Not Active" },
    { name: "Johnny Ahmad", id: "123456789", date: "March 25, 2021", verified: "Jakarta", location: "Jakarta", status: "Active" },
  ];

  return (
    <div className="spm-content">
      {/* Stats */}
      <div className="fm-stats">
        <StatBox color="#7646ff" label="Service Providers" value="24K" />
        <StatBox color="#00d466" label="Verified" value="82K" />
        <StatBox color="#ffd447" label="Verification Request" value="200" />
      </div>

      {/* TABLE */}
      <div className="fm-table-section">
        <div className="fm-table-header">
          {/* Search Bar */}
          <div className="fm-search">
            <Search size={18} />
            <input type="text" placeholder="Search here..." />
          </div>

          <button className="fm-new-user-btn">
            + New User
          </button>
        </div>

        {/* TABLE */}
        <table className="fm-table">
          <thead>
            <tr>
              <Th text="" />
              <Th text="Name" />
              <Th text="ID" />
              <Th text="Date" />
              <Th text="Verified by" />
              <Th text="Location" />
              <Th text="Contact" />
              <Th text="Status" />
              <Th text="" />
            </tr>
          </thead>

          <tbody>
            {users.map((u, i) => <UserRow key={i} data={u} />)}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* COMPONENTS BELOW */

// Sidebar Item
function SideItem({ icon, text, active }) {
  return (
    <li style={{
      padding: "12px 10px",
      margin: "6px 0",
      borderRadius: "10px",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: "12px",
      background: active ? "white" : "transparent",
      color: active ? "#4a3aff" : "white"
    }}>
      {icon} {text}
    </li>
  );
}

// Stats Box
function StatBox({ color, value, label }) {
  return (
    <div style={{
      width: "339px",
      padding: "14px",
      background: "white",
      borderRadius: "14px",
      borderLeft: `6px solid ${color}`,
      textAlign: "center",
      fontWeight: 600
    }}>
      <p>{value}</p>
      <span style={{ fontSize: "12px", opacity: 0.6 }}>{label}</span>
    </div>
  );
}

// Circle Icon style
function CircleIcon({ icon }) {
  return (
    <div style={{
      background: "white",
      padding: "10px",
      borderRadius: "50%"
    }}>
      {icon}
    </div>
  );
}

// Table Header Cell
function Th({ text }) {
  return (
    <th style={{ textAlign: "left", opacity: 0.6, paddingBottom: "12px" }}>
      {text}
    </th>
  );
}

// User Row
function UserRow({ data }) {
  const statusClass = data.status === "Active" ? "active" : data.status === "Not Verified" ? "not-verified" : "not-active";

  return (
    <tr>
      <td><input type="checkbox" /></td>
      <td>{data.name}</td>
      <td className="id">{data.id}</td>
      <td>{data.date}</td>
      <td>{data.verified}</td>
      <td>{data.location}</td>

      <td className="fm-contact">
        <PhoneCall size={18} />
        <Mail size={18} />
      </td>

      <td>
        <span className={`fm-status ${statusClass}`}>
          {data.status}
        </span>
      </td>

      <td>
        <MoreHorizontal size={20} />
      </td>
    </tr>
  );
}
