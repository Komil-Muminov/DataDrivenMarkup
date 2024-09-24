import "../ProductsCard/css/Card.css";
import ProductCards from "../ProductsCard/ProductCards";
const ProductsList = ({ products }) => {
	return (
		<>
			<section className="sections">
				<div className="container">
					<div className="cards__content">
						<ul className="card__list">
							{products.map((item) => (
								<li className="cards_item" key={item.id}>
									<a className="item_link" href="https://www.google.com/">
										<ProductCards products={item} />
									</a>
								</li>
							))}
						</ul>
					</div>
				</div>
			</section>
		</>
	);
};

export default ProductsList;
