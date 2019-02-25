import React from 'react';

const Cart = ({cart}) => {

	let CartElements = cart.map( (element, index) => {

		return(
            <div key = { element.id }>
            	<p> Name: { element.name }</p>
		    	<p> Price: { element.salePrice }</p>
		    	<img src={ element.thumbnailImage } />
            </div>
		)
	})

	return(
		<div>
			{
			cart.length > 0 &&
			<React.Fragment>
				<h1>Your cart:</h1>
				{ CartElements }
			</React.Fragment>
			}
	    </div>
	)
};

export default Cart;