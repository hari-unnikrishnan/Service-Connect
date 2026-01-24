import "./adsManagement.css";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import image55 from './assets/image/Image.png';

/* ---------- Header ---------- */
function Header({ title }) {
  return (
    <div className="header">
      <h1>{title}</h1>
    </div>
  );
}

/* ---------- Stat Card ---------- */
function StatCard({ title, value, percent }) {
  return (
    <div className="stat-card">
      <p>{title}</p>
      <h2>{value}</h2>
      <span className={percent.includes("-") ? "down" : "up"}>
        {percent} than last month
      </span>
    </div>
  );
}

/* ---------- Ad Category ---------- */
function AdCategory({ selectedCategory, onCategoryClick }) {
  const categories = ["Banner Ad", "Card Ad", "Popup Ad", "Boost Profile"];

  return (
    <div className="category">
      <h3>Ad Category ✎</h3>

      {categories.map((cat) => (
        <button
          key={cat}
          className={`category-btn ${
            selectedCategory === cat ? "active" : ""
          }`}
          onClick={() => onCategoryClick(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

/* ---------- Ad Card ---------- */
function AdCard({ type, onClick }) {
  return (
    <div className="ad-card" onClick={onClick}>
      <div className="ad-img"></div>

      <div className="ad-info">
        <span className="tag">{type}</span>
        <h4>Title</h4>
        <p>Ad ID</p>

        <div className="ad-meta">
          <span>420 Views</span>
          <span>|</span>
          <span>50 Hits</span>
        </div>
      </div>
    </div>
  );
}

/* ---------- Edit Ad Form ---------- */
function EditAdForm({ title, onClose, onSave, onSaveAsDraft }) {
  return (
    <div className="ad-form">
      <button className="close-btn" onClick={onClose}>×</button>

      <h3>{title}</h3>

      <div className="image-box">
        <img src={image55} alt="image55" className="image55" />
        <span className="edit-icon">✎</span>
      </div>

      <input placeholder="Title" />

      <div className="row">
        <input type="date" />
        <input type="time" />
      </div>

      <div className="row">
        <input type="date" />
        <input type="time" />
      </div>

      <input placeholder="Rate 0000/Day" />

      <select>
        <option>upto 5 km radius</option>
      </select>

      <div className="actions">
        <button className="outline">Status ⌄</button>
        <button className="danger">Delete</button>
        <button className="primary" onClick={onSave}>Save</button>
        <button className="danger-outline" onClick={onSaveAsDraft}>Save As Draft</button>
      </div>
    </div>
  );
}

/* ---------- Ads Management ---------- */
export default function AdsManagement() {
  const [selectedAd, setSelectedAd] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("Banner Ad");
  const [editAdType, setEditAdType] = useState("");
  const navigate = useNavigate();

  // ✅ CATEGORY CLICK → OPEN FORM
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setEditAdType(category);
    setSelectedAd("new"); // open form
  };

  // ✅ CARD CLICK → OPEN FORM
  const handleAdCardClick = (id, type) => {
    setSelectedAd(id);
    setEditAdType(type);
  };

  const handleCloseForm = () => {
    setSelectedAd(null);
    setEditAdType("");
  };

  const handleSave = () => {
    navigate('/general-settings');
  };

  const handleSaveAsDraft = () => {
    navigate('/general-settings');
  };

  return (
    <div className="ads-management-content">
      <Header title="Ads Management" />

      <div className="stats">
        <StatCard title="Total Ads" value="932" percent="+10%" />
        <StatCard title="Total Ads Revenue" value="754" percent="-0.5%" />
        <StatCard title="Boosted Profile" value="932" percent="+10%" />
        <StatCard title="Other Ads" value="754" percent="-0.5%" />
      </div>

      <div className="content6">
        <AdCategory
          selectedCategory={selectedCategory}
          onCategoryClick={handleCategoryClick}
        />

        <div className="ads">
          <div className="ads-header">
            <button className="btn-outline">Sort ⌄</button>
            <button className="btn-primary">Add New ⌄</button>
          </div>

          {selectedAd ? (
            <div className="overlay" onClick={handleCloseForm}>
              <div onClick={(e) => e.stopPropagation()}>
                <EditAdForm
                  title={editAdType}
                  onClose={handleCloseForm}
                  onSave={handleSave}
                  onSaveAsDraft={handleSaveAsDraft}
                />
              </div>
            </div>
          ) : (
            <div className="ads-grid3">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <AdCard
                  key={i}
                  type={selectedCategory}
                  onClick={() =>
                    handleAdCardClick(i, selectedCategory)
                  }
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
