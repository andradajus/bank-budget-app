import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from "react"
import SideBar from './SideBar'
import { Routes, Route } from 'react-router-dom'
import AccountBalance from './Dashboard/AccountBalance'
import EnrollAccount from './Dashboard/EnrollAccount'

    const Dashboard = (props) => {
        const { user } = props
        const navigate = useNavigate()
        const [savingsAccountNumber, setSavingsAccountNumber] = useState(user?.bankNumberS || '')
        const [checkingAccountNumber, setCheckingAccountNumber] = useState(user?.bankNumberC || '')

        const handleAccountBalanceClick = () => {
          navigate('/home/account-balance')
        }
      
        const handleEnrollAccountClick = () => {
          navigate('/home/enroll-account', {
            state: { user },
            callback: (newAccountNumbers) => {
              setSavingsAccountNumber(newAccountNumbers.bankNumberS)
              setCheckingAccountNumber(newAccountNumbers.bankNumberC)
            },
          })
        }
      
        useEffect(() => {
          if (!user) {
            navigate('/login')
          }
        }, [navigate, user])
        
        return (
          <div className="grid grid-cols-5 h-screen">
            <SideBar />
            <div className="col-span-2 p-4">
              <div className="bg-white p-4 mb-4 rounded">
                <div className="text-2xl">Welcome, <span className="font-bold">{user?.firstName}</span>!</div>
              </div>
              <div className="bg-blue-700 text-white p-4 rounded">
            <Routes>
              <Route path="/account-balance" element={<AccountBalance user={user} />} />
              <Route path="/enroll-account" element={<EnrollAccount user={user} />} />
            </Routes>
              </div>
            </div>
            <div className="col-span-2 p-4">
              {/* Main frame content */}
            </div>
          </div>
        );
      };

export default Dashboard