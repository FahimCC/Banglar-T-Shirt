import React from 'react';
import './TShirt.css';

const TShirt = ({ ts, handleAddToCart }) => {
	const { _id, price, picture, name } = ts;
	return (
		<>
			<div className='product'>
				<img src={picture} alt='' />
				<h4>${price}</h4>
				<p>{name}</p>
				<button onClick={() => handleAddToCart(ts)}>Buy Now</button>
			</div>
		</>
	);
};

export default TShirt;
