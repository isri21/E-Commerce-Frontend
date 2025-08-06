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

export function SignUpForm({ className, ...props }) {
	const [username, setUserName] = useState("");
	const [password, setPassword] = useState("");
	const [password2, setPassword2] = useState("");
	let { isLoading, error, signUp } = useAuth();
  const navigate = useNavigate()

  async function handleSubmit(e) {
    try {
        await signUp(username, password, password2)
        navigate("/login")
        error = {}
    } catch (error) {
      console.log(error)
    }
  }

	return (
		<div className={cn("flex flex-col gap-6", className)} {...props}>
			<Card>
				<CardHeader>
					<CardTitle className="text-[#065f46]">Sign Up for a new Account</CardTitle>
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
								<Label htmlFor="email" className="text-cyan-600">
									Enter Username
								</Label>
								<Input
									id="email"
									type="text"
									value={username}
									onChange={(e) => setUserName(e.target.value)}
									required
								/>
							</div>
							<div className="grid gap-3">
								<div className="flex items-center">
									<Label htmlFor="password" className="text-cyan-600">
										Enter Password
									</Label>
								</div>
								<Input
									id="password"
									type="password"
									value={password}
									onInput={(e) => setPassword(e.target.value)}
									required
								/>
							</div>
							<div className="grid gap-3">
								<div className="flex items-center">
									<Label htmlFor="password" className="text-cyan-600">
										Confirm Password
									</Label>
								</div>
								<Input
									id="password"
									type="password"
									value={password2}
									onInput={(e) => setPassword2(e.target.value)}
									required
								/>
							</div>
							{error && <p className="text-[red]">{error.message}</p>}
							<div className="flex flex-col gap-3">
								<Button
									type="submit"
									className="w-full hover:cursor-pointer bg-[#065f46] hover:bg-cyan-600"
								>
									{isLoading ? "Signing Up..." : "Sign Up"}
								</Button>
							</div>
						</div>
						<div className="mt-4 text-center text-sm text-cyan-600">
							Already have an account? <Link to="/login">Log In</Link>
						</div>
					</form>
				</CardContent>
			</Card>
		</div>
	);
}
