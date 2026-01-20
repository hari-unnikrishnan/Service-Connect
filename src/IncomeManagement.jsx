import React from "react";
import {
  Edit3,
} from "lucide-react";
import "./IncomeManagement.css";

const IncomeManagement = () => {

  const incomeData = [
    { id: 1, type: "Franchisee Registration", split: "Percentage", company: "100%", franchisee: "0%", dealer: "0%", service: "0%" },
    { id: 2, type: "Service Registration", split: "Percentage", company: "100%", franchisee: "0%", dealer: "0%", service: "0%" },
    { id: 3, type: "Banner Ads", split: "Percentage", company: "100%", franchisee: "0%", dealer: "0%", service: "0%" },
    { id: 4, type: "Card Ads", split: "Percentage", company: "100%", franchisee: "0%", dealer: "0%", service: "0%" },
    { id: 5, type: "Popup Ads", split: "Percentage", company: "100%", franchisee: "0%", dealer: "0%", service: "0%" },
    { id: 6, type: "Boost Profile", split: "Percentage", company: "100%", franchisee: "0%", dealer: "0%", service: "0%" },
    { id: 7, type: "Service Commission", split: "Percentage", company: "4%", franchisee: "4%", dealer: "2%", service: "80%" },
    { id: 8, type: "Lead Commission", split: "Percentage", company: "100%", franchisee: "0%", dealer: "0%", service: "0%" },
  ];

  return (
    <div className="income-table">
      <table>
        <thead>
          <tr>
            <th>SL.No</th>
            <th>Income Type</th>
            <th>Split Type</th>
            <th>Company</th>
            <th>Franchisee</th>
            <th>Dealer</th>
            <th>Service Provider</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {incomeData.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.type}</td>
              <td>{row.split}</td>
              <td>{row.company}</td>
              <td>{row.franchisee}</td>
              <td>{row.dealer}</td>
              <td>{row.service}</td>
              <td>
                <Edit3 size={16} className="edit-icon" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IncomeManagement;
