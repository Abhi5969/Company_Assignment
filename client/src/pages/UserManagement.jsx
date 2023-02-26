import { useState, useEffect } from "react"
import axios from "axios"
import UserData from "../components/userData"
import Delete from "../components/delete"
const UserManagement = () =>{
  const [userData, setuserData] = useState([])
  const [isDisplayDeletePopUp, setisDisplayDeletePopUp] = useState(false)
  const getUserData = async () =>{
try{
  const {data} = await axios.get('/api/v1/users')
  // console.log(data);
  setuserData(data.users)
}catch(err){
  // console.log(err);
  setuserData([])
}
  }
  useEffect(() =>{
    getUserData()
  },[])
 const handleDeleteUser = (id) =>{
 const newUserData = userData.filter(user => user.id !== id )
 setuserData(newUserData)
 }
 const enableDeletePopup = (id) =>{
  setisDisplayDeletePopUp(true)
 }
  return <div className="relative z-0">
    <h1 className="font-bold text-2xl text-center p-4">User Details</h1>
  <div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    User Id
                </th>
                <th scope="col" class="px-6 py-3">
                   User Name
                </th>
                <th scope="col" class="px-6 py-3">
                   User Email
                </th>
                <th scope="col" class="px-6 py-3">
                   Edit
                </th>
                <th scope="col" class="px-6 py-3">
                   Action
                </th>
            </tr>
        </thead>
        <tbody>
        {
    userData.map((user)=> <UserData key={user.id} onDelete={enableDeletePopup} {...user}/> )
   }
        </tbody>
        </table>
</div>
{isDisplayDeletePopUp && <Delete/>}
  </div>
}

export default UserManagement