import React from 'react'
import { LoginForm } from "../features/auth_components/login-form"

export default function Login() {
  return (
	<div className="bg-cyan-600 flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  )
}
