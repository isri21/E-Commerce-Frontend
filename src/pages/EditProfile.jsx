import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, Navigate, useNavigate } from "react-router-dom";
import useProfile from "../features/accountComponents/profileStore";
import useAuth from "../features/auth_components/auth_store";
import { useState } from "react";
import useUpdateProfile from "../features/accountComponents/updateProfile";

export default function EditProfile({ className, ...props }) {
	const { token } = useAuth();
	const { data } = useProfile();
	const { isLoading, updateProfile } = useUpdateProfile();
	const [firstName, setFirstName] = useState(data.profile_details.first_name);
	const [lastName, setLastName] = useState(data.profile_details.last_name);
	const [email, setEmail] = useState(data.profile_details.email);
	const navigate = useNavigate();
	console.log(token);

	if (token === null) {
		return <Navigate to="/login" />;
	}

	async function handleSubmit(e) {
		e.preventDefault();
		try {
			await updateProfile(token, firstName, lastName, email);
			navigate("/profile");
		} catch (err) {
			console.log(err);
		}
	}
	return (
		<div className="bg-cyan-600 flex min-h-svh w-full justify-center p-6">
			<div className={cn("flex flex-col w-200 gap-6", className)} {...props}>
				<Card>
					<CardHeader>
						<CardTitle className="text-[#065f46]">
							Update Your Profile Information
						</CardTitle>
					</CardHeader>
					<CardContent>
						<form onSubmit={(e) => handleSubmit(e)}>
							<div className="flex flex-col gap-6">
								<div className="grid gap-3">
									<Label htmlFor="email" className="text-cyan-600">
										First Name
									</Label>
									<Input
										id="email"
										type="text"
										value={firstName}
										onChange={(e) => setFirstName(e.target.value)}
										required
									/>
								</div>
								<div className="grid gap-3">
									<div className="flex items-center">
										<Label htmlFor="password" className="text-cyan-600">
											Last Name
										</Label>
									</div>
									<Input
										id="email"
										type="text"
										value={lastName}
										onChange={(e) => setLastName(e.target.value)}
										required
									/>
								</div>
								<div className="grid gap-3">
									<div className="flex items-center">
										<Label htmlFor="password" className="text-cyan-600">
											Email
										</Label>
									</div>
									<Input
										id="email"
										type="text"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										required
									/>
								</div>
								<div className="flex flex-col gap-3">
									<Button
										type="submit"
										className="w-full hover:cursor-pointer bg-[#065f46] hover:bg-cyan-600"
									>
										{isLoading ? "Updating..." : "Update"}
									</Button>
								</div>
							</div>
						</form>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
