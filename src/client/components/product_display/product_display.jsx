import React from 'react';

import styles from './style.scss';

class AddToCard extends React.Component{
    render(){
        return(
            <div className={styles.addCartButton}>
                <p onClick={(e)=>{this.props.addToCart(e)}}>Add to cart
                <ul hidden>
                <li>{this.props.stuff.name}</li>
                <li>{this.props.stuff.price}</li>
                <li>{this.props.stuff.desc}</li>
                </ul>
                </p>
            </div>
        );
    }
}

class Price extends React.Component{
    render(){
        return(
            <p>Price: {this.props.price}</p>
        );
    }
}

class Description extends React.Component{
    render(){
        return(
            <p>Description: {this.props.desc}</p>
        );
    }
}

class ProductImage extends React.Component{
    render(){
        return(
            <div className={styles.product_img}>
            <img src="https://www.midwestcommunity.org/wp-content/uploads/2018/02/Groceries-ThinkstockPhotos-836782690.jpg"/>
            </div>
        );
    }
}
class Product extends React.Component{
    constructor(){
        super()
    }
    render(){
        console.log('hello wolf');
        console.log(this.props.giveYou);
        return(
            <div className={styles.product_main}>
                <ProductImage/>
                <p>{this.props.giveYou.name}</p>
                <Description desc={this.props.giveYou.desc}/>
                <Price price={this.props.giveYou.price}/>
                <AddToCard stuff={this.props.giveYou} addToCart={this.props.addToCart}/>
            </div>
        );
    }
}

export default Product;