import { FaUserTie, FaLock, FaMoneyBillWave, FaCoins, FaRegUser, FaCog, FaAd } from "react-icons/fa";
import { FiHome } from "react-icons/fi";
import { PiChatsBold } from "react-icons/pi";
import { MdOutlineHomeRepairService } from "react-icons/md";
import { ImUserTie } from "react-icons/im";
import { IoClose } from "react-icons/io5";
import { IoMdNotifications, IoMdMenu } from "react-icons/io";
import "./AdminLayout.css";


const AdminSideMenu = ({ isOpen, onOpen, onClose, activeItem, onSelectItem = () => {} }) => {
  return (
    <>
      {/* --- MENU BUTTON (Mobile) --- */}
      {!isOpen && (
        <button className="admin-open-btn" onClick={onOpen}>
          <IoMdMenu size={26} />
        </button>
      )}

      {/* Overlay when sidebar is open */}
      {isOpen && <div className="admin-overlay" onClick={onClose} />}

      {/* Sidebar */}
      <div className={`admin-sidebar ${isOpen ? "open" : ""}`}>
        {/* Header with logo + close button */}
        <div className="admin-sidebar-header">
          <div className="admin-logo">
            <div className="admin-logo-icon">S</div>
            <span className="admin-logo-text">SC</span>
          </div>

          {/* Close button */}
          <button className="admin-close-btn" onClick={onClose}>
            <IoClose size={26} />
          </button>
        </div>

        {/* Menu */}
        <nav className="admin-menu">
          <SidebarItem
            icon={<FiHome size={18} />}
            label="Dashboard"
            active={activeItem === "Dashboard"}
            onClick={() => onSelectItem("Dashboard")}
          />

          <SidebarItem
            icon={<ImUserTie />}
            label="Users"
            active={activeItem === "Users"}
            onClick={() => onSelectItem("Users")}
          />
          <SidebarItem
            icon={<FaUserTie />}
            label="Service Providers"
            active={activeItem === "Service Providers"}
            onClick={() => onSelectItem("Service Providers")}
          />
          <SidebarItem
            icon={<FaLock />}
            label="Franchisee"
            active={activeItem === "Franchisee"}
            onClick={() => onSelectItem("Franchisee")}
          />
          <SidebarItem
            icon={<FaMoneyBillWave />}
            label="Finance"
            active={activeItem === "Finance"}
            onClick={() => onSelectItem("Finance")}
          />
          <SidebarItem
            icon={<FaCoins />}
            label="Accounts"
            active={activeItem === "Accounts"}
            onClick={() => onSelectItem("Accounts")}
          />
          <SidebarItem
            icon={<FaRegUser />}
            label="Profile"
            active={activeItem === "Profile"}
            onClick={() => onSelectItem("Profile")}
          />
          <SidebarItem
            icon={<PiChatsBold />}
            label="Chat"
            active={activeItem === "Chat"}
            onClick={() => onSelectItem("Chat")}
          />
          <SidebarItem
            icon={<FaCog />}
            label="Settings"
            active={activeItem === "Settings"}
            onClick={() => onSelectItem("Settings")}
          />
          <SidebarItem
            icon={<MdOutlineHomeRepairService />}
            label="Service Management"
            active={activeItem === "Service Management"}
            onClick={() => onSelectItem("Service Management")}
          />
          <SidebarItem
            icon={<FaAd />}
            label="Ads Management"
            active={activeItem === "Ads Management"}
            onClick={() => onSelectItem("Ads Management")}
          />
          <SidebarItem
            icon={<IoMdNotifications />}
            label="Notifications"
            active={activeItem === "Notifications"}
            onClick={() => onSelectItem("Notifications")}
          />
        </nav>

        {/* Footer */}
        <div className="admin-sidebar-footer">
          <p className="footer-title">Service Connect</p>
          <p className="footer-subtitle">Let’s Grow Together</p>
        </div>
      </div>
    </>
  );
};

const SidebarItem = ({ icon, label, active, onClick }) => (
  <button
    className={`admin-menu-item ${active ? "admin-menu-item-active" : ""}`}
    onClick={onClick}
    type="button"
  >
    <span className="admin-menu-icon">{icon}</span>
    <span className="admin-menu-label">{label}</span>
  </button>
);

export default AdminSideMenu;
