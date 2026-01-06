import React from "react";
import {
  TrendingUp, TrendingDown, DollarSign, MoreHorizontal
} from "lucide-react";
import {
  ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Area
} from "recharts";

import "./FinancialManagement.css";
import GraphlImg from "./assets/image/Graph.png";
import icon2imag from "./assets/image/icon2.png";

const chartData = [
  { month: "Jan", income: 18, expense: 12 },
  { month: "Feb", income: 35, expense: 22 },
  { month: "Mar", income: 52, expense: 28 },
  { month: "Apr", income: 26, expense: 18 },
  { month: "May", income: 44, expense: 20 },
  { month: "Jun", income: 68, expense: 40 },
  { month: "Jul", income: 80, expense: 60 },
  { month: "Aug", income: 62, expense: 38 },
  { month: "Sep", income: 74, expense: 46 },
  { month: "Oct", income: 58, expense: 34 },
  { month: "Nov", income: 66, expense: 50 },
  { month: "Dec", income: 60, expense: 42 },
];

const subs = [
  { name: "Samantha W.", id: "ID 123456789", type: "Franchisee" },
  { name: "Tony Soap", id: "ID 123456789", type: "Service Provider" },
  { name: "Jordan Nico", id: "ID 123456789", type: "Service Provider" },
  { name: "Karen Hope", id: "ID 123456789", type: "Franchisee" },
  { name: "Nadila Adja", id: "ID 123456789", type: "Franchisee" },
];

const expenses = [
  { id: "#123456789", tag: "Unit charges", amount: "$ 50,036", date: "2 March 2021, 12:45 PM" },
  { id: "#123456789", tag: "Salary", amount: "$ 50,036", date: "2 March 2021, 12:45 PM" },
  { id: "#123456789", tag: "Rent", amount: "$ 50,036", date: "2 March 2021, 12:45 PM" },
  { id: "#123456789", tag: "Salary", amount: "$ 50,036", date: "2 March 2021, 12:45 PM" },
  { id: "#123456789", tag: "Salary", amount: "$ 50,036", date: "2 March 2021, 12:45 PM" },
];

const FinancialManagement = () => {
  return (
    <div className="fm-content">
      {/* Stat Cards */}
      <section className="fm-stats" >
        <div className="fm-stat"style={{ width: "127%" }}>
          <div className="fm-stat-icon fm-blue"><TrendingUp size={18}/></div>
          <div className="fm-stat-body">
            <p>Revenue</p>
            <h3>932</h3>
            <span className="pos">+10% than last month</span>
          </div>
        </div>

        <div className="fm-stat"style={{ width: "127%" }}>
          <div className="fm-stat-icon fm-orange"><TrendingDown size={18}/></div>
          <div className="fm-stat-body">
            <p>Expense</p>
            <h3>754</h3>
            <span className="neg">-0.5% than last month</span>
          </div>
        </div>

        <div className="fm-stat fm-wide" style={{ width: "97%" }}>
          <div className="fm-stat-icon fm-green"><DollarSign size={18}/></div>
          <div className="fm-stat-body">
            <p>Earnings</p>
            <h3>$123,456</h3>
            <span className="pos">+23% than last month</span>
          </div>
          <img src={GraphlImg} alt="GraphlImg" className="fm-Graph" />
        </div>
      </section>

      {/* Balance Analytics */}
      <section className="fm-card fm-analytics">
        <div className="fm-card-head">
          <h3>Balance Analytics</h3>

          <div className="fm-legend">
            <span className="dot dot-expense"/> Expense <b>1,245</b>
            <span className="dot dot-income" style={{marginLeft: 16}}/> Income <b>1,356</b>
          </div>

          <button className="fm-month-btn">
            Month
            <svg width="16" height="16" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2"/></svg>
          </button>
        </div>

        <div className="fm-chart-wrap">
          <ResponsiveContainer width="100%" height={260}>
            <LineChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="gradIncome" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#FF8E41" stopOpacity="0.35"/>
                  <stop offset="100%" stopColor="#FF8E41" stopOpacity="0"/>
                </linearGradient>
                <linearGradient id="gradExpense" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#F44336" stopOpacity="0.25"/>
                  <stop offset="100%" stopColor="#F44336" stopOpacity="0"/>
                </linearGradient>
              </defs>

              <CartesianGrid stroke="#eee" vertical={false} />
              <XAxis dataKey="month" tick={{ fill: "#778", fontSize: 12 }} axisLine={false} tickLine={false}/>
              <YAxis tick={{ fill: "#778", fontSize: 12 }} axisLine={false} tickLine={false} />
              <Tooltip
                contentStyle={{ borderRadius: 12, border: "0", boxShadow: "0 8px 24px rgba(28, 28, 60, 0.12)" }}
                labelStyle={{ color: "#1f2559" }}
              />

              {/* soft background fill like screenshot */}
              <Area type="monotone" dataKey="income" stroke="none" fill="url(#gradIncome)" />
              <Area type="monotone" dataKey="expense" stroke="none" fill="url(#gradExpense)" />

              <Line type="monotone" dataKey="expense" stroke="#FF5B5B" strokeWidth={3} dot={false} />
              <Line type="monotone" dataKey="income" stroke="#FF8E41" strokeWidth={3} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* Bottom grid */}
      <section className="fm-bottom">
        {/* Subscription list */}
        <div className="fm-card fm-subs">
          <div className="fm-card-head">
            <h3>Subscription laps Service/Franchisee</h3>
          </div>

          <div className="fm-table">
            {subs.map((s, idx) => (
              <div className="fm-row" key={idx}>
                <div className="fm-cell name">
                  <span className="avatar" />
                  <div>
                    <div className="nm">{s.name}</div>
                    <div className="id">{s.id}</div>
                  </div>
                </div>
                <div className="fm-cell type">{s.type}</div>
                <div className="fm-cell more"><MoreHorizontal size={18}/></div>
              </div>
            ))}
          </div>

          <div className="fm-table-foot">
            <span>Showing 1–5 from 100 data</span>
            <div className="fm-pager">
              <button className="pg">1</button>
              <button className="pg alt">2</button>
              <button className="pg alt">3</button>
            </div>
          </div>
        </div>

        {/* Expense list */}
        <div className="fm-card fm-expense">
          <div className="fm-card-head">
            <h3>Expense</h3>
          </div>

          <div className="fm-expense-list">
            {expenses.map((e, i) => (
              <div className="fm-expense-item" key={i}>
                <div className="pill"> <img src={icon2imag} alt="icon2imag" className="fm-icon2imag" /></div>
                <div className="info">
                  <div className="top">
                    <span className="code">{e.id}</span>
                    <span className="tag">{e.tag}</span>
                  </div>
                  <div className="date">{e.date}</div>
                </div>
                <div className="amt">{e.amount}</div>
              </div>
            ))}
          </div>

          <div className="fm-table-foot">
            <span>Showing 1–5 from 100 data</span>
            <div className="fm-pager">
              <button className="pg">1</button>
              <button className="pg alt">2</button>
              <button className="pg alt">3</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
 export default FinancialManagement;
