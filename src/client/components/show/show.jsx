import React from 'react';

class Show extends React.Component{

    constructor(){

        super()

        this.state={
            action: ''
        }
    }

    actionHandler(product){
        this.setState({action: product})
        console.log(this.state)
    }

    render(){

        return(
            <div className='sticky-top'>
                <div className='card-header'>
                    <h6>Item Detail</h6>
                </div>
                <br />
                <p>Name: {this.props.product.name}</p>
                <p>Price: {this.props.product.price}</p>
                <p>Description: {this.props.product.description}</p>
            </div>
        )
    }
}

export default Show;