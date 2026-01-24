import React, { useState, useEffect } from "react";
import { IoMdMenu } from "react-icons/io";
import { useNavigate, useLocation } from "react-router-dom";
import "./AdminLayout.css";

import AdminSideMenu from "./AdminSideMenu"; // ⬅️ import your sidebar with icons

// (page imports here...)
import AdsManagement from "./AdsManagement";
import ServiceManagement from "./ServiceManagement";

const labelToPath = {
  "Dashboard": "/dashboard",
  "Users": "/users",
  "Service Providers": "/service-providers",
  "Franchisee": "/franchisee",
  "Finance": "/finance",
  "Accounts": "/accounts",
  "Profile": "/profile",
  "Chat": "/chat",
  "Settings": "/settings",
  "Service Management": "/service-management",
  "Ads Management": "/ads-management",
  "Notifications": "/notifications",
};

export default function AdminLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeName, setActiveName] = useState("Dashboard");
  const navigate = useNavigate();
  const location = useLocation();

  // Set active menu item based on current URL
  useEffect(() => {
    const currentPath = location.pathname;
    const foundEntry = Object.entries(labelToPath).find(([, path]) =>
      currentPath.startsWith(path)
    );
    setActiveName(foundEntry ? foundEntry[0] : "Dashboard");
  }, [location.pathname]);

  const handleSidebarItemClick = (label) => {
    const path = labelToPath[label] || "/dashboard";
    navigate(path);
    setIsSidebarOpen(false);
    setActiveName(label);
  };

  return (
    <div className="admin-wrapper">
      {/* Sidebar with icons */}
      <AdminSideMenu
        isOpen={isSidebarOpen}
        onOpen={() => setIsSidebarOpen(true)}
        onClose={() => setIsSidebarOpen(false)}
        activeItem={activeName}
        onSelectItem={handleSidebarItemClick}
      />

      {/* Main Content */}
      <div className="fm-main">
        <header className="topbar">
          <button
            className="menu-toggle"
            type="button"
            onClick={() => setIsSidebarOpen(prev => !prev)}
          >
            <IoMdMenu size={24} />
          </button>

          <h1 className="page-title">{activeName}</h1>
        </header>

        <div className="page-content">
          {children || <p>Put your page content here…</p>}
        </div>
      </div>
    </div>
  );
}
