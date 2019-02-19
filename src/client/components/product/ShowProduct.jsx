import React from 'react';
import PropTypes from 'prop-types';

class ShowProduct extends React.Component {
    render() {
        let selectedPdt = this.props.selectedPdt;
        return(
                <div>
                    <h2>Product Details</h2>
                    <img src={selectedPdt[0].mediumImage}/>
                    <p>{selectedPdt[0].shortDescription}</p>
                    <p>{selectedPdt[0].salePrice}</p>
               </div>
        )
    }

}

ShowProduct.propTypes = {
    selectedPdt: PropTypes.array,
};

export default ShowProduct;