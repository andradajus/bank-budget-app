import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from "react"
import SideBar from './SideBar'
import { Routes, Route } from 'react-router-dom'
import AccountBalance from './Dashboard/AccountBalance'
import EnrollAccount from './Dashboard/EnrollAccount'
import FundTransfer from './Dashboard/FundTransfer'
import AlertComponent from './AlertBox.jsx'
import DashboardHome from './Dashboard/Home'
import AddFunds from './Dashboard/AddFunds'

    const Dashboard = ({user, accountInfo, alert}) => {
        const navigate = useNavigate()
        const [transactionHistory, setTransactionHistory] = useState([]);
        const [balances, setBalances] = useState({
          savings: user.balanceSavings || 0,
          checking: user.balanceChecking || 0,
        })
      
      const updateBalances = (savings, checking) => {
          setBalances({ savings, checking });
      }

      const addTransactionToHistory = (transaction) => {
        const updatedTransactionHistory = [...transactionHistory, transaction];
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
  <div className="bg-blue-100 h-screen w-screen max-h-full">
    <div className="grid grid-cols-5 grid-rows-5 gap-4">
              <div className="bg-blue-200 shadow-md rounded col-span-3 h-auto ms-24 mt-2 max-h-full">
                <div className="flex p-1  flex-col">
                  <div className="flex flex-row place-content-around">
                      <div className="bg-blue-100 shadow-md rounded p-2 pl-16 pr-16">
                          <div className=" rounded leading-normal text-3xl md:text font-bold">Welcome,</div> 
                          <div className="flex uppercase rounded leading-normal text-2xl md:text ">{user?.firstName}</div>
                      </div>

                     <div className="flex flex-col bg-blue-100 shadow-md rounded gap-1 p-2">
                      <div className="flex flex-col">
                        <div className="flex">Savings Account</div>
                        <div className="font-semibold text-slate-800 text-xl lining-nums">&#x20B1;{balances.savings}</div>
                      </div>

                      <div className="flex flex-col">
                        <div className="flex">Checking Account</div>
                        <div className="font-semibold text-slate-800 text-xl lining-nums">&#x20B1;{balances.checking}</div>
                      </div>

                    </div>
                  </div>
              </div>
            </div>
          <div className="bg-blue-200 shadow-md rounded col-span-3 row-span-3 col-start-1 row-start-2 h- ms-24 grow-0">
              <Routes>
                <Route path="/account-balance" element={<AccountBalance user={user} accountInfo={accountInfo} balances={balances}/>} />
                <Route path="/enroll-account" element={<EnrollAccount user={user} />} />
                <Route path="/add-funds" element={<AddFunds user={user} accountInfo={accountInfo} updateBalances={updateBalances} balances={balances} addTransactionToHistory={addTransactionToHistory} />} />
                <Route path="/fund-transfer" element={<FundTransfer user={user} accountInfo={accountInfo} updateBalances={updateBalances} balances={balances} addTransactionToHistory={addTransactionToHistory} />} />
                <Route index element={<DashboardHome user={user} accountInfo={accountInfo} balances={balances} />} />
             </Routes>
          </div>
          <div className="bg-blue-200 shadow-md rounded col-span-3 col-start-1 row-start-5 h-auto ms-24 overflow-auto">
            <div className="overflow-auto">
        <div className="flex justify-center">Transaction History</div>
        <div className="bg-blue-100 rounded-md m-1">
          <div className="flex flex-row justify-between overflow-auto">
            <div>Reference</div>
            <div>Date</div>
            <div>Amount</div>
            <div>Type</div>
          </div>

        {transactionHistory.map((transaction, index) => (
          <div key={index} className="flex rounded-md m-1 justify-evenly">

            <div className="bg-green-200 flex justify-between rounded-md w-full">            
                <div>{transaction.transactionNumber}</div>
                <div className="pl-1ik0">{transaction.date}</div>
                <div className="pr-8">&#x20B1;{transaction.amount}</div>
                <div>{transaction.type}</div>
            </div>

          </div>
        ))}
      </div>
        </div>
      </div>
          <div className="bg-blue-200 shadow-md rounded col-span-2 row-span-4 col-start-4 row-start-1 mt-2 w-auto">Credit Expenses Here</div>
          <div className="flex bg-blue-200 shadow-md rounded w-auto">Currency Exchange Rate here</div>
    </div>
  </div>
  </>
  )
}

export default Dashboard