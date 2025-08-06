export function ListItem({ products }) {
	return (
		<div className="hover:cursor-pointer mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
			{products.map((product) => (
				<div key={product.id} className="group relative">
					<img
						src={`https://isri21.pythonanywhere.com/${product.images[0]}`}
						className="aspect-square w-full rounded-md bg-gray-200 object-cover hover:cursor-pointer group-hover:opacity-75 lg:aspect-auto lg:h-80"
					/>
					<div className="mt-4 flex justify-between">
						<div>
							<h3 className="text-sm text-gray-700">
								<a href={product.href}>
									<span aria-hidden="true" className="absolute inset-0" />
									{product.name}
								</a>
							</h3>
							<p className="mt-1 text-sm text-gray-500">{product.category[0]}</p>
						</div>
						<p className="text-sm font-medium text-gray-900">{product.price}</p>
					</div>
				</div>
			))}
		</div>
	);
}
