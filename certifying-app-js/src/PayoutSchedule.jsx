import React from "react";
import "./PayoutSchedule.css";
import {
  Trash2,
  Edit,
} from "lucide-react";

import image from './assets/image/Avatar.png';
import image2 from './assets/image/Avatar2.png';
import image3 from './assets/image/Avatar3.png';

const PayoutSchedule = () => {

  return (
    <div className="payout-content">
      {/* Payment Schedules */}
      <section className="payment-section">
        <h3 className="section-title">Payment Schedules</h3>
        <div className="payment-list">
          {[
            {
              name: (
                <>
                  <img src={image} alt="dealer" className="image" size={22} />
                  <span>All Dealers</span>
                </>
              ),
              type: "Monthly",
              color: "yellow",
            },
            {
              name: (
                <>
                  <img src={image2} alt="franchisee" className="image" size={22} />
                  <span>All Franchisee</span>
                </>
              ),
              type: "Monthly",
              color: "green",
            },
            {
              name: (
                <>
                  <img src={image2} alt="service" className="image" size={22} />
                  <span>All Service Providers</span>
                </>
              ),
              type: "Weekly",
              color: "green",
            },
            {
              name: (
                <>
                  <img src={image2} alt="thomas" className="image" size={22} />
                  <span>Thomas</span>
                </>
              ),
              type: "Service Provider - Feb 24",
              color: "gray",
            },
            {
              name: (
                <>
                  <img src={image3} alt="banu" className="image3" size={22} />
                  <span>Banu - Service Provider</span>
                </>
              ),
              type: "Service Provider - Feb 15",
              color: "gray",
            },
          ].map((item, i) => (
            <div key={i} className="payment-item">
              <div className="payment-info">
                <span className={`status-dot ${item.color}`}></span>
                <div>
                  <p className="payment-name">{item.name}</p>
                  <p className="payment-type">{item.type}</p>
                </div>
              </div>
              <div className="payment-actions">
                <Edit size={16} className="icon-edit" />
                <Trash2 size={16} className="icon-delete" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Form Section */}
      <section className="form-section">
        {/* Left Column */}
        <div className="form-left">
          <label className="form-label">User Type</label>
          <select className="form-select">
            <option>User Name/ID/Group/Location</option>
          </select>

          <label className="form-label">User Name / ID</label>
          <select className="form-select">
            <option>User Name/ID/Group/Location</option>
          </select>

          <div className="checkbox-group">
            <input type="checkbox" defaultChecked />
            <label>Auto Payout Schedule</label>
          </div>
          <select className="form-select">
            <option>Daily/Weekly/Monthly/Yearly</option>
          </select>

          <div className="checkbox-group">
            <input type="checkbox" defaultChecked />
            <label>Manual Payout Schedule</label>
          </div>
          <input
            type="datetime-local"
            className="form-input"
            defaultValue="2024-06-10T09:41"
          />

          <label className="form-label">Payment Method</label>
          <select className="form-select">
            <option>Value</option>
          </select>

          <label className="form-label">Account Holder Name</label>
          <input type="text" className="form-input" placeholder="Value" />

          <label className="form-label">Bank Branch</label>
          <input type="text" className="form-input" placeholder="Value" />
        </div>

        {/* Right Column */}
        <div className="form-right">
          <div className="balance-card">
            <button className="balance-btn">CHECK BALANCE</button>
            <div className="balance-details">
              <p className="balance-name">Lasso Kayne</p>
              <p className="balance-number">4551 5667 8886 7775</p>
              <p className="balance-label">Account Balance</p>
              <p className="balance-amount">$121,000</p>
            </div>
          </div>

          <div className="checkbox-group">
            <input type="checkbox" defaultChecked />
            <label>Auto Payment</label>
          </div>
          <select className="form-select">
            <option>Percentage</option>
          </select>

          <div className="checkbox-group">
            <input type="checkbox" defaultChecked />
            <label>Manual Payment</label>
          </div>
          <input type="text" className="form-input" placeholder="Amount" />

          <label className="form-label">Bank Name</label>
          <input type="text" className="form-input" placeholder="Value" />

          <label className="form-label">Account Number</label>
          <input type="text" className="form-input" placeholder="Value" />

          <label className="form-label">IFSC Code</label>
          <input type="text" className="form-input" placeholder="Value" />
        </div>

        {/* Bottom Buttons */}
        <div className="form-actions">
          <select className="form-selects status-select">
            <option>Status</option>
          </select>

          <div className="button-group">
            <button className="btn delete-btn">Delete</button>
            <button className="btn save-btn">Save</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PayoutSchedule;
