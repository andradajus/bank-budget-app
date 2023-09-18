import React from 'react'
import SideBar from '../SideBar'
import { useNavigate } from 'react-router-dom'

const AccountBalance = ({ user,balances }) => {
  const navigate = useNavigate()

  return (
    <>
      <div>
        {user && (
          <>
            <h2 className="block text-gray-700 text-sm font-bold mb-2">
              Savings Account Number: {user.bankNumberS}
            </h2>
            {user.balanceSavings !== undefined && (
              <h2 className="block text-gray-700 text-sm font-bold mb-2">
                Savings Account Balance: &#x20B1;{balances.savings}
              </h2>
            )}
            <h2 className="block text-gray-700 text-sm font-bold mb-2">
              Checking Account Number: {user.bankNumberC}
            </h2>
            {user.balanceChecking !== undefined && (
              <h2 className="block text-gray-700 text-sm font-bold mb-2">
                Checking Account Balance: &#x20B1;{balances.checking}
              </h2>
            )}
          </>
        )}
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
        onClick={() => navigate('/home')}
      >
        Back
      </button>
    </>
  );
};

export default AccountBalance;