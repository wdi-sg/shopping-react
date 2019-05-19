import React from 'react';
import styles from './style.scss';
// import PropTypes from 'prop-types';

class Form extends React.Component {
  constructor() {

    super();
    this.state = {
      product: '',
      data: '',
    };

    fetch("/products").then(res=>res.json().then(res=>this.setState({data:res})));

    this.changeHandler = this.changeHandler.bind( this );

  }

  changeHandler(e){
    console.log(e.target.value);
    this.setState({ product: e.target.value });

    }

    componentDidUpdate() {
        // fetch("/products").then(res=>res.json().then(res=>this.setState({data:res})));
        // console.log("updating...!")
    }


  render() {

    return (
      <div>
        <p>The product that you're searching for is: {this.state.product}</p>
        <input className={styles.name} onChange={this.changeHandler} />
        <Product products={this.state.data.products}/>
      </div>
    );
  }
}

export class Product extends React.Component {

    render () {

        let products = this.props.products.map((prod, i) => {
            return <li key={prod + i}>{prod.name} ({prod.price})</li>
        })
        return (
           <ul>{products}</ul>
        )
    }
}


export default Form;

// Product.propTypes = {
//   products:   PropTypes.object

// };