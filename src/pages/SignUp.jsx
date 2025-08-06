import React from "react";
import { SignUpForm } from "../features/auth_components/signup-form";

export default function SignUp() {
	return (
		<div className="bg-cyan-600 flex min-h-svh w-full items-center justify-center p-6 md:p-10">
			<div className="w-full max-w-sm">
				<SignUpForm />
			</div>
		</div>
	);
}
