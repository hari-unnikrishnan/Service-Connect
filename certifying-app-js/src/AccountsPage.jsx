import React, { useState } from "react";
import { Image, Edit, PlusCircle, Calendar } from "lucide-react";
import "./AccountsPage.css";

const AccountsPage = () => {

  const [formData, setFormData] = useState({
    invoiceNo: '',
    date: '',
    description: '',
    dr: '',
    cr: ''
  });

  const [expenses, setExpenses] = useState([
    {
      id: 1,
      date: 'xx/xx/xxxx',
      invoiceNo: '4954545',
      description: 'Paid cash',
      dr: 0,
      cr: 4954545
    },
    {
      id: 2,
      date: 'xx/xx/xxxx',
      invoiceNo: '4943434',
      description: 'Paid cash',
      dr: 0,
      cr: 4943434
    }
  ]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAddExpense = () => {
    if (!formData.invoiceNo || !formData.date || !formData.description) {
      alert('Please fill in all required fields');
      return;
    }

    const newExpense = {
      id: expenses.length + 1,
      date: formData.date,
      invoiceNo: formData.invoiceNo,
      description: formData.description,
      dr: parseFloat(formData.dr) || 0,
      cr: parseFloat(formData.cr) || 0
    };

    setExpenses(prev => [...prev, newExpense]);
    setFormData({
      invoiceNo: '',
      date: '',
      description: '',
      dr: '',
      cr: ''
    });
  };

  const handleClearForm = () => {
    setFormData({
      invoiceNo: '',
      date: '',
      description: '',
      dr: '',
      cr: ''
    });
  };
  return (
    <div className="accounts-container">
      {/* Add Expense Section */}
      <section className="add-expense">
        <h3>Add Expense</h3>
        <div className="expense-form">
          <input
            type="text"
            name="invoiceNo"
            placeholder="Invoice No"
            value={formData.invoiceNo}
            onChange={handleInputChange}
          />
          <div className="date-box">
           <input
             type="date"
             name="date"
             style={{ color: "black" }}
             value={formData.date}
             onChange={handleInputChange}
           />

            <Calendar size={16} />
          </div>
          <input
            type="text"
            name="description"
            placeholder="Description Remarks"
            value={formData.description}
            onChange={handleInputChange}
          />
          <input
            type="number"
            name="dr"
            placeholder="DR"
            value={formData.dr}
            onChange={handleInputChange}
          />
          <input
            type="number"
            name="cr"
            placeholder="CR"
            value={formData.cr}
            onChange={handleInputChange}
          />
          <button className="clear-btn" onClick={handleClearForm}>Clear</button>
          <button className="add-btn" onClick={handleAddExpense}>
            <PlusCircle size={16} /> Add
          </button>
        </div>
      </section>

      {/* Table */}
      <section className="table-section">
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Sl.No</th>
              <th>Date</th>
              <th>Invoice No</th>
              <th>Description / Remarks</th>
              <th>DR</th>
              <th>CR</th>
              <th>Invoice</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense, index) => (
              <tr key={expense.id}>
                <td><input type="checkbox" /></td>
                <td>{index + 1}</td>
                <td>{expense.date}</td>
                <td>{expense.invoiceNo}</td>
                <td>{expense.description}</td>
                <td>{expense.dr}</td>
                <td>{expense.cr}</td>
                <td>
                  <Image className="table-icon" /> <Edit className="table-icon" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default AccountsPage;
