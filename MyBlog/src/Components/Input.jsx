import React from 'react'

function Input({
  placeholder="Enter a placeholder...",
  type = 'text',
  className = '',
  ...props
}) {
  return (
      <input 
      type={`${type}`}
      placeholder={`${placeholder}`}
      className={`bg-gray-100 text-black h-[3rem] w-[25rem] p-2 m-5 outline-black/50 border border-black/10 rounded-lg ${className}`}
      {...props}
      />
  )
}

export default Input