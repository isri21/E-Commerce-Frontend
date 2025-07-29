import { ListItem } from "./ListItem";
import {useCatalog} from "../product_store"
import { useEffect } from "react";
import PaginationCustom from "./Pagination";

export default function Browse() {
	const product = useCatalog((state) => state.product)
	const setProduct = useCatalog((state) => state.setProduct)
	const setPageInfo = useCatalog((state) => state.setPageInfo)


	useEffect(() => {
		try {
			async function getProducts() {
				const response = await fetch("https://isri21.pythonanywhere.com?per_page=4")
				const data = await response.json()
				console.log(data.results)
				setProduct(data.results)
				delete data.results
				setPageInfo(data)
				console.log(data)
			}
			
			getProducts()
		} catch(error) {
			console.log(error)
		}
	}, [])

	return (
		<div className="font-[Consolas]">
			<div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
				<h2 className="text-2xl font-bold tracking-tight text-gray-900">
					Products In Store
				</h2>
				<ListItem products={product}/>				
			</div>
			<PaginationCustom />
		</div>
	);
}
