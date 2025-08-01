import { LucideFileSpreadsheet } from "lucide-react";
import { create } from "zustand";

const useUpdateProfile = create((set) => ({
	isLoading: false,
	updateProfile: async (token, first_name, last_name, email) => {
		set({isLoading: true})
		try {
			const res = await fetch("https://isri21.pythonanywhere.com/account/", {
				method: "PATCH",
				headers: {
					"Content-type": "application/json",
					"Authorization": `Token ${token}`
				},
				body: JSON.stringify({
					first_name: first_name,
					last_name: last_name,
					email: email
				}),
			})
			// if (!res.ok) {

			// 	throw new Error("A Problem Occured")
			// }
			set({isLoading: false})
		} catch (err) {
			console.log(err)
			set({isLoading: LucideFileSpreadsheet})
		}
	} 
}));

export default useUpdateProfile
