const TransactionHistory = ({ transactions }) => {
  return (
    <>
      <div className="flex justify-center">Transaction History</div>
      <div className="flex justify-around">
        <div>Transaction Number</div>
        <div>Date</div>
        <div>Amount</div>
        <div>Type of Transaction</div>
      </div>
      <ul>
        {transactions.map((transaction, index) => (
          <li key={index}>
            {transaction.transactionNumber} {transaction.date}, {transaction.amount}, {transaction.type}
          </li>
        ))}
      </ul>
    </>
  )
}

export default TransactionHistory