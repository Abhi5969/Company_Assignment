import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home"
import UserManagement from './pages/UserManagement'
import LoginPg from './pages/LoginPage'
import RegisterPg from './pages/RegisterPage'
function App() {
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/user-management" element={<UserManagement/>} />
        <Route path='/login' element={<LoginPg/>}/>
        <Route path='/register' element={<RegisterPg/>}/>
      </Routes>
    </div>
  );
}

export default App;
