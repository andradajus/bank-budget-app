import React, { useEffect, useState } from 'react';
import {MagnifyingGlassIcon} from "@heroicons/react/24/outline";
import { Chip, Avatar,Input,} from "@material-tailwind/react";

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

  const filteredTransactions = transactionHistory.filter(filterTransactions);

  const renderTableRows = () => {
    return transactionHistory
      .filter(filterTransactions)
      .map((transaction, index) => {
        const isLast = index === transactionHistory.length - 1;
        const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

        return (
          <tr key={index}>
            <td className={classes}>
              <div className="flex items-center gap-3">
                <div
                  className="text-sm"
                >
                  {transaction.date}
                </div>
              </div>
            </td>

            <td className={classes}>
              <div
                className="text-center text-sm"
              >
                {transaction.transactionNumber}
              </div>
            </td>

            <td className={classes}>
              <div
                className="text-sm"
              >
                &#x20B1;{transaction.amount}
              </div>
            </td>
            <td className={classes}>
              <div
                className="text-sm"
              >
                {transaction.type}
              </div>
            </td>
            <td className={classes}>
              <div
                className="text-sm"
              >
                {transaction.senderAccountNumber}
              </div>
            </td>
            <td className={classes}>
              <div
                className="text-sm"
              >
                {transaction.recipientAccountNumber}
              </div>
            </td>
          </tr>
        )
      })
  }

  const TABLE_HEAD = ["Date", "Transaction No.", "Amount", "Type", "Sender Account", "Recipient Account"]

  return (

    <>
      <div className="h-full w-full rounded-md bg-blue-100 p-2 overflow-scroll">
        <div className="rounded-none">
          <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div>
              <p>
                Recent Transactions
              </p>

              <p className="mt-1 font-normal">
                These are details about the last transactions
              </p>
            </div>

            <div className="flex w-full shrink-0 gap-2 md:w-max">
              <div className="w-full md:w-72">
                <Input
                  className="bg-color-white"
                  label="Search"
                  icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="px-0 w-full">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                  >
                    <div
                      className="font-bold leading-none opacity-70"
                    >
                      {head}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="font-bold">
              {renderTableRows()}
            </tbody>
          </table>
        </div>
      </div >
    </>
  )
}


export default TransactionHistoryComponent;