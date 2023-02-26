import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
function UserData(props) {
    const [isEditMode, setisEditMode] = useState(false)
    const [userName, setuserName] = useState(props.username)
   function toggleEditmode(){
    setisEditMode(isEditMode => !isEditMode)
   }
   const handleSubmit = async () =>{
 const payload = {username:userName}
   try{
  const {data} = await axios.patch(`api/v1/users/${props.id}`, payload)
  const {user} =data
  setuserName(user.username)
 
  setisEditMode(false)
//   console.log(data);
   }catch(err){
    console.log(err);
   }
   }
    const handleDelete = async () =>{
try {
    //  await axios.delete(`api/v1/users/${props.id}`) 
    props.onDelete(props.id)
} catch (error) {
    console.log(err);
} 
    }
   
  return (
    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
               { props.id.slice(0,6)}
                </th>
                <td class="capitalize px-6 py-4">
                {isEditMode? <input 
                  type="text" 
                  name="username"
                  onChange={(e) => setuserName(e.target.value)}
                  value={userName}
                /> : userName}
                </td>
                <td class="px-6 py-4">
                 {props.email}
                </td>
                <td class="px-6 py-4">
                    <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={toggleEditmode}>{isEditMode? "Close" : "Edit"}</button>
                    { isEditMode && <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={handleSubmit}>Save</button>}
                </td>
                <td class="px-6 py-4">
                <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={handleDelete}>Delete</button>
                </td>
            </tr>
  )
}

export default UserData

