import React from 'react'

const AlertComponent = ({ message, type }) => {
  let alertClass = 'alert'

  if (type === 'success') {
    alertClass += ' bg-green-300'
  } else if (type === 'warning') {
    alertClass += ' bg-yellow-300'
  } else if (type === 'error') {
    alertClass += ' bg-red-300 '
  }

  return (
    <div className={`fixed top-0 left-1 ms-20 p-3 gap-2 w-80 flex justify-center opacity-60 m-3 font-semibold rounded-md ${alertClass} text-black `}>
      {message}
    </div>
  )
}

export default AlertComponent