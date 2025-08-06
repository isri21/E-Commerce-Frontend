import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import useAuth from "../../features/auth_components/auth_store";
import { useEffect } from "react";
function NavBar() {
	const { isAuthenticated, logout } = useAuth();
	return (
		<nav className="flex font-[Consolas] justify-around pt-6 w-[100%] h-[82px] border-b-1 border-[#e3e3e3] bg-[#065f46]">
			<Link to="/" className="font-bold text-3xl text-white">
				ነግደው
			</Link>
			<Input placeholder="Search..." className="w-[50%] bg-white" />
			<Button className="cursor-not-allowed">Search</Button>
			<div className="flex h-9 gap-1">
				{isAuthenticated ? (
					<Button
						onClick={() => logout()}
						className="bg-slate-800 text-sm p-2 text-[white] rounded-md hover:bg-cyan-600 hover:cursor-pointer"
					>
						Logout
					</Button>
				) : (
					<Link
						to="/login"
						className="bg-slate-800 text-sm p-2 text-[white] rounded-md hover:bg-cyan-600"
					>
						Log In
					</Link>
				)}
				<Link
					to="/signup"
					className="bg-slate-800 text-sm p-2 text-[white] rounded-md hover:bg-cyan-600"
				>
					Sign Up
				</Link>
			</div>
		</nav>
	);
}

export default NavBar;
