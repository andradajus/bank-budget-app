import React, { useEffect, useState } from 'react';


const VirtualCard = ({ user }) => {
    const [cardNumber, setCardNumber] = useState('');
    const [cvv, setCVV] = useState('');
    const [expirationDate, setExpirationDate] = useState('');
    const [tempCardDetails, setTempCardDetails] = useState(null);
    

    useEffect(() => {
        const tempCardDetails = JSON.parse(localStorage.getItem('tempCardDetails'));
      
        if (tempCardDetails) {
          setCardNumber(tempCardDetails.cardNumber);
          setCVV(tempCardDetails.cvv);
          setExpirationDate(tempCardDetails.expirationDate);
        }
      }, []);

    const isSetTempCardDetailsTrue = () => {
        const tempCardDetails = JSON.parse(localStorage.getItem('tempCardDetails'));
      
        return !!tempCardDetails;
      };
    const tempCardCheck = isSetTempCardDetailsTrue()
   
    const generateRandomCardNumber = () => {
        const firstDigit = '5';
        const firstGroup = String(Math.floor(Math.random() * 1000)).padStart(3, '0');
        const remainingGroups = Array.from({ length: 3 }, () => {
          return String(Math.floor(Math.random() * 10000)).padStart(4, '0');
        });
        return `${firstDigit}${firstGroup} ${remainingGroups.join(' ')}`;
      };
  
    const generateRandomCVV = () => {
      return Math.floor(100 + Math.random() * 900);
    };
  
    const generateRandomExpirationDate = () => {
      const currentYear = new Date().getFullYear();
      const year = Math.floor(currentYear + Math.random() * 10); 
      const month = Math.floor(1 + Math.random() * 12); 
      return `${month < 10 ? '0' : ''}${month}/${year}`;
    };
  
    const handleGenerate = () => {
      const newCardNumber = generateRandomCardNumber();
      const newCVV = generateRandomCVV();
      const newExpirationDate = generateRandomExpirationDate();
  
      setCardNumber(newCardNumber);
      setCVV(newCVV.toString());
      setExpirationDate(newExpirationDate);

      localStorage.setItem('tempCardDetails', JSON.stringify({
        cardNumber: newCardNumber,
        cvv: newCVV.toString(),
        expirationDate: newExpirationDate
      }));
    };

  return (
    
    
<div className="bg-white flex flex-col justify-center items-center">
    <p className="text-2xl font-bold mt-2 mb-4">Temporary Virtual Card</p>
        <div className="space-y-16">
            <div className="w-96 h-56 m-auto bg-red-100 rounded-xl relative text-white shadow-2xl transition-transform transform hover:scale-110 duration-300 ease-in-out">
            
                <img className="relative object-cover w-full h-full rounded-xl" src="https://i.imgur.com/kGkSg1v.png" />
                
                <div className="w-full px-8 absolute top-8">
                    <div className="flex justify-between">
                        <div className="">
                            <p className="font-bold">
                                Name
                            </p>
                            <p cclassName="font-medium tracking-widest">
                            {user.firstName} {user.lastName}
                            </p>
                        </div>
                        <img className="w-14 h-14" src="https://i.imgur.com/bbPHJVe.png"/>
                    </div>
                    <div className="pt-1">
                        <p className="font-bold">
                            Card Number
                        </p>
                        <p className="font-medium tracking-more-wider">
                            {cardNumber}
                        </p>
                    </div>
                    <div className="pt-6 pr-6">
                        <div className="flex justify-between">
                            <div className="">
                                <p className="font-light text-xs">
                                    
                                </p>
                                <p className="font-medium tracking-wider text-sm">
                                    
                                </p>
                            </div>
                            <div className="">
                                <p className="font-bold text-xs">
                                    Expiry
                                </p>
                                <p className="font-medium tracking-wider text-sm">
                                    {expirationDate}
                                </p>
                            </div>
    
                            <div className="">
                                <p className="font-bold text-xs">
                                    CVV
                                </p>
                                <p className="font-bold tracking-more-wider text-sm opacity-0 hover:opacity-100">
                                    {cvv}
                                </p>
                            </div>
                        </div>
                    </div>
    
                </div>
            </div>
            </div>

                {isSetTempCardDetailsTrue() ? (
                    <button className="bg-gray-300 cursor-not-allowed py-2 px-4 rounded mt-5">
                        Generate Card
                    </button>
                ) : (
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5" onClick={handleGenerate}>
                        Generate Card
                    </button>
                )}
            <ul className="mt-7">
            <span className="font-bold">Note:</span>
            <li className="italic text-sm">
       Hover on the CVV area to show CVV number
    </li>
            <li className="italic text-sm">
            This virtual card is exclusively valid for a single transaction and 
            the current session. If you need details for another transaction, 
            kindly generate a new set of virtual card details.
            </li>
            <li className="italic text-sm">
        Please ensure to securely store your card details for the transaction and do not share them with anyone.
    </li>
    
    <li className="italic text-sm">
        Do not use this virtual card for recurring or future payments. Generate a new one for each transaction.
    </li>
    <li className="italic text-sm">
        This virtual card is for online transactions only and may not work for in-person or certain types of transactions.
    </li>
            </ul>
        </div>
  );
};

export default VirtualCard;