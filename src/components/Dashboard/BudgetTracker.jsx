import React, { useState } from 'react';

const BudgetTracker = () => {
  const [expenses, setExpenses] = useState([]);
  const [newExpense, setNewExpense] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const handleAddExpense = () => {
    if (newExpense !== '') {
      if (editIndex !== null) {
        const updatedExpenses = [...expenses];
        updatedExpenses[editIndex] = newExpense;
        setExpenses(updatedExpenses);
        setEditIndex(null);
      } else {
        setExpenses([...expenses, newExpense]);
      }
      setNewExpense('');
    }
  };

  const handleDeleteExpense = (index) => {
    const updatedExpenses = expenses.filter((_, i) => i !== index);
    setExpenses(updatedExpenses);
  };

  const handleEditExpense = (index) => {
    setNewExpense(expenses[index]);
    setEditIndex(index);
  };

  return (
    <div>
      <h2>Budget Tracker</h2>
      <input
        type="text"
        placeholder="Enter expense"
        value={newExpense}
        onChange={(e) => setNewExpense(e.target.value)}
      />
      <button onClick={handleAddExpense}>
        {editIndex !== null ? 'Update Expense' : 'Add Expense'}
      </button>

      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>
            {expense}
            <button onClick={() => handleEditExpense(index)}>Edit</button>
            <button onClick={() => handleDeleteExpense(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BudgetTracker;