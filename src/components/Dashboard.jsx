import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from "react"
import SideBar from './SideBar'
import { Routes, Route } from 'react-router-dom'
import AccountBalance from './Dashboard/AccountBalance'
import EnrollAccount from './Dashboard/EnrollAccount'
import FundTransfer from './Dashboard/FundTransfer'
import AlertComponent from './AlertBox.jsx'

    const Dashboard = ({user, accountInfo}) => {
        const navigate = useNavigate()
      
        useEffect(() => {
          if (!user) {
            navigate('/login')
          }
        }, [navigate, user])

      const combinedBalance = () => {
        if (user && user.balanceSavings && user.balanceChecking) {
          return user.balanceSavings + user.balanceChecking
        }
        return 0
      }

  return (
  <>
  <SideBar />
  {alert && <AlertComponent message={alert.message} type={alert.type} />}
  <div className="bg-rose-600 h-screen w-screen">
    <div className="grid grid-cols-5 grid-rows-5 gap-2">
          <div className="bg-amber-300 row-span-5 col-span-1 h-auto">1</div>
              <div className="bg-blue-700 col-span-3 h-auto ">
                <div className="flex text-3xl gap-2 p-3 flex-col">
                  <div className="flex flex-row place-content-around bg-indigo-300">
                      <div>
                          <div className="bg-lime-300">Welcome,</div> 
                          <div className="bg-emerald-600">{user?.firstName}!</div>
                      </div>
                    <div className="flex self-center bg-emerald-500">&#x20B1;{combinedBalance().toFixed(2)}</div>
                  </div>
              </div>
            </div>
          <div className="bg-orange-500 col-span-3 row-span-3 col-start-2 row-start-2 h-auto">
              <Routes>
                <Route path="/account-balance" element={<AccountBalance user={user} accountInfo={accountInfo} />} />
                <Route path="/enroll-account" element={<EnrollAccount user={user} />} />
                <Route path="/fund-transfer" element={<FundTransfer user={user} accountInfo={accountInfo} />} />
             </Routes>
          </div>
          <div className="bg-cyan-300 col-span-3 col-start-2 row-start-5 h-auto">4</div>
          <div className="bg-green-300 row-span-5 col-start-5 row-start-1 h-auto">5</div>
    </div>
  </div>
  </>
  )
}

export default Dashboard