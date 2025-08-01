import Browse from "./components/ProductList"
import Login from "./components/auth_components/Login"
import SignUp from "./components/auth_components/SignUp"
import Profile from "./components/accountComponents/Profile"
import EditProfile from "./components/accountComponents/EditProfile"
import { Routes, Route } from "react-router-dom"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Browse />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/profile/edit" element={<EditProfile />}/>
        <Route path="*" element={<h1>404 - Page Not Found</h1>}/>
      </Routes>
    </>
  )
}

export default App
