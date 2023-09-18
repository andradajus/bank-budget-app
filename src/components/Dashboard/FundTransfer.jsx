import React, { useState, useEffect } from 'react';

const FundTransfer = ({ user }) => {
  const [senderAccount, setSenderAccount] = useState({
    accountType: '',
    bankNumber: '',
    balance: 0,
  })

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



  const handleAccountValidation = () => {
    // Placeholder logic for recipient validation
    // Replace this with actual logic to fetch recipientInfo based on the account number
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
    // Validate recipient account when the recipient account number changes
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
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Transfer Funds
      </button>
    </>
  );
};

export default FundTransfer;
