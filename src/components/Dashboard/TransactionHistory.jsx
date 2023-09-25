const TransactionHistoryComponent = () => {
  return (
    <>
      <div className="flex justify-center">Transaction History</div>
      <div className="flex justify-around">
        <div>Transaction Number</div>
        <div>Date</div>
        <div>Amount</div>
        <div>Type of Transaction</div>
        <div>Sender Account Number if add funds then just type Add Funds</div>
        <div>Receiver Account Number</div>
      </div>
    </>
  )
}

export default TransactionHistoryComponent