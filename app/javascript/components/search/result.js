import React, { Component } from 'react'

export default class Result extends Component {
    render() {
        console.log(this.props.results);
        const searchResults = this.props.results.map(product => {
            const {name, price, image_url, description} = product
            return <p key={product.id}>{name}, ${price}, {image_url}, {description}</p>
        });
        return (
            <span>{searchResults}</span>
        )
    }
}
