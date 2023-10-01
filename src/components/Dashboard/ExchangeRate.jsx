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
  //     <>
  //       <div className="col-span-7 row-span-2 col-start-2 row-start-5 mt-6">
  //         <div className="bg-gray-50 rounded-md shadow-md h-64">
  //           <span className="flex justify-center font-bold text-xl">Current Exchange Rate</span>
  //           <table className="table-auto w-full">
  //             <thead className="bg-blue-500 text-white">
  //               <tr>
  //                 <th className="p-1 text-center">Country</th>
  //                 <th className="p-1 text-center">Symbol</th>
  //                 <th className="p-1 text-center">Currency</th>
  //                 <th className="p-1 text-center">Peso Rate</th>
  //               </tr>
  //             </thead>
  //             <tbody>
  //                 <tr className="bg-gray-200 rounded-md shadow-md hover:rounded-md hover:scale-105 ease-in-out duration-300">
  //                   <td className="p-1 text-center"><span className="fi fi-us"></span></td>
  //                   <td className="p-1 text-center">&#x24;</td>
  //                   <td className="p-1 text-center">USD</td>
  //                   <td className="p-1 text-center">&#x20B1;{(1 / exchangeRates.USD.value).toFixed(2)}</td>
  //                 </tr>

  //                 <tr className="bg-gray-200 rounded-md shadow-md hover:rounded-md hover:scale-105 ease-in-out duration-300">
  //                   <td className="p-1 text-center"><span className="fi fi-eu"></span></td>
  //                   <td className="p-1 text-center">&#x20AC;</td>
  //                   <td className="p-1 text-center">EUR</td>
  //                   <td className="p-1 text-center">&#x20B1;{(1 / exchangeRates.EUR.value).toFixed(2)}</td>
  //                 </tr>

  //                 <tr className="bg-gray-200 rounded-md shadow-md hover:rounded-md hover:scale-105 ease-in-out duration-300">
  //                   <td className="p-1 text-center"><span className="fi fi-jp"></span></td>
  //                   <td className="p-1 text-center">&#xa5;</td>
  //                   <td className="p-1 text-center">JPY</td>
  //                   <td className="p-1 text-center">&#x20B1;{(1 / exchangeRates.JPY.value).toFixed(2)}</td>
  //                 </tr>

  //                 <tr className="bg-gray-200 rounded-md shadow-md hover:rounded-md hover:scale-105 ease-in-out duration-300">
  //                   <td className="p-1 text-center"><span className="fi fi-ca"></span></td>
  //                   <td className="p-1 text-center">&#x24;</td>
  //                   <td className="p-1 text-center">CAD</td>
  //                   <td className="p-1 text-center">&#x20B1;{(1 / exchangeRates.CAD.value).toFixed(2)}</td>
  //                 </tr>

  //                 <tr className="bg-gray-200 rounded-md shadow-md hover:rounded-md hover:scale-105 ease-in-out duration-300">
  //                   <td className="p-1 text-center"><span className="fi fi-kr"></span></td>
  //                   <td className="p-1 text-center">&#xFFE6;</td>
  //                   <td className="p-1 text-center">KRW</td>
  //                   <td className="p-1 text-center">&#x20B1;{(1 / exchangeRates.KRW.value).toFixed(2)}</td>
  //                 </tr>

  //                 <tr className="bg-gray-200 rounded-md shadow-md hover:rounded-md hover:scale-105 ease-in-out duration-300">
  //                   <td className="p-1 text-center"><span className="fi fi-cn"></span></td>
  //                   <td className="p-1 text-center">&#xFFE5;</td>
  //                   <td className="p-1 text-center">CNY</td>
  //                   <td className="p-1 text-center">&#x20B1;{(1 / exchangeRates.CNY.value).toFixed(2)}</td>
  //                 </tr>

  //             </tbody>
  //           </table>
  //         </div>
  //       </div>
  //     </>
  //   );
  // } else {
  //   return <div>Loading exchange rates...</div>;
  // }
  
  return (
    <>
        <div className="col-span-7 row-span-2 col-start-2 row-start-5 mt-6">
          <div className="bg-gray-50 rounded-md shadow-md h-64">
            <span className="flex justify-center font-bold text-xl">Current Exchange Rate</span>
            <table className="table-auto w-full">
              <thead className="bg-blue-500 text-white">
                <tr>
                  <th className="p-1 text-center">Country</th>
                  <th className="p-1 text-center">Symbol</th>
                  <th className="p-1 text-center">Currency</th>
                  <th className="p-1 text-center">Peso Rate</th>
                </tr>
              </thead>
              <tbody>
                  <tr className="bg-gray-200 rounded-md shadow-md hover:rounded-md hover:scale-105 ease-in-out duration-300">
                    <td className="p-1 text-center"><span className="fi fi-us"></span></td>
                    <td className="p-1 text-center">&#x24;</td>
                    <td className="p-1 text-center">USD</td>
                    <td className="p-1 text-center">&#x20B1;56.71</td>
                  </tr>

                  <tr className="bg-gray-200 rounded-md shadow-md hover:rounded-md hover:scale-105 ease-in-out duration-300">
                    <td className="p-1 text-center"><span className="fi fi-eu"></span></td>
                    <td className="p-1 text-center">&#x20AC;</td>
                    <td className="p-1 text-center">EUR</td>
                    <td className="p-1 text-center">&#x20B1;59.97</td>
                  </tr>

                  <tr className="bg-gray-200 rounded-md shadow-md hover:rounded-md hover:scale-105 ease-in-out duration-300">
                    <td className="p-1 text-center"><span className="fi fi-jp"></span></td>
                    <td className="p-1 text-center">&#xa5;</td>
                    <td className="p-1 text-center">JPY</td>
                    <td className="p-1 text-center">&#x20B1;0.38</td>
                  </tr>

                  <tr className="bg-gray-200 rounded-md shadow-md hover:rounded-md hover:scale-105 ease-in-out duration-300">
                    <td className="p-1 text-center"><span className="fi fi-ca"></span></td>
                    <td className="p-1 text-center">&#x24;</td>
                    <td className="p-1 text-center">CAD</td>
                    <td className="p-1 text-center">&#x20B1;41.77</td>
                  </tr>

                  <tr className="bg-gray-200 rounded-md shadow-md hover:rounded-md hover:scale-105 ease-in-out duration-300">
                    <td className="p-1 text-center"><span className="fi fi-kr"></span></td>
                    <td className="p-1 text-center">&#xFFE6;</td>
                    <td className="p-1 text-center">KRW</td>
                    <td className="p-1 text-center">&#x20B1;0.04</td>
                  </tr>

                  <tr className="bg-gray-200 rounded-md shadow-md hover:rounded-md hover:scale-105 ease-in-out duration-300">
                    <td className="p-1 text-center"><span className="fi fi-cn"></span></td>
                    <td className="p-1 text-center">&#xFFE5;</td>
                    <td className="p-1 text-center">CNY</td>
                    <td className="p-1 text-center">&#x20B1;7.74</td>
                  </tr>

              </tbody>
            </table>
          </div>
        </div>
      </>
  )
};

export default ExchangeRate;
