import React, { useState, useEffect } from "react";
import { Typography } from "@material-tailwind/react";

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

  const totalExpense = expenses.reduce(
    (acc, expense) => acc + parseFloat(expense.amount),
    0
  );
  const updatedAccounts = JSON.parse(localStorage.getItem("accounts")) || [];
  const userAccount = updatedAccounts.find(
    (account) => account.bankNumberS === user.bankNumberS
  );

  const updateBalance = (amount, subtract) => {
    const updatedAccountsAfterExpense = updatedAccounts.map((account) => {
      if (account.bankNumberS === user.bankNumberS) {
        account.balanceSavings += subtract
          ? parseFloat(amount)
          : -parseFloat(amount);
      }
      return account;
    });
    localStorage.setItem(
      "accounts",
      JSON.stringify(updatedAccountsAfterExpense)
    );
    return subtract
      ? user.balanceSavings + parseFloat(amount)
      : user.balanceSavings - parseFloat(amount);
  };

  const handleAddExpense = () => {
    if (newExpenseName !== "" && newExpenseAmount !== "") {
      const expenseAmount = parseFloat(newExpenseAmount);
      const updatedSavings = updateBalance(expenseAmount);
      const newExpense = { name: newExpenseName, amount: expenseAmount };
      updateBalances(userAccount.balanceSavings);
      setExpenses([...expenses, newExpense]);
      setNewExpenseName("");
      setNewExpenseAmount("");
    }
  };

  const handleDeleteExpense = (index) => {
    const deletedAmount = parseFloat(expenses[index].amount);
    const updatedExpenses = expenses.filter((_, i) => i !== index);
    setExpenses(updatedExpenses);
    updateBalance(deletedAmount, true);
    updateBalances(userAccount.balanceSavings);
  };

  const handleSubmit = () => {
    if (userAccount) {
      updateBalances(userAccount.balanceSavings);
    }

    const now = new Date();
    const formattedDate = now.toLocaleDateString("en-CA", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });

    const transaction = {
      transactionNumber: Math.floor(1000 + Math.random() * 9000),
      date: formattedDate,
      amount: totalExpense,
      type: "Budget Assistance",
    };

    addTransactionToHistory(transaction, user.bankNumberS);
    showAlert("Payment Successful", "success");
    setNewExpenseName("");
    setNewExpenseAmount("");
    setExpenses([]);
  };

  return (
    <div className="flex flex-col h-full">
      <span className=" bg-blue-100 rounded-md shadow-md flex justify-center font-bold text-3xl">
        Budget Assistance
      </span>

    
      <div className="bg-blue-100 rounded-md shadow-md flex justify-center pt-2 pb-2 mt-2 mb-2">
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
          className={`bg-${
            editIndex !== null ? "green" : "blue"
          }-500 hover:bg-${
            editIndex !== null ? "green" : "blue"
          }-700 ml-1 px-1 py-1 text-white font-bold rounded focus:outline-none focus:shadow-outline`}
          onClick={handleAddExpense}
        >
          {editIndex !== null ? "Update Expense" : "Add Expense"}
        </button>
      </div>

      <div className="bg-blue-100 rounded-md shadow-md flex justify-center pt-2 pb-2 h-auto">
        <div className="pr-2 justify-center flex flex-col bg-gray-50 rounded-md shadow-md max-w-md divide-y divide-gray-200 dark:divide-gray-700">
          {expenses.map((expense, index) => (
            <div
              key={index}
              className="flex justify-between items-center py-2 "
            >
              <span
                className={`bg-${
                  editIndex === index ? "yellow" : "blue"
                }-200 rounded-md ml-1 w-36 text-center text-m font-bold text-gray-900 dark:text-white`}
              >
                {expense.name}
              </span>
              <span
                className={`bg-${
                  editIndex === index ? "yellow" : "blue"
                }-200 rounded-md ml-1 w-36 text-center font-semibold text-slate-800 text-m lining-nums`}
              >
                &#x20B1;{`${expense.amount}`}
              </span>

              <div className="flex ml-1">
                <button
                  className="bg-red-500 hover:bg-red-700 ml-1 px-1 py-1 text-white font-bold rounded focus:outline-none focus:shadow-outline"
                  onClick={() => handleDeleteExpense(index)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-end h-full">
      <div className="bg-blue-100 shadow-md rounded-md pb-2 flex flex-col w-full">
        <div className="flex justify-center">
          <button
            className={`mt-2 bg-${
              editIndex !== null ? "green" : "blue"
            }-500 hover:bg-${
              editIndex !== null ? "green" : "blue"
            }-700 ml-1 px-2 py-2 text-white font-bold rounded focus:outline-none focus:shadow-outline`}
            onClick={handleSubmit}
          >
            Submit
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BudgetTracker;
