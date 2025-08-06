import { ListItem } from "../features/home_page/ListItem";
import { useCatalog } from "../features/home_page/product_store";
import { useEffect } from "react";
import PaginationCustom from "../features/home_page/Pagination";
import NavBar from "../components/shared/NavBar";

export default function Browse() {
	const { product, setProduct, setPageInfo, isLoading, setIsLoading } =
		useCatalog();

	useEffect(() => {
		try {
			async function getProducts() {
				const response = await fetch(
					"https://isri21.pythonanywhere.com?per_page=4"
				);
				const data = await response.json();
				setProduct(data.results);
				delete data.results;
				setPageInfo(data);
			}
			getProducts();
		} catch (error) {
			console.log(error.message);
		}
	}, []);

	return (
		<div className="font-[Consolas]">
			<NavBar />
			<div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
				<h2 className="text-2xl font-bold tracking-tight text-gray-900">
					Products In Store
				</h2>
				<ListItem products={product} />
			</div>
			<PaginationCustom />
		</div>
	);
}
