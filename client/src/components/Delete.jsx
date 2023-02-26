

import React from 'react'

const Delete = () => {
  return (
    <div className=' bg-slate-200 absolute w-full h-screen z-10 inset-0'>
     <h2>Are you sure to delete?</h2>
     <button className='bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed'>Delete</button>
    </div>
  )
}

export default Delete
