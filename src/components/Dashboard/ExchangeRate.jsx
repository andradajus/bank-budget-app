import React, { useState, useEffect } from "react";
import axios from "axios";

const ExchangeRate = () => {
  const [exchangeRates, setExchangeRates] = useState(null);

  // useEffect(() => {
  //   const url =
  //     "https://api.currencyapi.com/v3/latest?apikey=cur_live_jzU3heFU8GXEqUkHLKmaCzHpiwArvBzvjyR2y9Ud&currencies=USD%2CEUR%2CJPY%2CCAD%2CKRW%2CCNY%2CHKD%2CSGD&base_currency=PHP";

  //   axios
  //     .get(url)
  //     .then((response) => {
  //       if (response.data.data) {
  //         setExchangeRates(response.data.data);
  //       } else {
  //         console.error("Error fetching exchange rates.");
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching exchange rates:", error);
  //     });
  // }, []);

  // if (exchangeRates !== null) {
  //   return (
  //     <div>
  //       <h1>Exchange Rates</h1>
  //       <h2>PHP</h2>
  //       <ul>
  //         <li>USD: {(1 / exchangeRates.USD.value).toFixed(2)}</li>
  //         <li>EUR: {(1 / exchangeRates.EUR.value).toFixed(2)}</li>
  //         <li>JPY: {(1 / exchangeRates.JPY.value).toFixed(2)}</li>
  //         <li>CAD: {(1 / exchangeRates.CAD.value).toFixed(2)}</li>
  //         <li>KRW: {(1 / exchangeRates.KRW.value).toFixed(2)}</li>
  //         <li>CNY: {(1 / exchangeRates.CNY.value).toFixed(2)}</li>
  //         <li>HKD: {(1 / exchangeRates.HKD.value).toFixed(2)}</li>
  //         <li>SGD: {(1 / exchangeRates.SGD.value).toFixed(2)}</li>
  //       </ul>
  //     </div>
  //   );
  // } else {
  //   return <div>Loading exchange rates...</div>;
  // }
};

export default ExchangeRate;
