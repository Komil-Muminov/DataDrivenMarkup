import "./css/Card.css";
const ProductCards = ({ products }) => {
	const { id, title, price, discount, imageUrl } = products;

	const priceWithDiscount = discount ? price * (1 - discount) : price;
	return (
		<>
			<div className="item_content" key={id}>
				<img className="item_img" src={imageUrl} alt="img" />
				<div className="item__text">
					<span className={discount ? "price_discount" : "none"}>
						{priceWithDiscount}₽
					</span>
					<span className={discount ? "price_strike" : "item_price"}>
						{price}₽
					</span>
					<p className="sections__desc item_title">{title}</p>
				</div>
			</div>
		</>
	);
};

export default ProductCards;
