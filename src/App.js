import React from 'react'
import { Routes, Route } from "react-router-dom";
import {
  Archive,
  Home,
  Trash,
  Label,
  Logout,
  Login,
  Signup,
  LandingPage,
  Profile,
} from "./Pages";
const App = () => {
  return (
   
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/archive" element={<Archive />} />
      <Route path="/trash" element={<Trash />} />
      <Route path="/label" element={<Label />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
     
    </Routes>
 
  )
}

export default App





// import React from 'react'
// import { Route, Routes } from 'react-router-dom'
// import {LandingPage} from './Pages/LandingPage/Landing'
// import {Signup} from "./Pages/Authentication/Signup"
// import {Login} from "./Pages/Authentication/Login"
// import {Logout} from "./Pages/Authentication/Logout"
// const App = () => {
//   return (
//     <div>
//     <Routes>
//     <Route path="/Logout" element={<Logout />} />
//         <Route path="/Login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/" element={<LandingPage />}/>
//     </Routes>
   
//     </div>
//   )
// }

// export default App