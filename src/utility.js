async function fetchProducts(url) {
	try {
		const response = await fetch(url);
		const data = await response.json();
		const pageInfo = data;
		delete pageInfo.results;
		return ({
			pageInfo: pageInfo,
			result: data.results
		})
	} catch (error) {
		console.log(error);
	}
}

export default fetchProducts;
