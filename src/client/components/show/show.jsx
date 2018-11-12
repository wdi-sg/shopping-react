import React from 'react';
import PropTypes from 'prop-types';

class Show extends React.Component {
    render() {
        if (Object.keys(this.props.item).length) {
            var display = <div>
                                <img src={this.props.item.mediumImage} />
                                <div>
                                    <p>Seller: {this.props.item.sellerInfo}</p>
                                    {this.props.item.shortDescription}
                                    <p>Stock: {this.props.item.stock}</p>
                                </div>
                                <div>Price: ${this.props.item.salePrice}</div>
                                <button>Add To Cart</button>
                            </div>
        } else {
            var display = '';
        }
        return(
            <div>
                {display}
            </div>
        )
    }
}

Show.propTypes = {
    item: PropTypes.object.isRequired
};

export default Show;