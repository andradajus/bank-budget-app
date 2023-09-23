import React from "react";
import {useState} from 'react'

const AddFunds = ( {addTransactionToHistory}) => {
    const [amount, setAmount] = useState(0);
    const handleAddFunds = () => {
        //Transaction History Local DB first
        const transaction = {
          transactionNumber: Math.floor(Math.random() * 1000),
          date: new Date().toLocaleDateString(),
          amount,
          type: 'Add Funds',
        };
        addTransactionToHistory(transaction);
      };

    return (
        <>
    <form>
        <div>
          <button onClick={() => {event.preventDefault(); setAmount(20)}}>20</button>
          <button onClick={() => {event.preventDefault(); setAmount(50)}}>50</button>
          <button onClick={() => {event.preventDefault();setAmount(100)}}>100</button>
          <button onClick={() => {event.preventDefault();setAmount(200)}}>200</button>
          <button onClick={() => {event.preventDefault();setAmount(500)}}>500</button>
          <button onClick={() => {event.preventDefault();setAmount(1000)}}>1000</button>
          <button onClick={() => {event.preventDefault();setAmount(5000)}}>5000</button>
          <button onClick={() => {event.preventDefault();setAmount(10000)}}>10000</button>
        </div>
        <div>Amount Box: {amount}</div>
        <button type="button" onClick={handleAddFunds}>Add Funds</button>
    </form>
        </>
    )
}

export default AddFunds