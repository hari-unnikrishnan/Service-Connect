import React from "react";
import {
  DollarSign,
  TrendingUp,
} from "lucide-react";

import "./FranchiseeDashboard.css";

const FranchiseeDashboard = () => {

  const StatCard = ({ title, value, sub }) => (
    <div className="stat-card">
      <div className="stat-inner">
        <div className="stat-icon">
          <DollarSign size={20} />
        </div>
        <div>
          <div className="stat-title">{title}</div>
          <div className="stat-value">{value}</div>
          <div className="stat-sub">{sub}</div>
        </div>
      </div>
    </div>
  );

  const FranchiseeCard = () => (
    <div className="franchisee-card">
      <div className="franchisee-hero"></div>
      <div className="franchisee-body">
        <h2>John Doe</h2>
        <div className="meta">Franchisee ID: FR-001</div>
        <div className="meta">Location: New York</div>
        <div className="contact-row">
          <span>📧 john@example.com</span>
          <span>📞 +1 234 567 890</span>
        </div>
      </div>
      <div className="avatar-large">JD</div>
    </div>
  );

  const PaymentHistory = () => (
    <div className="payments">
      <h3>Recent Payments</h3>
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Commission Payment</td>
            <td className="amount">$2,500</td>
            <td><span className="status complete">Complete</span></td>
            <td>Dec 15, 2024</td>
          </tr>
          <tr>
            <td>Registration Fee</td>
            <td className="amount">$1,200</td>
            <td><span className="status pending">Pending</span></td>
            <td>Dec 10, 2024</td>
          </tr>
        </tbody>
      </table>
      <div className="pagination">
        <span>Showing 1-2 of 2</span>
        <div className="pages">
          <button className="page active">1</button>
        </div>
      </div>
    </div>
  );

  const IncomeChart = () => (
    <div className="income">
      <h3>Income Overview</h3>
      <div className="chart-placeholder">
        <TrendingUp size={48} />
        <p>Chart will be displayed here</p>
      </div>
    </div>
  );

  const RecentActivities = () => (
    <div className="activities">
      <h4>Recent Activities</h4>
      <div className="activity-list">
        <div className="activity">
          <div className="activity-left"></div>
          <div>New service provider registered</div>
        </div>
        <div className="activity">
          <div className="activity-left"></div>
          <div>Payment processed successfully</div>
        </div>
        <div className="activity">
          <div className="activity-left"></div>
          <div>Commission updated</div>
        </div>
      </div>
      <button className="viewmore">View More</button>
    </div>
  );

  return (
    <>
      {/* Stats Grid */}
      <section className="stats-grid">
        <StatCard title="Total Earnings" value="$9,320" sub="+10% than last month" />
        <StatCard title="Total Service Providers" value="932" sub="+10% than last month" />
        <StatCard title="Total Services" value="932" sub="+10% than last month" />
        <StatCard title="Registration Earnings" value="$7,540" sub="-0.5% than last month" />
        <StatCard title="Commission Earnings" value="$9,320" sub="+10% than last month" />
        <StatCard title="Ads Earnings" value="$7,540" sub="-0.5% than last month" />
      </section>

      {/* Content Grid */}
      <div className="content-grid">
        <div className="left-col">
          <FranchiseeCard />
          <PaymentHistory />
          <IncomeChart />
        </div>
        <aside className="right-col">
          <RecentActivities />
        </aside>
      </div>
    </>
  );
};

export default FranchiseeDashboard;
