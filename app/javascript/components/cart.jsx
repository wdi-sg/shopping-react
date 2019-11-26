import React from 'react';

class Cart extends React.Component{

    render(){
        console.log(this.props.stuff)
        const cartStuff = this.props.stuff.map((product, index)=>{return (<div key = {index}>
                    <p>{product[0].name}</p>
                  </div>);
                });
        console.log(cartStuff)

        return (
        <div>
            <h1>Cart</h1>
            <div>{cartStuff}</div>
        </div>

        )
    }
}

export default Cart