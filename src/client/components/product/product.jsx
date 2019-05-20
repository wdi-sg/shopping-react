import React from 'react';

import styles from './style.scss';

export class Product extends React.Component {
    render() {
        return (
            <div  class="col-md-4">
            <h1> This is the product component </h1>
            <img />
            <p> DESCRIPTION </p>
            <p> PriCe </p>
            <button> ADD TO caRT </button>
            </div>
        )
    }
}