import React, { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom'

const SuccessLandingPage = () => {
  const [countdown, setCountdown] = useState(8);
  const navigate = useNavigate()

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

   
    setTimeout(() => {
      clearInterval(interval);
      navigate("/home/account-balance"); 
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
  <div className="bg-blue-100 pb-20 cursor-wait">
    <div className="text-center mt-20">
      <div className="mb-8 text-2xl font-bold">Transaction Successful</div>
      <div className="inline-block">
        <div
          className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"
        ></div>
      </div>
      <div className="mt-8">Redirecting in {countdown} seconds</div>
    </div>
  </div>
  );
};

export default SuccessLandingPage;