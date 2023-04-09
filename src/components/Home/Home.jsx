import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import TShirt from '../TShirt/TShirt';
import './Home.css';

//Context API
// export const ContextData = createContext([
// 	product,
// 	totalPrice,
// 	handleRemoveFromCart,
// ]);

const Home = () => {
	const tShirts = useLoaderData();
	// console.log(Array.isArray(tShirts));
	// console.log(tShirts);

	// const [selectedProduct, setSelectedProduct] = useState(0);
	const [product, setProduct] = useState([]);
	const [totalPrice, setTotalPrice] = useState(0);

	let message;
	if (product.length === 0) {
		message = <p>Buy some products...</p>;
	}

	const handleAddToCart = ts => {
		const exists = product.find(pd => pd._id === ts._id);
		if (exists) {
			toast('Product already exists...');
		} else {
			// setSelectedProduct(selectedProduct + 1);
			setTotalPrice(totalPrice + ts.price);
			setProduct([...product, ts]);
		}
	};
	const handleRemoveFromCart = (id, price) => {
		const remainingProduct = product.filter(pd => pd._id !== id);
		setProduct(remainingProduct);
		// setSelectedProduct(selectedProduct - 1);
		setTotalPrice(totalPrice - price);
	};

	return (
		<div className='body'>
			<div className='container'>
				<div className='product-container'>
					<h3>Total Product : {tShirts.length}</h3>
					<div className='products'>
						{tShirts.map(ts => (
							<TShirt key={ts._id} ts={ts} handleAddToCart={handleAddToCart} />
						))}
					</div>
				</div>
				<div className='cart-container'>
					{/* <ContextData.Provider
						value={[product, totalPrice, handleRemoveFromCart]}
					>
						<Cart />
					</ContextData.Provider> */}

					<Cart
						product={product}
						totalPrice={totalPrice}
						handleRemoveFromCart={handleRemoveFromCart}
					/>
				</div>
			</div>
		</div>
	);
};

export default Home;
