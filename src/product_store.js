import { create } from "zustand";

const useCatalog = create((set) => ({
	product: [],
	setProduct: (value) => set({ product: value }),
	pageInfo: {
		previous_page: null,
		next_page: null
	},
	setPageInfo: (value) => set({ pageInfo: value }),
	isLoading: false,
	setIsLoading: (value) => set({isLoading: value})
}));

export {useCatalog};


