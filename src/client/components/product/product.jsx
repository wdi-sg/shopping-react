import React from 'react';
import {hot} from 'react-hot-loader';

class Product extends React.Component {
    render() {
    let products = this.props.search.map(item => {
                    return <div key={item.itemId}>
                      <img src={item.mediumImage} />
                      <p>{item.name}</p> 
                      <br></br> 
                      <p>{item.salePrice}</p>
                      </div>
    })
        return (
            <div>
                {products}
            </div>
        )
    }

}

export default hot(module)(Product);