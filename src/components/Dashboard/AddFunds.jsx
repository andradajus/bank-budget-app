import React, { useState } from "react";

const AddFunds = ({ addTransactionToHistory }) => {
  const [amount, setAmount] = useState(0);

  const handleAddFunds = (increment) => {
    setAmount(amount + increment);
  };

  const handleClear = () => {
    setAmount(0);
  };

  return (
    <>
      <form className="flex justify-center mt-5 ml-1 ">
        <div>
            <div className="flex flex-col">
              <div className="flex flex-col bg-blue-100 rounded-md">
                <div className="flex justify-center mb-2 text-m font-medium text-gray-900 dark:text-white">Choose an Amount</div>
                <div className="flex justify-around">
                  <ButtonClass text="1" onClick={() => handleAddFunds(1)} />
                  <ButtonClass text="5" onClick={() => handleAddFunds(5)} />
                  <ButtonClass text="10" onClick={() => handleAddFunds(10)} />
                  <ButtonClass text="20" onClick={() => handleAddFunds(20)} />
                </div>

                <div className="flex justify-around">
                  <ButtonClass text="50" onClick={() => handleAddFunds(50)} />
                  <ButtonClass text="100" onClick={() => handleAddFunds(100)} />
                  <ButtonClass text="500" onClick={() => handleAddFunds(500)} />
                  <ButtonClass text="1000" onClick={() => handleAddFunds(1000)} />
                </div>

                <div className="flex justify-around">
                  <ButtonClass text="3000" onClick={() => handleAddFunds(5000)} />  
                  <ButtonClass text="5000" onClick={() => handleAddFunds(5000)} />
                  <ButtonClass text="10000" onClick={() => handleAddFunds(10000)} />
                  <ButtonClass text="50000" onClick={() => handleAddFunds(50000)} />
                </div>

                <div className="flex justify-around">
                  <ButtonClass text="100000" onClick={() => handleAddFunds(100000)} />
                  <ButtonClass text="500000" onClick={() => handleAddFunds(5000000)} />
                  <ButtonClass text="1000000" onClick={() => handleAddFunds(1000000)} />
                  <span 
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 
                  rounded cursor-pointer mx-3 my-1 h-10 w-20 flex justify-center" 
                  onClick={handleClear}>Clear</span>
                </div>
              </div>
            </div>

          
            <div className="flex flex-col justify-center bg-blue-100 rounded-md mt-2 p-3">
                <div className="flex justify-center font-semibold text-white text-2xl lining-nums bg-blue-900">&#x20B1;{amount}</div>
            </div>

            <div className="flex justify-center">
              <button className="flex justify-center bg-blue-500 hover:bg-blue-700 rounded-md text-white font-bold py-2 px-4 mt-2 " type="button" onClick={() => addTransactionToHistory(amount)}>
              Add Funds
              </button>
            </div>
          </div>
      </form>
    </>
  );
};

const ButtonClass = ({text, onClick}) => {
  const formatWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  const formattedText = formatWithCommas(text);
  return (
      <span
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 
      rounded cursor-pointer mx-3 my-1 h-10 w-20 flex justify-center"
      onClick={onClick}
    >
    {formattedText}
    </span>
  )
}

export default AddFunds;