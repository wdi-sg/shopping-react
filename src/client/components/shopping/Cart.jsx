import React from 'react';

const Cart = ({cart}) => {

	let CartElements = cart.map( (element, index) => {

		return(
            <div key={ index } >
            	<p> Name: { element[0]["name"] }</p>
		    	<p> Price: { element[0]["salePrice"] }</p>
		    	<img src={ element[0]["thumbnailImage"] } />
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