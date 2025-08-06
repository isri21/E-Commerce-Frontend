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
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import useAuth from "./auth_store";

export function LoginForm({ className, ...props }) {
	const [username, setUserName] = useState("");
	const [password, setPassword] = useState("");
	let { isLoading, login, error, } = useAuth();
	const navigate = useNavigate();

	async function handleSubmit(e) {
		e.preventDefault();
		try {
			await login(username, password);
			navigate("/profile");
		} catch (error) {
			console.log("Error: " + error.message);
		}
	}

	return (
		<div className={cn("flex flex-col gap-6", className)} {...props}>
			<Card>
				<CardHeader>
					<CardTitle className="text-[#065f46]">Login to your account</CardTitle>
					<CardDescription className="text-cyan-600">
						Enter your user name below to login to your account
					</CardDescription>
				</CardHeader>
				<CardContent>
					<form
						onSubmit={(e) => {
							e.preventDefault();
							handleSubmit(e);
						}}
					>
						<div className="flex flex-col gap-6">
							<div className="grid gap-3">
								<Label htmlFor="email" className="text-cyan-600">User Name</Label>
								<Input
									id="email"
									type="text"
									placeholder="abebe"
									value={username}
									onChange={(e) => setUserName(e.target.value)}
									required
								/>
							</div>
							<div className="grid gap-3">
								<div className="flex items-center">
									<Label htmlFor="password" className="text-cyan-600">Password</Label>
								</div>
								<Input
									id="password"
									type="password"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									required
								/>
							</div>
							{error && <p className="text-[red]">{error.message}</p>}
							<div className="flex flex-col gap-3">
								<Button
									type="submit"
									className="w-full hover:cursor-pointer bg-[#065f46] hover:bg-cyan-600"
								>
									{isLoading ? "Logging In..." : "Login"}
								</Button>
							</div>
						</div>
						<div className="mt-4 text-center text-sm text-cyan-600">
							Don&apos;t have an account? <Link to="/signup">Sign up</Link>
						</div>
					</form>
				</CardContent>
			</Card>
		</div>
	);
}
