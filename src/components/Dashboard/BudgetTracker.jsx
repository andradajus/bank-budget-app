import React, { useState } from "react";
import { useEffect } from "react";

const BudgetTracker = ({
  user,
  updateBalances,
  addTransactionToHistory,
  showAlert,
}) => {
  const [expenses, setExpenses] = useState([]);
  const [newExpenseName, setNewExpenseName] = useState("");
  const [newExpenseAmount, setNewExpenseAmount] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const sum = expenses.reduce(
      (acc, expense) => acc + parseFloat(expense.amount),
      0
    );
    setTotalAmount(sum);
  }, [expenses]);

  const handleAddExpense = () => {
    if (newExpenseName !== "" && newExpenseAmount !== "") {
      const newExpense = { name: newExpenseName, amount: newExpenseAmount };

      if (editIndex !== null) {
        const updatedExpenses = [...expenses];
        updatedExpenses[editIndex] = newExpense;
        setExpenses(updatedExpenses);
        setEditIndex(null);
      } else {
        setExpenses([...expenses, newExpense]);
      }
      setNewExpenseName("");
      setNewExpenseAmount("");
    }
  };

  const handleDeleteExpense = (index) => {
    const updatedExpenses = expenses.filter((_, i) => i !== index);
    setExpenses(updatedExpenses);
  };

  const handleEditExpense = (index) => {
    const { name, amount } = expenses[index];
    setNewExpenseName(name);
    setNewExpenseAmount(amount);
    setEditIndex(index);
  };

  const handleSubmit = () => {
    const totalExpense = expenses.reduce(
      (acc, expense) => acc + parseFloat(expense.amount),
      0
    );
    const updatedBalance = user.balanceSavings - totalExpense;
    updateBalances(updatedBalance);
    setExpenses([]);

    const transaction = {
      transactionNumber: Math.floor(1000 + Math.random() * 9000),
      date: new Date().toLocaleString(),
      amount: totalExpense,
      type: "Budget Assistance",
    };
    addTransactionToHistory(transaction, user.bankNumberS);
    showAlert("Payment Successful", "success");
  };

  return (
    <div>
      <span className="flex justify-center text-gray-700 font-bold text-3xl">
        Budget Assistance
      </span>
      <div className="mt-2 mb-2">
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
          focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 ml-1
          dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          type="text"
          placeholder="Enter expense details"
          value={newExpenseName}
          onChange={(e) => setNewExpenseName(e.target.value)}
        />
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
          focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 ml-1
          dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          type="number"
          placeholder="Amount"
          value={newExpenseAmount}
          onChange={(e) => setNewExpenseAmount(e.target.value)}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 ml-1 px-1 py-1 text-white font-bold rounded focus:outline-none focus:shadow-outline"
          onClick={handleAddExpense}
        >
          {editIndex !== null ? "Update Expense" : "Add Expense"}
        </button>
      </div>

      <div className=" ml-2 pr-2 justify-center w-max flex flex-col bg-blue-400 rounded-md max-w-md divide-y divide-gray-200 dark:divide-gray-700">
        {expenses.map((expense, index) => (
          <div key={index} className="flex justify-between items-center py-2 ">
            <span className="bg-blue-200 rounded-md ml-1 w-36 text-center text-m font-bold text-gray-900 dark:text-white">
              {expense.name}
            </span>
            <span className="bg-blue-200 rounded-md ml-1 w-36 text-center font-semibold text-slate-800 text-m lining-nums">
              &#x20B1;{expense.amount}
            </span>

            <div className="flex ml-1">
              <button
                className="bg-blue-500 hover:bg-blue-700 px-2 py-1 text-white font-bold rounded focus:outline-none focus:shadow-outline"
                onClick={() => handleEditExpense(index)}
              >
                Edit
              </button>

              <button
                className="bg-red-500 hover:bg-red-700 ml-1 px-2 py-1 text-white font-bold rounded focus:outline-none focus:shadow-outline"
                onClick={() => handleDeleteExpense(index)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-2">
        <span className="text-gray-900 font-semibold text-lg">
          Total Amount: &#x20B1;{totalAmount.toFixed(2)}
        </span>
      </div>
      <div className="flex justify-center">
        <button
          className="mt-2 bg-blue-500 hover:bg-blue-700 ml-1 px-2 py-2 text-white font-bold rounded focus:outline-none focus:shadow-outline"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default BudgetTracker;
