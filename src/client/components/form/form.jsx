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
    this.ajaxRequest = this.ajaxRequest.bind( this );
    this.showProduct = this.showProduct.bind( this );

  }

  changeHandler(e){
    console.log(e.target.value);
    this.setState({ product: e.target.value });
    this.ajaxRequest();
    }

    // componentDidMount() {
    //     fetch("/products").then(res=>res.json().then(res=>this.setState({data:res})));
    //     console.log("hi mount")
    // }

    ajaxRequest(){
        fetch("/products").then(res=>res.json().then(res=>this.setState({data:res})));
        console.log("triggereddddd");
        //this.props.onChange(this.state.data);
    }

    showProduct(e){
        let productId = e.target.id;
        console.log(productId);
        this.props.onChange(this.state.data.products[productId]);

    }


  render() {

    let products = this.state.data.products.map((prod, i) => {
            return <li key={prod + i} id={i}>{prod.name}
                    <button onClick={this.showProduct} id={i}>🔍</button>
                    </li>
    })

    return (
      <div>
        <p>The product that you're searching for is: {this.state.product}</p>
        <input className={styles.name} onChange={this.changeHandler} />
        {products}
      </div>
    );
  }
}


export default Form;

// Product.propTypes = {
//   products:   PropTypes.object

// };