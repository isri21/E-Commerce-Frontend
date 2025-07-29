import {Input} from "././ui/input"
import {Button} from "././ui/button"

function NavBar() {
	return (
		<nav className="flex font-[Consolas] justify-around pt-6 w-[100%] h-[82px] border-b-1 border-[#e3e3e3] bg-[#065f46]">
			<p className="font-bold text-3xl text-white">ነግደው</p>
			<Input placeholder="Search..." className="w-[50%] bg-white" />
			<Button>Search</Button>
		</nav>
	);
}

export default NavBar;
