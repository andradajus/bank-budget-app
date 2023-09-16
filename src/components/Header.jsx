import React from 'react'

const AlertComponent = ({ message, type }) => {
  let alertClass = 'alert'

  if (type === 'success') {
    alertClass += ' bg-green-500'
  } else if (type === 'warning') {
    alertClass += ' bg-yellow-500'
  } else if (type === 'error') {
    alertClass += ' bg-red-500'
  }

  return (
    <div className={`fixed top-0 left-0 p-4 ${alertClass} text-white`}>
      {message}
    </div>
  )
}

export default AlertComponent