import { create } from "zustand";

const useProfile = create((set) => ({
	data: {
		profile_details: {
			username: "",
			first_name: "",
			last_name: "",
			email: "",
		},
		financial_details: {
			money_spent: "",
			money_earned: "",
		},
		stats: {
			products_purchased: 0,
			products_reviewed: 0,
			products_rated: 0,
			products_posted: 0,
			products_in_wishlist: 0,
			categories_created: 0,
		},
	},
	isLoading: false,
	getAccount: async (token) => {
		set({ isLoading: true });
		try {
			const res = await fetch("https://isri21.pythonanywhere.com/account/", {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Token ${token}`,
				},
			});
			if (!res.ok) {
				throw Error("Unable to get profile");
			}

			const res_data = await res.json();
			set({ data: res_data });
			set({ isLoading: false });
		} catch (error) {
			set({ isLoading: false });
			console.error(error.message);
		}
	},
}));

export default useProfile;
