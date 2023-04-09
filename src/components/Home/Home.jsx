import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import TShirt from '../TShirt/TShirt';
import './Home.css';

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
					<h3>Shopping Cart</h3>
					<div className='cart'>
						{/* <p>Product selected: {selectedProduct}</p> */}
						<p>Product selected: {product.length}</p>
						<p>Total price: {totalPrice}</p>
					</div>
					<h3>Product List</h3>
					<div className='center red'>{message}</div>
					<div>
						<ol>
							{product.map(pd => (
								<li key={pd._id}>
									<div className='close'>
										<span>{pd.name}</span>
										<button
											onClick={() => handleRemoveFromCart(pd._id, pd.price)}
											className='close-btn'
										>
											x
										</button>
									</div>
								</li>
							))}
						</ol>
					</div>
					<div
						className={`center ${product.length === 1 && 'yellow'} ${
							product.length >= 2 && 'green'
						} `}
					>
						{product.length === 1 && 'Buy one more...'}
						{product.length >= 2 && 'Buy one more product please...'}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
