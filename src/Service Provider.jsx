import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Star, MapPin, PhoneCall, Mail, MoreHorizontal, TrendingUp, BarChart3, Briefcase, Home, Users, BadgeDollarSign, Wallet, Coins, User, MessageSquare, Settings, MonitorSmartphone, Bell, Search
} from "lucide-react";
import "./Service Provider.css";

export default function ServiceProvider() {
  const navigate = useNavigate();

  const services = [
    "Home Services",
    "Health & Wellness",
    "Automotive Services",
    "Education & Tutoring",
    "Business Services",
  ];

  const ads = [
    "Ad1",
    "Ad2",
    "Boosted Profile"
  ];

  const handleVerifyClick = () => {
    // 🔹 change this path to match your Route path
    navigate("/service-providers-verification-form");
  };

  return (
    <div className="sp-content">
      {/* PROFILE CARD */}
      <ProfileCard />

      {/* REGISTERED SERVICES */}
      <SectionCard title="Registered Services">
        {services.map((s, i) => (
          <ServiceItem key={i} name={s} />
        ))}
      </SectionCard>

      {/* ADS */}
      <SectionCard title="Ads">
        {ads.map((a, i) => (
          <AdsItem key={i} name={a} />
        ))}
      </SectionCard>

      {/* VERIFY BUTTONS */}
      <div className="sp-buttons">
        <button className="sp-verify-btn" onClick={handleVerifyClick} >VERIFY</button>
        <button className="sp-decline-btn">DECLINE</button>
      </div>
    </div>
  );
}

/* ----------------------------- COMPONENTS BELOW ----------------------------- */

/* SIDEBAR */
function Sidebar() {
  return (
    <div className="sp-sidebar">
      <div className="sp-logo">SC</div>

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

      <div className="sp-footer">
        <p>Service Connect</p>
        <span>Lets Grow Together</span>
      </div>
    </div>
  );
}

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

/* TOPBAR */
function Topbar() {
  return (
    <div className="sp-topbar">
      <h2>Service provider Verification</h2>

      <div className="sp-search">
        <Search size={18} />
        <input
          placeholder="Search here..."
        />
      </div>

      <div className="sp-header-right">
        <div className="sp-circle-icon">
          <Bell />
        </div>
        <div className="sp-circle-icon">
          <Settings />
        </div>
        <div className="sp-profile">
          <img
            src="https://i.pravatar.cc/45"
            alt="profile"
          />
        </div>
      </div>
    </div>
  );
}

/* PROFILE CARD */
function ProfileCard() {
  return (
    <div className="sp-profile-card">

      {/* HEADER BANNER */}
      <div className="sp-banner">
        <div className="sp-avatar"></div>
        <div className="sp-more">
          <MoreHorizontal color="white" />
        </div>
      </div>

      {/* USER DETAILS */}
      <div className="sp-details">
        <h2>Karen Hope</h2>

        <div className="sp-rating">
          <Star size={18} color="#f7c325" />
          <span>4.9</span>
        </div>

        {/* CONTACT DETAILS GRID */}
        <div className="sp-contact-grid">
          <ProfileDetail icon={<Briefcase size={18} />} title="Franchise:" value="K Top" />
          <ProfileDetail icon={<MapPin size={18} />} title="Address:" value="Jakarta, Indonesia" />
          <ProfileDetail icon={<PhoneCall size={18} />} title="Phone:" value="+12 345 6789 0" />
          <ProfileDetail icon={<Mail size={18} />} title="Email:" value="Hope@mail.com" />
        </div>
      </div>
    </div>
  );
}

/* PROFILE INFO ITEM */
function ProfileDetail({ icon, title, value }) {
  return (
    <div className="sp-contact-item">
      {icon}
      <div>
        <p>{title}</p>
        <p>{value}</p>
      </div>
    </div>
  );
}

/* SECTION CARD WRAPPER */
function SectionCard({ title, children }) {
  return (
    <div className="sp-section-card">
      <h3>{title}</h3>

      {children}
    </div>
  );
}

/* SERVICE ITEM */
function ServiceItem({ name }) {
  return (
    <div className="sp-service-item">
      <div className="sp-service-icon"></div>

      <div className="sp-service-name">{name}</div>

      <div className="sp-stats">
        <BarChart3 size={20} color="#4a3aff" />
        <p>1,456</p>
        <small>Total Order</small>
      </div>

      <div className="sp-stats">
        <TrendingUp size={22} color="#4a3aff" />
        <p>26%</p>
        <small>Conversion</small>
      </div>
    </div>
  );
}

/* ADS ITEM */
function AdsItem({ name }) {
  return (
    <div className="sp-ads-item">
      <div className="sp-ads-icon"></div>

      <div className="sp-ads-name">{name}</div>

      <div className="sp-stats">
        <BarChart3 size={20} color="#4a3aff" />
        <p>1,456</p>
        <small>Total Reach</small>
      </div>

      <div className="sp-stats">
        <TrendingUp size={22} color="#4a3aff" />
        <p>26%</p>
        <small>Clicks</small>
      </div>
    </div>
  );
}


