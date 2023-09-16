import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from "react"
import balanceImage from './ZFunctionalComponent/Icons/balance.png'
import billsImage from './ZFunctionalComponent/Icons/billspayment.png'
import depositImage from './ZFunctionalComponent/Icons/deposit.png'
import enrollImage from './ZFunctionalComponent/Icons/enrollaccount.png'
import withdrawImage from './ZFunctionalComponent/Icons/withdraw.png'
import historyImage from './ZFunctionalComponent/Icons/transhistory.png'

    const Dashboard = (props) => {
        const { user } = props
        const navigate = useNavigate()
        const [savingsAccountNumber, setSavingsAccountNumber] = useState(user?.bankNumberS || '');
        const [checkingAccountNumber, setCheckingAccountNumber] = useState(user?.bankNumberC || '');

        const handleAccountBalanceClick = () => {
          navigate('/account-balance');
        };
      
        const handleEnrollAccountClick = () => {
          navigate('/enroll-account', {
            state: { user },
            callback: (newAccountNumbers) => {
              setSavingsAccountNumber(newAccountNumbers.bankNumberS);
              setCheckingAccountNumber(newAccountNumbers.bankNumberC);
            },
          });
        };
      
        useEffect(() => {
          if (!user) {
            navigate('/login');
          }
        }, [navigate, user]);
        
     return (
    <>
   <div className="">Welcome {user?.firstName}!</div>
    <h2 className="block text-gray-700 text-sm font-bold mb-2">Savings Account Number: {savingsAccountNumber}</h2>
    <h2 className="block text-gray-700 text-sm font-bold mb-2">Checking Account Number: {checkingAccountNumber}</h2>
   <div className="grid grid-rows-3 grid-flow-col gap-4">
   <div className="flex justify-center flex-col items-center hover:scale-125 transition duration-500 cursor-pointer" onClick={handleAccountBalanceClick}><img className="w-20 " src={balanceImage} alt="Account Balance" />Account Balance</div>
   <div className="flex justify-center flex-col items-center hover:scale-125 transition duration-500 cursor-pointer"><img className="w-20" src={historyImage} alt="Transaction History" />Transaction History</div>
   <div className="flex justify-center flex-col items-center hover:scale-125 transition duration-500 cursor-pointer"><img className="w-20" src={depositImage} alt="Add Funds or Deposit" />Add Funds</div>
   <div className="flex justify-center flex-col items-center hover:scale-125 transition duration-500 cursor-pointer"><img className="w-20" src={withdrawImage} alt="Send or Withdraw" />Send or Withdraw</div>
   <div className="flex justify-center flex-col items-center hover:scale-125 transition duration-500 cursor-pointer"><img className="w-20" src={billsImage} alt="Bills Payment" />Bills Payment</div>
   <div className="flex justify-center flex-col items-center hover:scale-125 transition duration-500 cursor-pointer" onClick={handleEnrollAccountClick}><img className="w-20" src={enrollImage} alt="Enroll Account" />Enroll Account</div>
   </div>
   </>
    )
}

export default Dashboard