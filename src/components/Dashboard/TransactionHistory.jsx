import React, { useEffect, useState } from 'react';
import { PencilIcon } from "@heroicons/react/24/solid";
import {
  ArrowDownTrayIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Avatar,
  Input,
} from "@material-tailwind/react";


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
                <Avatar
                  src={transaction.img}
                  size="md"
                  className="border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
                />
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-bold"
                >
                  {transaction.date}
                </Typography>
              </div>
            </td>

            <td className={classes}>
              <Typography
                variant="small"
                color="blue-gray"
                className="font-bold"
              >
                {transaction.transactionNumber}
              </Typography>
            </td>

            <td className={classes}>
              <Typography
                variant="small"
                color="blue-gray"
                className="font-bold"
              >
                &#x20B1;{transaction.amount}
              </Typography>
            </td>
            <td className={classes}>
              <Typography
                variant="small"
                color="blue-gray"
                className="font-bold"
              >
                {transaction.type}
              </Typography>
            </td>
            <td className={classes}>
              <Typography
                variant="small"
                color="blue-gray"
                className="font-bold"
              >
                {transaction.senderAccountNumber}
              </Typography>
            </td>
            <td className={classes}>
              <Typography
                variant="small"
                color="blue-gray"
                className="font-bold"
              >
                {transaction.recipientAccountNumber}
              </Typography>
            </td>
            <td className={classes}>
              <div className="w-max">
                <Chip
                  size="sm"
                  variant="ghost"
                  value={status}
                  color={
                    status === "paid"
                      ? "green"
                      : status === "pending"
                        ? "amber"
                        : "red"}
                />
              </div>
            </td>
          </tr>
        )
      })
  }

  const TABLE_HEAD = ["Date and Time", "Transaction No.", "Amount", "Type", "Sender Account", "Recipient Account", "Status"]

  return (

    <>
      <Card className="h-full w-full">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div>
              <Typography variant="h5" color="blue-gray">
                Recent Transactions
              </Typography>
              <Typography color="gray" className="mt-1 font-normal">
                These are details about the last transactions
              </Typography>
            </div>
            <div className="flex w-full shrink-0 gap-2 md:w-max">
              <div className="w-full md:w-72">
                <Input
                  label="Search"
                  icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                />
              </div>
            </div>
          </div>
        </CardHeader>

        <CardBody className="overflow-scroll px-0">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {renderTableRows()}
            </tbody>
          </table>
          <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
            <Button variant="outlined" size="sm">Previous</Button>
            <Button variant="outlined" size="sm">Next</Button>
          </CardFooter>
        </CardBody>
      </Card >
    </>
  )
}


export default TransactionHistoryComponent;