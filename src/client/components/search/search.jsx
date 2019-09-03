import React from 'react';

import PropTypes from 'prop-types';

import styles from './style.scss';
import main_styles from '../../style.scss';

class Search extends React.Component {
    constructor(){
      super()
      this.state = {
        word:"",
        items: [],
        isLoaded: false,
        products: []
      }
    }

    componentDidMount() {
      fetch("http://127.0.0.1:3000/products")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              items: result
            });

          },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
     }

    getItems(e){
      console.log(this.state.items.products)
      let productList = this.state.items.products.map((obj,index)=>{
        return <li key={index} id={index}>{obj.name}{obj.price}</li>
      })

      this.setState({products:productList})
    }

    setItem(e){
      let results = this.state.items.products.filter((obj)=>{
        return obj.name.includes(e.target.value)
      }).map((obj,index)=>{
        return <li key={index} id={index}><div className={main_styles.itemtag} onClick={this.props.sendItem.bind(this, obj)}><div>{obj.name}</div><div>{obj.price}</div></div></li>
      })
      this.setState({products:results})
    }

    render() {

    return (
      <div className={main_styles.panel}>Search
        <input onChange={this.setItem.bind(this)}></input>
        <button type="button" onClick={this.getItems.bind(this)}>Search Product</button>
        <div>
          <ul>
          {this.state.products}
          </ul>
        </div>
      </div>
    );
  }
}



export default Search;
