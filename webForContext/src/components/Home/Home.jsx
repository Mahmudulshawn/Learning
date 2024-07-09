import React from 'react'

function Home() {
  return (
    <div className='bg-[var(--bg)] h-[100vh] flex justify-center items-center'>
        <div className='container bg-[var(--card)] h-[30rem] w-[30rem] rounded-2xl flex justify-center items-center'>
            <h1 className='text-3xl text-[var(--text)] '>This is the home page</h1>
        </div>
    </div>
  )
}

export default Home