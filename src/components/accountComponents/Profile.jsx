import { Navigate } from "react-router-dom";
import NavBar from "../NavBar";
import { useEffect } from "react";
import useProfile from "./profileStore";
import useAuth from "../auth_components/auth_store";
import ProfileDetails from "./ProfileDetails";

function Profile() {
	const {token} = useAuth()
	const {isLoading, getAccount } = useProfile();
	useEffect(() => {
		getAccount(token);
	}, []);

	if (token === null) {
		return <Navigate to="/login" />;
	}

	

	if (isLoading) {
		return (
			<>
				<NavBar />
				<h3 className="text-3xl">Loading Profile...</h3>
			</>
		);
	}

	return (
		<>
			<NavBar />
			<ProfileDetails />
		</>
	);
}

export default Profile;
