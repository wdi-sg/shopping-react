import React from 'react';

import styles from './style.scss';

class CheckOutPayment extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <p>Pay here</p>
        );
    }
}

class CartItem extends React.Component{
    constructor(){
        super()
    }
    render(){
        // console.log(this.props.item[0].obj)
        let outPut;
        if(this.props.item !== undefined){
            outPut = this.props.item.map((item,index)=>{
            if(this.props.item == undefined){
                return(
                    <p>Add stuff to your cart!</p>
                )
            }else{
                return(
                    <div className={styles.cartItem}key={index}>
                        <p>{item.obj.name}</p>
                        <p>{item.obj.price}</p>
                    </div>
                );
            }
        })
        }
        return(
            <div>
                {outPut}
            </div>
        );
    }
}

class List extends React.Component{
    constructor(){
        super()
    }
    render(){

        return(
            <div>
                <CartItem item={this.props.list}/>
            </div>
        );
    }
}

class Shop extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div>
                <p>Shopping Cart</p>
                <List list={this.props.giveYou}/>
                <CheckOutPayment/>
            </div>
        );
    }
}

export default Shop;