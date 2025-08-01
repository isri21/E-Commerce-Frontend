import { create } from "zustand";

const useAuth = create((set) => ({
	token: null,
	isLoading: false,
	isAuthenticated: false,
	error: {},
	login: async (username, password) => {
		set({ isLoading: true });
		set({ error: {} });

		try {
			const res = await fetch("https://isri21.pythonanywhere.com/auth/login/", {
				method: "POST",
				headers: {
					"Content-type": "application/json",
				},
				body: JSON.stringify({
					username: username,
					password: password,
				}),
			});
			if (!res.ok) {
				throw new Error("Incorrect Username or Password");
			}
			const data = await res.json();
			set({ token: data.token });
			localStorage.setItem("token", data.token);
			set({ isLoading: false, isAuthenticated: true });
		} catch (error) {
			set({ error: error });
			set({ isLoading: false });
			throw error;
		}
	},

	signUp: async (username, password, password2) => {
		set({ isLoading: true });
		set({ error: {} });

		try {
			const res = await fetch("https://isri21.pythonanywhere.com/auth/register/", {
				method: "POST",
				headers: {
					"Content-type": "application/json",
				},
				body: JSON.stringify({
					username: username,
					password: password,
					confirm_password: password2,
				}),
			});
			if (!res.ok) {
				const data = await res.json();
				if (data.password) {
					throw new Error(data.password[0]);
				}
				if (data.username) {
					throw new Error(data.username[0]);
				}
			}
			const data = await res.json();
			set({ token: data.token });
			localStorage.setItem("token", data.token);
			set({ isLoading: false, isAuthenticated: true });
		} catch (error) {
			set({ error: error });
			set({ isLoading: false });
			throw error;
		}
	},

	logout: () => {
		localStorage.removeItem("token");
		set({ token: null });
		set({ isAuthenticated: false });
	},
}));

export default useAuth;
