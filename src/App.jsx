import "./App.css";
import Products from "./Products";
import ProductsList from "./Components/ProductsList/ProductsList";
function App() {
	return (
		<>
			<ProductsList products={Products} />
		</>
	);
}

export default App;
