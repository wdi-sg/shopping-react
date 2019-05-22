import React from 'react';

class Product extends React.Component {
  constructor() {
    super();
    };
    render() {
    //   const selectedItem = this.props.product.map(item => {
    //         return(
    //         <ul>                
    //             <li>
    //                 {item.name}
    //             </li>
    //             <li>
    //                 {item.price}
    //             </li>
    //             <li>
    //                 {item.description}
    //             </li>
    //         </ul>
    //         )
    //     });
        return(
            <div>{this.props.product.name}</div>
            // {selectedItem}
        );
    }
}




export default Product;
