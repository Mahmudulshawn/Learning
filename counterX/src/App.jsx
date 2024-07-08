import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  const addCount = () => {
    setCount(count + 1)
  }
  const removeCount = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  return (
    <div className='bg-[url("https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg")] bg-auto min-h-screen flex justify-center items-center'>
      <div className="container bg-transparent min-h-[40rem] w-[40rem] rounded-lg flex justify-center items-center backdrop-blur-md">

        <div className='items text-white'>
          <h1 className='text-5xl font-semibold my-8'>This is a counter</h1>
          <h2 className='text-3xl text-center'>count: {count}</h2>

          <div className='buttons text-center m-5'>
            <button
            onClick={addCount}
            className='bg-zinc-800 text-white rounded px-10 py-2'>Add</button>
            <button
            onClick={removeCount}
            className='bg-red-400 rounded px-10 py-2 ml-3'>Remove</button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default App
