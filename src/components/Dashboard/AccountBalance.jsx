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

  // Function to update the savings balance
  const updateSavingsBalance = (newBalance) => {
    setSavingsBalance(newBalance);
    updateBalances(newBalance, checkingBalance);
  };

  // Function to update the checking balance
  const updateCheckingBalance = (newBalance) => {
    setCheckingBalance(newBalance);
    updateBalances(savingsBalance, newBalance);
  };

  return (
    <>
      <div>
        {user && (
          <>
          <div className="flex flex-col bg-blue-100 rounded-md p-6 mt-10 max-w-xl mx-auto w-auto h-auto">
            <div className="flex flex-col justify-center">
              <div className="flex justify-center text-gray-700 font-bold text-3xl">Savings Account Number</div>
              <div className="flex justify-center text-3xl text">{user.bankNumberS}</div>
            </div>
              
            
            {user.balanceSavings !== undefined && (
              <div className="flex flex-col justify-center">
              <div className="flex justify-center text-gray-700 font-bold text-3xl">Savings Account Balance</div>
              <div className="flex justify-center font-semibold text-slate-800 text-xl lining-nums">&#x20B1;{balances.savings.toLocaleString()}</div>
              </div>
            )}

            <div className="flex flex-col justify-center">
              <div className="flex justify-center text-gray-700 font-bold text-3xl">Checking Account Number</div> 
              <div className="flex justify-center text-3xl text ">{user.bankNumberC || "N/A"}</div>
            </div>
              
            {user.balanceChecking !== undefined && (
              <div className="flex flex-col justify-center">
              <h2 className="flex justify-center text-gray-700 font-bold text-3xl">Checking Account Balance</h2>
              <div className="flex justify-center font-semibold text-slate-800 text-xl lining-nums">N/A Under Construction</div>
              </div>
            )}
           
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default AccountBalance;