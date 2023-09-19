import { useState } from 'react'
import balanceImage from './ZFunctionalComponent/Icons/balance.png'
import billsImage from './ZFunctionalComponent/Icons/billspayment.png'
import depositImage from './ZFunctionalComponent/Icons/deposit.png'
import enrollImage from './ZFunctionalComponent/Icons/enrollaccount.png'
import withdrawImage from './ZFunctionalComponent/Icons/withdraw.png'
import historyImage from './ZFunctionalComponent/Icons/transhistory.png'
import logoutImage from './ZFunctionalComponent/Icons/logout.png'
import { Link, useNavigate } from 'react-router-dom'


const SideBar = () => {
  const navigate = useNavigate()
  const [currentUser, setCurrentUser] = useState('')

  const handleLogout = () => {
    setCurrentUser('')
    navigate('/login')
  }
  
  return (
  <>
  <div className="fixed top-0 left-0 h-screen w-20 m-0 flex flex-col bg-gradient-to-l from-blue-800 via-blue-900 to-blue-800  text-white shadow-2xl rounded ">
  <div className="flex flex-col">
  <SideBarLink icon={balanceImage} text="Bank Details" to="/home/account-balance"/>
  <SideBarLink icon={historyImage} text="Transaction History" to="/home/transaction-history"/>
  <SideBarLink icon={depositImage} text="Add Funds or Deposit" to="/home/add-funds"/>
  <SideBarLink icon={withdrawImage} text="Send or Withdraw" to="/home/fund-transfer"/>
  <SideBarLink icon={billsImage} text="Bills Payment" to="/home/bills-payment"/>
  <SideBarLink icon={enrollImage} text="Enroll Account" to="/home/enroll-account"/>
  <SideBarLink icon={logoutImage} text="Logout" to="/login" onClick={handleLogout} className="self-end"/>
  </div>
  </div>
  
  </>
    )
}


const SideBarLink = ({icon, text, to}) => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false)

  return (
      <div 
      className="sidebar-icon relative"
      onMouseEnter={() => setIsTooltipVisible(true)}
      onMouseLeave={() => setIsTooltipVisible(false)}
      >
    <Link to={to}>
      
      <img
      className="relative flex items-center justify-center h-12 w-12 mt-2 mb-2 mx-auto shadow-lg
      bg-gradient-to-l from-blue-200 via-blue-100 to-blue-300 text-green-500 hover:bg-transparent hover:text-white
       rounded-3xl hover:rounded-md transition-all duration-300 ease-linear cursor-pointer hover:scale-110 object-cover"
      src={icon}
    />
    </Link>

    {isTooltipVisible && (
        <div className="absolute left-16 top-4 p-2 min-w-max rounded-md shadow-md text-white bg-blue-500 text-xs font-bold transition-all duration-100">
          {text}
        </div>
      )}
    </div>
  )
}
 

export default SideBar
