import { create } from "zustand";

const useCatalog = create((set) => ({
	product: [],
	setProduct: (value) => set({ product: value }),
	pageInfo: {
		previous_page: null,
		next_page: null
	},
	setPageInfo: (value) => set({ pageInfo: value }),
}));

export { useCatalog };
