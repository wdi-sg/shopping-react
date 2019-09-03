import React from 'react';

import styles from './style.scss';
import main_styles from '../../style.scss';


class Display extends React.Component {

    render() {
        return(
            <div>
                <h2>Product</h2>

                <p>ID: {this.props.input.fid}</p>
                <p>Name: {this.props.input.name}</p>
                <p>Price: {this.props.input.price}</p>
                <p>Description: {this.props.input.description}</p>
            </div>
        )
    }
}


export default Display;