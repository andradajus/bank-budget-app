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
                <div className="bg-blue-100 rounded-md p-4">
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