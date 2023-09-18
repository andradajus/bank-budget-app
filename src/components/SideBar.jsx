import { useState } from 'react'
import balanceImage from './ZFunctionalComponent/Icons/balance.png'
import billsImage from './ZFunctionalComponent/Icons/billspayment.png'
import depositImage from './ZFunctionalComponent/Icons/deposit.png'
import enrollImage from './ZFunctionalComponent/Icons/enrollaccount.png'
import withdrawImage from './ZFunctionalComponent/Icons/withdraw.png'
import historyImage from './ZFunctionalComponent/Icons/transhistory.png'
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
  <div className="fixed top-0 left-0 h-screen w-20 m-0 flex flex-col bg-gray-900 text-white shadow-md ">
  <SideBarLink icon={balanceImage} text="Account Balance" to="/home/account-balance"/>
  <SideBarLink icon={historyImage} text="Transaction History" to="/home/transaction-history"/>
  <SideBarLink icon={depositImage} text="Add Funds or Deposit" to="/home/add-funds"/>
  <SideBarLink icon={withdrawImage} text="Send or Withdraw" to="/home/fund-transfer"/>
  <SideBarLink icon={billsImage} text="Bills Payment" to="/home/bills-payment"/>
  <SideBarLink icon={enrollImage} text="Enroll Account" to="/home/enroll-account"/>
  <button className=" bg-red-500 hover:bg-red-600 text-white font-bold py-2 
  px-4 rounded focus:outline-none focus:shadow-outline" onClick={handleLogout}>
  Logout
  </button>
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
       bg-gray-800 text-green-500 hover:bg-green-600 hover:text-white
       rounded-3xl hover:rounded-xl transition-all duration-300 ease-linear cursor-pointer hover:scale-110 object-cover"
      src={icon}
    />
    </Link>

    {isTooltipVisible && (
        <div className="absolute left-16 top-0 p-2 min-w-max rounded-md shadow-md text-white bg-gray-900 text-xs font-bold transition-all duration-100">
          {text}
        </div>
      )}
    </div>
  )
}
 

export default SideBar
