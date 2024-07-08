import { useCallback, useEffect, useRef, useState } from 'react'



function App() {
  const [length, setLength] = useState(6)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')

  const generatePassword = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    
    if(numAllowed) str+="0123456789"
    if(charAllowed) str+="!@#$%^&*()_+-"

    for(let i=0; i<length; i++){
      const char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  },[length, numAllowed, charAllowed])

  useEffect(()=>{
    generatePassword()
  }, [length, numAllowed, charAllowed])

  
  const copyPasswordToClipBoard = ()=>{
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select()
    alert('Password Copied to Clipboard!')
  }

  const passwordRef = useRef(null)



  return (
    <div 
    className='bg-[url("https://content.cloudthat.com/resources/wp-content/uploads/2023/05/Password_Banner.png")] bg-cover h-screen w-screen flex justify-center items-center'
    >
      <div className='container h-[40rem] w-[45rem] rounded-3xl bg-transparent backdrop-blur-lg text-orange-600 p-[5rem]'>
        <div className='flex justify-center items-center text-3xl my-[5rem] text-white'>
          <h1>Password Generator</h1>
        </div>

        <div className='flex justify-center'>
          <input 
          type="text"
          value = {password}
          className='outline-none w-full p-5 py-2 rounded-sm'
          placeholder='password'
          ref={passwordRef}
          readOnly
          name="" 
          id="" 
          />
          <button
           onClick={copyPasswordToClipBoard}
           className='outline-none bg-blue-600 text-white p-5 py-2 rounded-sm'>
            copy
          </button>
        </div>

        <div className='flex text-sm justify-center items-center p-10 gap-x-2 my-5'>
          <div className='flex items-center gap-x-1'>
            <input type="range"
            min={6}
            max={20}
            value={length}
            className='cursor-pointer'
            onChange={(e)=> setLength(e.target.value)}
            name=""
            id=""
            />
            <label htmlFor="length">Length: {length}</label>
          </div>
          
          <div className='flex items-center gap-x-1'>
            <input
            type="checkbox"
            defaultChecked ={numAllowed}
            onChange={()=> {
              setNumAllowed((prev)=>!prev)
            }}
            name=""
            id=""
            />
            <label htmlFor="number">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
            type="checkbox"
            defaultChecked = {charAllowed}
            onChange={()=>{
              setCharAllowed((prev)=>!prev)
            }}
            name=""
            id="" />
            <label htmlFor="character">Characters</label>
          </div>
        </div>
      </div> 
    </div>
  )
}

export default App
