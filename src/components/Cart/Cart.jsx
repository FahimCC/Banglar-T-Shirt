import React from 'react';

const Cart = ({ product, totalPrice, handleRemoveFromCart }) => {
	// const data = useContext(ContextData);
	// console.log(data);

	let message;
	if (product.length === 0) {
		message = <p>Buy some products...</p>;
	}
	return (
		<>
			<h3>Shopping Cart</h3>
			<div className='cart'>
				{/* <p>Product selected: {selectedProduct}</p> */}
				<p>Product selected: {product.length}</p>
				<p>Total price: ${totalPrice}</p>
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
		</>
	);
};

export default Cart;
