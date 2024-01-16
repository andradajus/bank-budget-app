import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from "react"
import SideBar from './SideBar'
import { Routes, Route } from 'react-router-dom'
import AccountBalance from './Dashboard/AccountBalance'
import FundTransfer from './Dashboard/FundTransfer'
import AlertComponent from './AlertBox.jsx'
import DashboardHome from './Dashboard/Home'
import AddFunds from './Dashboard/AddFunds'
import BudgetTracker from './Dashboard/BudgetTracker'
import TransactionHistoryComponent from './Dashboard/TransactionHistory'
import MyProfile from './Dashboard/MyProfile'
import ExchangeRate from './Dashboard/ExchangeRate'
import VirtualCard from './Dashboard/VirtualCard'

const Dashboard = ({ user, accountInfo }) => {
  const navigate = useNavigate()
  const [transactionHistory, setTransactionHistory] = useState([]);
  const [alert, setAlert] = useState(null);
  const [balances, setBalances] = useState({
    savings: user.balanceSavings || 0,
    checking: user.balanceChecking || 0,
  })

  const showAlert = (message, type) => {
    setAlert({ message, type })
    setTimeout(() => {
      setAlert(null)
    }, 3000)
  }

  const updateBalances = (savings, checking) => {
    setBalances({ savings, checking });
  };

  const getFilteredTransactionHistory = (userBankNumber) => {
    console.log('User Bank Number:', userBankNumber);

    const filteredTransactions = transactionHistory.filter(
      (transaction) => transaction.senderAccountNumber === userBankNumber || transaction.recipientAccountNumber === userBankNumber
    );

    console.log('Filtered Transactions:', filteredTransactions);

    return filteredTransactions.slice(-5).reverse();
  };

  const addTransactionToHistory = (transaction, senderAccountNumber, recipientAccountNumber) => {
    console.log('Sender Account Number:', senderAccountNumber);
    console.log('Recipient Account Number:', recipientAccountNumber);

    const updatedTransactionHistory = [
      ...transactionHistory,
      { ...transaction, senderAccountNumber, recipientAccountNumber }
    ];
    setTransactionHistory(updatedTransactionHistory);
    localStorage.setItem('transactionHistory', JSON.stringify(updatedTransactionHistory));
  };


  useEffect(() => {
    if (!user) {
      navigate('/login')
    } else {
      const storedTransactionHistory = JSON.parse(localStorage.getItem('transactionHistory'));
      if (storedTransactionHistory) {
        setTransactionHistory(storedTransactionHistory);
      }
    }
  }, [navigate, user])


  return (
    <>
      <SideBar />
      {alert && <AlertComponent message={alert.message} type={alert.type} />}
      <div className="bg-gray-200 grid grid-cols-12 grid-rows-6 gap-4 w-screen h-screen mt-2 overflow-auto">
        <div className=" col-span-7 col-start-2 flex">

          <div className="flex flex-row w-full place-content-around">
            <div className="flex flex-col bg-blue-500 text-white items-center justify-center shadow-md rounded-md pl-16 pr-16">
              <div className="rounded leading-normal text-2xl md:text font-bold">Welcome,</div>
              <div className="flex uppercase rounded leading-normal text-2xl md:text hover:rounded-md hover:scale-105 hover:break-normal ease-in-out duration-300">{user?.firstName}</div>
            </div>

            <div className="flex flex-col bg-blue-500 text-white rounded-md shadow-md items-center justify-center pl-16 pr-16">
              <div className="flex flex-col">
                <div className="flex">Savings Account</div>
                <div className="font-semibold text-slate-800 text-xl lining-nums hover:rounded-md hover:scale-105 hover:break-normal ease-in-out duration-300">&#x20B1;{balances.savings}</div>
              </div>

              <div className="flex flex-col">
                <div className="flex">Checking Account</div>
                <div className="font-semibold text-slate-800 text-xl lining-nums hover:rounded-md hover:scale-105 hover:break-normal ease-in-out duration-300">&#x20B1;{balances.checking}</div>
              </div>
            </div>
          </div>

        </div>

        <div className="col-span-7 row-span-3 col-start-2 row-start-2 mt-4 h-full">
          <Routes>
            <Route path="/my-profile" element={<MyProfile user={user} accountInfo={accountInfo} balances={balances} showAlert={showAlert} />} />
            <Route path="/account-balance" element={<AccountBalance user={user} accountInfo={accountInfo} balances={balances} showAlert={showAlert} />} />
            <Route path="/transaction-history" element={<TransactionHistoryComponent user={user} showAlert={showAlert} />} />
            <Route path="/add-funds" element={<AddFunds user={user} accountInfo={accountInfo} updateBalances={updateBalances} balances={balances} addTransactionToHistory={addTransactionToHistory} showAlert={showAlert} />} />
            <Route path="/virtual-card" element={<VirtualCard user={user} accountInfo={accountInfo} updateBalances={updateBalances} balances={balances} addTransactionToHistory={addTransactionToHistory} showAlert={showAlert} />} />
            <Route path="/fund-transfer" element={<FundTransfer user={user} accountInfo={accountInfo} updateBalances={updateBalances} balances={balances} addTransactionToHistory={addTransactionToHistory} showAlert={showAlert} />} />
            <Route index element={<DashboardHome user={user} accountInfo={accountInfo} balances={balances} showAlert={showAlert} />} />
          </Routes>
        </div>

        <div className="col-span-7 row-span-2 col-start-2 row-start-5 mt-6">
          <div className="bg-gray-50 rounded-md shadow-md h-64">
            <span className="flex justify-center font-bold text-xl">Recent Transactions</span>
            <table className="table-auto w-full">
              <thead className="bg-blue-500 text-white">
                <tr>
                  <th className="p-1 text-center">Ref. No.</th>
                  <th className="p-1 text-center">Date</th>
                  <th className="p-1 text-center">Amount</th>
                  <th className="p-1 text-center">Type</th>
                </tr>
              </thead>
              <tbody>
                {getFilteredTransactionHistory(user.bankNumberS).map((transaction, index) => (
                  <tr className="bg-gray-200 rounded-md shadow-md hover:rounded-md hover:scale-105 ease-in-out duration-300" key={index}>
                    <td className="p-1 text-center">{transaction.transactionNumber}</td>
                    <td className="p-1 text-center">{transaction.date}</td>
                    <td className="p-1 text-center">&#x20B1;{transaction.amount}</td>
                    <td className="p-1 text-center">{transaction.type}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="p-1 pl-2 pr-2 italic text-xs">Curent Transaction Summary: 
            This summary provides a glimpse of your five most recent transactions. 
            Should you require a comprehensive transaction history, including previous activities, 
            kindly proceed to the dedicated 'Transaction History' page. Your diligent oversight of
             financial transactions is appreciated.</p>
          </div>
        </div>

        <div className="col-span-4 row-span-4 col-start-9 row-start-1 h-full">
        <BudgetTracker user={user} accountInfo={accountInfo} updateBalances={updateBalances} balances={balances} addTransactionToHistory={addTransactionToHistory} showAlert={showAlert}
          setBalances={setBalances} />
        </div>

        <div className="col-span-4 row-span-2 col-start-9 row-start-5">
          <ExchangeRate />
        </div>
      </div>
    </>
  )
}
export default Dashboard