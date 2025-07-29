import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui/pagination";
import {useCatalog} from "../product_store"

export default function PaginationCustom() {
	const pageInfo = useCatalog((state) => state.pageInfo)
	const setProduct = useCatalog((state) => state.setProduct)
	const setPageInfo = useCatalog((state) => state.setPageInfo)


	function handleNext() {
		if (pageInfo.next_page === null) {
			return
		}
		async function getProducts() {
			const response = await fetch(pageInfo.next_page)
			const data = await response.json()
			console.log(data.results)
			setProduct(data.results)
			delete data.results
			setPageInfo(data)
			console.log(data)
		}
		
		getProducts()
	}

	function handlePrevious() {
		if (pageInfo.previous_page === null) {
			return
		}
		async function getProducts() {
			const response = await fetch(pageInfo.previous_page)
			const data = await response.json()
			console.log(data.results)
			setProduct(data.results)
			delete data.results
			setPageInfo(data)
			console.log(data)
		}
		
		getProducts()
	}

	return (
		<Pagination className="p-2 float justify-around bg-[#065f46] ">
			<PaginationContent>
				<PaginationItem className="hover:border-1 hover:cursor-pointer hover:rounded-lg">
					<PaginationPrevious onClick={handlePrevious}/>
				</PaginationItem>
				<PaginationItem > 
					<PaginationEllipsis />
				</PaginationItem>
				<PaginationItem className="hover:border-1 hover:cursor-pointer hover:rounded-lg">
					<PaginationNext onClick={handleNext}/>
				</PaginationItem>
			</PaginationContent>
		</Pagination>
	);
}
