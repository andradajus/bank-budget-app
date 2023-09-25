import React, { useEffect, useState } from 'react';

const TransactionHistoryComponent = ({ user }) => {
  const [transactionHistory, setTransactionHistory] = useState([]);

  useEffect(() => {
    const fetchedTransactionHistory = JSON.parse(localStorage.getItem('transactionHistory')) || [];
    setTransactionHistory(fetchedTransactionHistory);
  }, []);

  const filterTransactions = (transaction) => {
    if (!user) return false; 
    const senderAccountNumber = transaction.senderAccountNumber;
    const recipientAccountNumber = transaction.recipientAccountNumber;
    return senderAccountNumber === user.bankNumberS || recipientAccountNumber === user.bankNumberS;
  };

  return (
    <>
      <div className="">
        <div className="flex justify-center text-2xl mb-4">Transaction History</div>

        <div className="flex flex-col">
          {transactionHistory
            .filter(filterTransactions)
            .map((transaction, index) => (
              <div key={index} className="flex justify-around mb-2">
                <div className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
          hover:border-blue-500 dark:bg-gray-700 dark:border-gray-600 ml-1
          hover:placeholder-gray-400 hover:text-black hover:scale-110 ease-in-out dark:hover:ring-blue-500 dark:hover:border-blue-500 p-4 shadow-lg duration-300">
                  <div>Transaction Number: {transaction.transactionNumber}</div>
                  <div>Date: {transaction.date}</div>
                  <div>Amount: {transaction.amount}</div>
                  <div>Type: {transaction.type}</div>
                  <div>Sender Account: {transaction.senderAccountNumber}</div>
                  <div>Recipient Account: {transaction.recipientAccountNumber}</div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default TransactionHistoryComponent;