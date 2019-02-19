import React from 'react';

const Cart = ({cart}) => {

	let CartElements = cart.map( (element, index) => {
		console.log(element[0].name);
		return(
			<React.Fragment>
                <button 
                	key = {index}
                	value = {index}
                >
                	{element[0].name}
                </button>
            </React.Fragment>
		)
	})

	return(
		<React.Fragment>
			<h1>Your cart:</h1>
			{ CartElements }
		</React.Fragment>
	)
};

export default Cart;