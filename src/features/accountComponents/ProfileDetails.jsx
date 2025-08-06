import useProfile from "./profileStore";
import { Link } from "react-router-dom";
export default function ProfileDetails() {
	const { data } = useProfile();
	return (
		<div className="p-5 flex flex-col ">
			<h3 className="text-3xl mb-3">Hello {data.profile_details.first_name}</h3>
			<div className="border-1 p-5 rounded-xl bg-cyan-100 w-[50%] mb-10">
				<div className="flex justify-between">
					<h2 className="text-2xl p-3 font-bold h-15">Account Info</h2> <Link to="/profile/edit" className="bg-slate-800 text-sm p-2 text-[white] h-10 rounded-md hover:bg-cyan-600">Edit ✒️</Link>
				</div>
				<ul className="list-disc p-4 pl-10">
					<li>
						<span className="font-bold">User Name: </span>
						<span className="">{data.profile_details.username}</span>
					</li>
					<li>
						<span className="font-bold">First Name: </span>
						<span className="">{data.profile_details.first_name}</span>
					</li>
					<li>
						<span className="font-bold">Last Name: </span>
						<span className="">{data.profile_details.last_name}</span>
					</li>
					<li>
						<span className="font-bold">Email: </span>
						<span className="">{data.profile_details.email}</span>
					</li>
				</ul>
			</div>
			<div className="border-1 p-5 rounded-xl bg-cyan-50 w-[50%] mb-10">
				<h2 className="text-2xl pt-3">Financial Details</h2>
				<ul className="list-disc p-4 pl-10">
					<li>
						<span className="font-bold">Money Spent: </span>
						<span className="">{data.financial_details.money_spent}</span>
					</li>
					<li>
						<span className="font-bold">Money Earned: </span>
						<span className="">{data.financial_details.money_earned}</span>
					</li>
				</ul>
			</div>
			<div className="border-1 p-5 rounded-xl bg-cyan-100 w-[50%]">
				<h2 className="text-2xl pt-3">Statistics</h2>
				<ul className="list-disc p-4 pl-10">
					<li>
						<span className="font-bold">Products Purchased: </span>
						<span className="">{data.stats.products_purchased}</span>
					</li>
					<li>
						<span className="font-bold">Products Reviewed: </span>
						<span className="">{data.stats.products_reviewed}</span>
					</li>
					<li>
						<span className="font-bold">Products Rated: </span>
						<span className="">{data.stats.products_rated}</span>
					</li>
					<li>
						<span className="font-bold">Products Posted: </span>
						<span className="">{data.stats.products_posted}</span>
					</li>
					<li>
						<span className="font-bold">Products In WishList: </span>
						<span className="">{data.stats.products_in_wishlist}</span>
					</li>
					<li>
						<span className="font-bold">Categories Created: </span>
						<span className="">{data.stats.categories_created}</span>
					</li>
				</ul>
			</div>
		</div>
	);
}
