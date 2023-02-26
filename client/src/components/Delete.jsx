

import React from 'react'

const Delete = (props) => {
    const handleDelete =  () =>{
       
          props.onDelete()
            }
  return (
    
    <div className='fixed w-full h-screen z-10 inset-0 grid place-items-center bg-slate-300/10 backdrop-blur-md'>
        <div className='bg-white p-6 w-full max-w-md grid place-items-center border'>
     <h2>Do you want to delete?</h2>
     <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded' onClick={handleDelete} >Delete</button>
     </div>
     
    </div>
    
  )
}

export default Delete
