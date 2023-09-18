import React, { useState, useEffect } from 'react';

const FundTransfer = ({ user, updateBalances, balances }) => {
  const [senderAccount, setSenderAccount] = useState({
    accountType: '',
    bankNumber: '',
    balance: 0,
  });

  const [recipientAccount, setRecipientAccount] = useState('');
  const [amount, setAmount] = useState('');
  const [recipientInfo, setRecipientInfo] = useState(null);
  const [selectedAccount, setSelectedAccount] = useState('');
  const [transactionHistory, setTransactionHistory] = useState([]);

  useEffect(() => {
    setSenderAccount((prevSenderAccount) => ({
      ...prevSenderAccount,
      bankNumber: user ? (user.bankNumberS || '') : '',
      balance: user ? (user.balanceSavings || 0) : 0,
    }));
  }, [user]);

  const handleTransfer = () => {
    const accounts = JSON.parse(localStorage.getItem('accounts')) || []
    const senderAccount = accounts.find((account) => account.username === user.username)
    const transactionNumber = Math.floor(1000 + Math.random() * 9000)

    if (!senderAccount) {
      console.log('Sender account not found.');
      return;
    }

    let senderBalance = parseFloat(senderAccount.balanceSavings)

    if (isNaN(senderBalance) || senderBalance < parseFloat(amount)) {
      senderBalance = parseFloat(senderAccount.balanceChecking)

      if (isNaN(senderBalance) || senderBalance < parseFloat(amount)) {
        console.log('Insufficient balance in both savings and checking accounts.')
        return;
      } else {
        senderAccount.accountType = 'Checking';
        senderAccount.balanceChecking = (senderBalance - parseFloat(amount)).toFixed(2);
      }
    } else {
      senderAccount.accountType = 'Savings';
      senderAccount.balanceSavings = (senderBalance - parseFloat(amount)).toFixed(2)
    }

    const recipientAcc = accounts.find((account) => account.bankNumberS === recipientAccount)

    if (!recipientAcc) {
      console.log('Recipient account not found.')
      return;
    }

    recipientAcc.balanceSavings = (parseFloat(recipientAcc.balanceSavings) + parseFloat(amount)).toFixed(2);

    localStorage.setItem('accounts', JSON.stringify(accounts));

    console.log(`Transferred ${amount} from ${senderAccount.accountType} account (${senderAccount.bankNumber}) to ${recipientAcc.bankNumberS}.`);

    updateBalances(
      parseFloat(senderAccount.balanceSavings).toFixed(2),
      parseFloat(senderAccount.balanceChecking).toFixed(2)
    );

    const transaction = {
      date: new Date().toLocaleString(),
      amount: parseFloat(amount).toFixed(2),
      type: `Transfer to ${recipientInfo.accountType} account (${recipientAcc.bankNumberS})`,
      transactionNumber: transactionNumber
    };
    setTransactionHistory([...transactionHistory, transaction]);
  };
    
  const handleAccountValidation = () => {
    const accounts = JSON.parse(localStorage.getItem('accounts')) || [];
    const recipient = accounts.find((account) => account.bankNumberS === recipientAccount);
  
    if (recipient) {
      const lastDigit = parseInt(recipientAccount.slice(-1), 10);
      const accountType = lastDigit === 1 ? 'Savings' : 'Checking';
  
      setRecipientInfo({ ...recipient, accountType });
    } else {
      setRecipientInfo(null);
    }
  };

  const handleRecipientAccountBlur = () => {
    handleAccountValidation();
  };


  const handleAccountNumberInput = (e) => {
    setRecipientAccount(e.target.value);
    handleAccountValidation();
  };

  const handleAccountSelect = (e) => {
    const { value } = e.target;

    if (user) {
      if (value === 'savings' && user.bankNumberS) {
        setSenderAccount((prevSenderAccount) => ({
          ...prevSenderAccount,
          accountType: 'Savings',
          bankNumber: user.bankNumberS || 'N/A',
          balance: user.balanceSavings || 0,
        }));
      } else if (value === 'checking' && user.bankNumberC) {
        setSenderAccount((prevSenderAccount) => ({
          ...prevSenderAccount,
          accountType: 'Checking',
          bankNumber: user.bankNumberC || 'N/A',
          balance: user.balanceChecking || 0,
        }));
      } else {
        setSenderAccount({
          accountType: '',
          bankNumber: '',
          balance: 0,
        });
      }
    }

    setSelectedAccount(value);
  };

  return (
    <>
      <div>
        Transfer from:
        <select value={selectedAccount} onChange={handleAccountSelect}>
          <option value="">Select Account</option>
          {user && user.bankNumberS && <option value="savings">Savings Account</option>}
          {user && user.bankNumberC && <option value="checking">Checking Account</option>}
        </select>
      </div>

      {selectedAccount && (
        <div>
          {senderAccount.bankNumber && (
            <>
              <h2 className="block text-gray-700 text-sm font-bold mb-2">
                Account Number: {senderAccount.bankNumber}
              </h2>
            </>
          )}
        </div>
      )}

      <div>
        <label htmlFor="recipientAccount">Recipient Account Number:</label>
        <input
          type="text"
          id="recipientAccount"
          value={recipientAccount} 
          onBlur={handleRecipientAccountBlur}
          onChange={handleAccountNumberInput}
        />
      </div>

      <label htmlFor="amount">Amount:</label>
      <input type="number" id="amount" value={amount} onChange={(e) => setAmount(e.target.value)} />

      <div>Type of Account: {recipientInfo ? recipientInfo.accountType : ''}</div>
      <div>Recipient Name: {recipientInfo ? `${recipientInfo.lastName}, ${recipientInfo.firstName}` : ''}</div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handleTransfer}>
        Transfer Funds
      </button>
      <div>
        <h2>Transaction History</h2>
        <ul>
          {transactionHistory.map((transaction, index) => (
            <li key={index}>
              Number: {transaction.transactionNumber} Date: {transaction.date}, Amount: {transaction.amount}, Type: {transaction.type} 
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default FundTransfer;
