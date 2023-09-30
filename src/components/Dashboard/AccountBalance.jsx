import {useState, useEffect} from 'react'
import SideBar from '../SideBar'
import { useNavigate } from 'react-router-dom'

const AccountBalance = ({ user, balances, updateBalances }) => {
  const [savingsBalance, setSavingsBalance] = useState(balances.savings || 0);
  const [checkingBalance, setCheckingBalance] = useState(balances.checking || 0);

  useEffect(() => {
    setSavingsBalance(balances.savings || 0);
    setCheckingBalance(balances.checking || 0);
  }, [balances]);

  return (
    <>
        {user && (
          <div className="justify-between h-full flex flex-col">
            
            <div className="flex flex-col self-center bg-blue-100 shadow-md rounded-md p-3 pr-6 pl-6 hover:rounded-md hover:scale-105 hover:break-normal ease-in-out duration-300">
              <div className="flex justify-center font-bold text-3xl">Savings Account Number</div>
              <div className="flex justify-center text-3xl text">{user.bankNumberS}</div>
            </div>
            
            {user.balanceSavings !== undefined && (
              <div className="flex flex-col self-center bg-blue-100 shadow-md rounded-md p-3 pr-6 pl-6 hover:rounded-md hover:scale-105 hover:break-normal ease-in-out duration-300">
              <div className="flex justify-center font-bold text-3xl">Savings Account Balance</div>
              <div className="flex justify-center font-semibold text-slate-800 text-xl lining-nums">&#x20B1;{balances.savings}</div>
              </div>
            )}

            <div className="flex flex-col self-center bg-blue-100 shadow-md rounded-md p-3 hover:rounded-md hover:scale-105 hover:break-normal ease-in-out duration-300">
              <div className="flex justify-center font-bold text-3xl">Checking Account Number</div> 
              <div className="flex justify-center text-3xl">{user.bankNumberC || "N/A"}</div>
            </div>
              
            {user.balanceChecking !== undefined && (
              <div className="flex flex-col self-center bg-blue-100 shadow-md rounded-md p-3 hover:rounded-md hover:scale-105 hover:break-normal ease-in-out duration-300">
              <h2 className="flex justify-center font-bold text-3xl">Checking Account Balance</h2>
              <div className="flex justify-center font-semibold text-slate-800 text-xl lining-nums">Under Construction</div>
              </div>
            )}
              <p className="flex italic text-sm">"Disclaimer: Your account balance is provided for
                 informational purposes only and may not reflect real-time 
                 transactions. We are not responsible for any discrepancies or 
                 errors in the displayed balance. Please refer to your bank statement or
                  contact customer support for the most accurate and up-to-date account information."
              </p>
            </div>

        )}
    </>
  );
};

export default AccountBalance;