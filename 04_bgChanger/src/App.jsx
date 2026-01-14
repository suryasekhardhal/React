import { useState } from 'react'


function App() {
  const [color, setColor] = useState("red")

  return (
    <>
          <div className='w-full h-screen '
          style={{backgroundColor:color}}
          >
           <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
            <div className='flex flex-wrap justify-center gap-3 shadow-2xs px-3 py-2 rounded-2xl  bg-white'>
          <button onClick={()=> setColor("pink")} className='m-2 p-2 bg-pink-600 outline-none rounded-md'>Pink</button>
          <button onClick={()=> setColor("teal")} className='m-2 p-2 bg-teal-500 outline-none rounded-md'>Teal</button>
          <button onClick={()=> setColor("blue")} className='m-2 p-2 bg-blue-700 outline-none  rounded-md'>Blue</button>
          <button onClick={()=> setColor("green")} className='m-2 p-2 bg-green-600 outline-none rounded-md'>Green</button>
          <button onClick={()=> setColor("red")} className='m-2 p-2 bg-red-500 outline-none rounded-md'>Red</button>
          <button onClick={()=> setColor("purple")} className='m-2 p-2 bg-purple-600 outline-none rounded-md'>Purple</button>
          <button onClick={()=> setColor("yellow")} className='m-2 p-2 bg-yellow-500 outline-none rounded-md'>Yellow</button>
          <button onClick={()=> setColor("black")} className='m-2 p-2 bg-black text-white outline-none rounded-md'>Black</button>
            </div>
           </div>
        </div>        
    </>
  )
}

export default App
