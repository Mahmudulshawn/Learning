import React from 'react'

function Button({
    children,
    className="",
    ...props
}) {
  return (
    <button className={`bg-indigo-600 text-white shadow-lg rounded-lg p-2.5 hover:shadow-indigo-500 ${className}`} {...props}>
        {children}
    </button>
  )
}

export default Button