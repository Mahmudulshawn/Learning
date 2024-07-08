import React from "react"


function Navbar(){
return (
    <div className='navbar flex justify-between p-[1rem] bg-teal-500'>
      <div className="logo">Logo</div>
      <ul className="links flex justify-evenly gap-12">
            <li className="link">Home</li>
            <li className="link">About</li>
            <li className="link">Product</li>
            <li className="link">Contact</li>
      </ul>
    </div>
  )
}
  
export default Navbar