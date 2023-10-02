import React, { useState, useEffect } from 'react';
import SuccessLandingPage from "../SuccessLandingPage";
import withdrawImage from '../ZFunctionalComponent/Icons/withdraw.png'


const FundTransfer = ({ user, updateBalances, balances, addTransactionToHistory, showAlert }) => {
  const [showSuccessPage, setShowSuccessPage] = useState(false);
  const [transactionHistory, setTransactionHistory] = useState(
    JSON.parse(localStorage.getItem('transactionHistory')) || []
  );
  const [senderAccount, setSenderAccount] = useState({
    accountType: '',
    bankNumber: '',
    balance: 0,
  });

  const [recipientAccount, setRecipientAccount] = useState('');
  const [amount, setAmount] = useState('');
  const [recipientInfo, setRecipientInfo] = useState(null);
  const [selectedAccount, setSelectedAccount] = useState('');

  useEffect(() => {
    setSenderAccount((prevSenderAccount) => ({
      ...prevSenderAccount,
      bankNumber: user ? (user.bankNumberS || '') : '',
      balance: user ? (user.balanceSavings || 0) : 0,
    }));
  }, [user]);


  const handleWithdraw = () => {
    const accounts = JSON.parse(localStorage.getItem('accounts')) || [];
    const senderAccount = accounts.find(account => account.bankNumberS === user.bankNumberS);

    if (!senderAccount) {
      console.log('Sender account not found.');
      return;
    }

    let senderBalance = parseFloat(senderAccount.balanceSavings);

    if (isNaN(senderBalance) || senderBalance < parseFloat(amount)) {
      senderBalance = parseFloat(senderAccount.balanceChecking);

      if (isNaN(senderBalance) || senderBalance < parseFloat(amount)) {
        console.log('Insufficient balance in both savings and checking accounts.');
        return;
      } else {
        senderAccount.accountType = 'Checking';
        senderAccount.balanceChecking = senderBalance - parseFloat(amount);
      }
    } else {
      senderAccount.accountType = 'Savings';
      senderAccount.balanceSavings = senderBalance - parseFloat(amount);
    }

    const now = new Date();
    const formattedDate = now.toLocaleDateString('en-CA', { year: 'numeric', month: '2-digit', day: '2-digit' });

    const transaction = {
      transactionNumber: Math.floor(1000 + Math.random() * 9000),
      date: formattedDate,
      amount: parseFloat(amount).toFixed(2),
      type: 'Withdrawal',
    };

    const updatedTransactionHistory = [...transactionHistory, transaction];
    setTransactionHistory(updatedTransactionHistory);
    localStorage.setItem('transactionHistory', JSON.stringify(updatedTransactionHistory));
    addTransactionToHistory(transaction, user.bankNumberS);
    localStorage.setItem('accounts', JSON.stringify(accounts));
    showAlert('Withdrawal Successful', 'success');
    updateBalances(
      parseFloat(senderAccount.balanceSavings).toFixed(2),
      parseFloat(senderAccount.balanceChecking).toFixed(2)
    );
    setShowSuccessPage(true);
  }

  const handleTransfer = () => {
    const accounts = JSON.parse(localStorage.getItem('accounts')) || [];
    const senderAccount = accounts.find((account) => account.bankNumberS === user.bankNumberS);
  
    if (!senderAccount) {
      console.log('Sender account not found.');
      return;
    }

    let senderBalance = parseFloat(senderAccount.balanceSavings);
  
    if (isNaN(senderBalance) || senderBalance < parseFloat(amount)) {
      senderBalance = parseFloat(senderAccount.balanceChecking);
  
      if (isNaN(senderBalance) || senderBalance < parseFloat(amount)) {
        console.log('Insufficient balance in both savings and checking accounts.');
        return;
      } else {
        senderAccount.accountType = 'Checking';
        senderAccount.balanceChecking = senderBalance - parseFloat(amount);
      }
    } else {
      senderAccount.accountType = 'Savings';
      senderAccount.balanceSavings = senderBalance - parseFloat(amount);
    }
  
    const recipientAcc = accounts.find((account) => account.bankNumberS === recipientAccount);
  
    if (!recipientAcc) {
      console.log('Recipient account not found.');
      return;
    }
    
    const now = new Date();
    const formattedDate = now.toLocaleDateString('en-CA', { year: 'numeric', month: '2-digit', day: '2-digit' });
    
    const transaction = {
      transactionNumber: Math.floor(1000 + Math.random() * 9000),
      date: formattedDate,
      amount: parseFloat(amount).toFixed(2),
      type: 'Fund Transfer',
    };
    
    
    const updatedTransactionHistory = [...transactionHistory, transaction];
    setTransactionHistory(updatedTransactionHistory);
    localStorage.setItem('transactionHistory', JSON.stringify(updatedTransactionHistory));
    addTransactionToHistory(transaction, user.bankNumberS, recipientAccount);
    recipientAcc.balanceSavings = parseFloat(recipientAcc.balanceSavings) + parseFloat(amount);
    localStorage.setItem('accounts', JSON.stringify(accounts));
    showAlert('Transfer Successful', 'success')
    updateBalances(
      parseFloat(senderAccount.balanceSavings).toFixed(2),
      parseFloat(senderAccount.balanceChecking).toFixed(2)
      );
    setShowSuccessPage(true)
  };
    
  const handleAccountValidation = () => {
    const accounts = JSON.parse(localStorage.getItem('accounts')) || [];
    const recipient = accounts.find((account) => account.bankNumberS === recipientAccount);
  
    if (recipient) {
      const lastDigit = parseInt(recipientAccount.slice(-1), 10);
      const accountType = lastDigit === 1 ? 'Savings' : 'Checking';
  
      setRecipientInfo({ ...recipient, accountType })
    } else {
      setRecipientInfo(null)
    }
  };

  const handleRecipientAccountBlur = () => {
    handleAccountValidation()
  };


  const handleAccountNumberInput = (e) => {
    setRecipientAccount(e.target.value)
    handleAccountValidation()
  };

  const handleAccountSelect = (e) => {
    const { value } = e.target;
  
    if (user) {
      let updatedAccount = {};
  
      if (value.toLowerCase() === 'savings' && user.bankNumberS) {
        updatedAccount = {
          accountType: 'Savings',
          bankNumber: user.bankNumberS || 'N/A',
          balance: user.balanceSavings || 0,
        };
      } else if (value.toLowerCase() === 'checking' && user.bankNumberC) {
        updatedAccount = {
          accountType: 'Checking',
          bankNumber: user.bankNumberC || 'N/A',
          balance: user.balanceChecking || 0,
        };
      } else {
        updatedAccount = {
          accountType: '',
          bankNumber: '',
          balance: 0,
        };
      }
  
      console.log('Updated Account:', updatedAccount);

      setSenderAccount(updatedAccount);
    }
  
    setSelectedAccount(value);
  };

  return (
    <>
    {showSuccessPage ? (
        <SuccessLandingPage user={user}/>
      ) : (
    <div className="h-full">
      <p className=" bg-blue-100 shadow-md rounded-md mt-2 mb-2 flex justify-center text-3xl font-bold">Fund Transfer or Withdraw</p>
      <div className="bg-blue-100 shadow-md rounded p-1 pl-2 mb-3 flex flex-col">
        <div className="block mb-2 text-m font-medium text-gray-900 dark:text-white h-full">Choose Account</div>
        <select className=" flex bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                    focus:ring-blue-500 focus:border-blue-500 w-auto p-2.5 dark:bg-gray-700
                     dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                      dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                      value={selectedAccount} onChange={handleAccountSelect}>
          <option value="">Select Account</option>
          {user && user.bankNumberS && <option value="savings">Savings Account</option>}
          {user && user.bankNumberC && <option value="checking">Checking Account</option>}
        </select>
        {selectedAccount && (
        <div className="mt-1">
          {senderAccount.bankNumber && (
            <>
              <h2 className="block text-gray-700 text-sm font-bold mb-2">
                Account Number: {senderAccount.bankNumber}
              </h2>
            </>
          )}
        </div>
      )}
      </div>


          <div className="bg-blue-100 shadow-md rounded p-2 mb-3 flex flex-row justify-around">
        <div className="flex flex-col">
          <div className="flex flex-row">
            <div className="justify-center content-center">
            <label className="text-m font-medium text-gray-900 dark:text-white text-sm mr-2" htmlFor="recipientAccount">Recipient Account Number:</label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
              focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 
              dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text"
              id="recipientAccount"
              placeholder="100-12345678-1"
              value={recipientAccount} 
              onBlur={handleRecipientAccountBlur}
              onChange={handleAccountNumberInput}
            />
            </div>
              <div className="justify-center content-center">
                <label className="text-m font-medium text-gray-900 dark:text-white text-sm ml-2 mr-2" htmlFor="amount">Amount:</label>
                <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                  focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 
                  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="&#x20B1;1,000"
                  type="number" 
                  id="amount" 
                  value={amount} 
                  onChange={(e) => setAmount(e.target.value)} /> 
              </div> 
          </div>
          <div className="flex flex-col">
          <div className="self-center underline underline-offset-4 text-m">Recipient Details</div>
            <div className="flex justify-between">
                <div className="flex justify-center">
                  <small className="pr-2">Type of Account:</small>
                  <small className="block text-gray-700 text-sm font-bold mb-2">
                    {recipientInfo ? recipientInfo.accountType : ''}
                  </small>
                </div>
                <div className="flex justify-center">
                  <small className="pr-2">Recipient Name</small>
                  <small className="block text-gray-700 text-sm font-bold mb-2">
                  {recipientInfo ? `${recipientInfo.lastName}, ${recipientInfo.firstName}` : ''}
                  </small>
             </div>
            </div>
          </div>
        </div>
    </div>
  

      

      <div className="flex justify-center">
        <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handleTransfer}>
          Transfer Funds
        </button>

        <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-2" onClick={handleWithdraw}>
          Withdraw
        </button>
      </div>

      <div>
  <ol className="list-decimal list-inside">
    <span className="font-bold text-md">Instructions</span>
    <li className="text-sm">For Fund Transfer:</li>
    <ul className="list-disc list-inside">
      <li className="text-xs">Ensure the "Recipient Account Number" input is filled and not blank.</li>
      <li className="text-xs">Specify the recipient's account number in the "Recipient Account Number" field.</li>
    </ul>
    <li className="mt-2 text-sm">For Withdrawal:</li>
    <ul className="list-disc list-inside">
      <li className="text-xs">Leave the "Recipient Account Number" input blank; it is not needed for withdrawals.</li>
      <li className="text-xs">Specify the amount to be withdrawn in the "Amount" field.</li>
    </ul>
  </ol>
  
</div>
<div className="italic mt-2 text-xs">
  Disclaimer: We are not responsible for any loss of funds due to incorrect transactions or unauthorized account access. Please ensure all transaction details are accurate before proceeding.
  </div>
    </div>
      )}
    </>
  );
};

export default FundTransfer;
