import React from "react";

export default class Search extends React.Component {
  constructor() {
    super();

    this.state = {
      currentProduct:"",
    };
    this.onItemClick = this.onItemClick.bind(this)


  }
  onItemClick(item){
    this.setState({currentProduct:item})
    this.props.handleItemClick(item);
  }
  showProducts() {
    const products = this.props.searchDb.map((product, index) => {
      return (
        <li key={index} className="list-group-item product">
          <div className="d-flex flex-row justify-content-between align-items-center "style={{cursor:"pointer" }}
          onClick={()=>{this.onItemClick(product)}}>
            <img src={product.image_url} style={{height:"50px", width:"50px"}}/>
            <h6>{product.name}</h6>
            <h6>${parseFloat(product.price).toFixed(2)}</h6></div>
        </li>
      );
    });
    return products;
  }
  render() {
    var products = this.showProducts();
   

    return (
      <div className="col border overflow-auto">
        <h3>Search</h3>
        <div className="pt-3 pr-0 row">
          <div className=" ml-auto mr-auto col-lg-10 input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search product..."
              aria-label="Search product"
              aria-describedby="button-addon2"
              onChange={this.props.handleSearch}
            />
            {/* <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                id="button-addon2"
              >
                Search
              </button>
            </div> */}
          </div>
        </div>
        <div className="form-group row col-lg-7 pr-5 pl-5 ml-auto mr-auto">
          <select
            className="form-control"
            id="exampleFormControlSelect1"
            onChange={this.props.handleSort}
          >
            <option value="name">Sort by name</option>
            <option value="price">Sort by price</option>
          </select>
        </div>
        <div>
          <ul className="list-group list-group-flush pt-3">
            {products.length == 0 ? "No matching products" : products}
          </ul>
        </div>
      </div>
    );
  }
}
