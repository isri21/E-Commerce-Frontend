import Browse from "./pages/HomePage";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Browse />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/profile/edit" element={<EditProfile />} />
				<Route path="*" element={<h1>404 - Page Not Found</h1>} />
			</Routes>
		</>
	);
}

export default App;
