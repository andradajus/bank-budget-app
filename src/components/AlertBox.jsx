import React from 'react'
import { Alert } from "@material-tailwind/react";

const AlertComponent = ({ message, type }) => {
  let alertColor = ""

  if (type === 'success') {
    alertColor += 'green'
  } else if (type === 'warning') {
    alertColor += 'amber'
  } else if (type === 'error') {
    alertColor += 'red'
  } else if (type === 'info') {
    alertColor += 'blue'
  } 

  console.log('Alert Color:', alertColor);

  return (
    <div className="flex w-full flex-col">
      <Alert color={`${alertColor}`} className="font-medium fixed top-0 left-1 ms-20 mt-2 w-auto">
      {message} </Alert>
    </div>

  )
}

export default AlertComponent