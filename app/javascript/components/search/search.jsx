import React from 'react';

class Search extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      productFilter: ''
    }
  }

  filterHandler = (e) => {
    this.setState({
      productFilter: e.target.value
    })
    this.props.onChange(event.target.value)
    console.log(this);
  }

    render() {
      const searchProducts = this.props.searchProducts.map((product, index)=>{
        return (
        <React.Fragment key = {index}>
          <a className="btn btn-fix text-left" onClick={()=>{ this.props.setSelectedProduct() }}>
            <div className="card" value={product.id}>
                <img className="card-img-top" src="https://c1.wallpaperflare.com/preview/39/214/540/still-items-things-plants.jpg" />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">SGD {product.price}</p>
                </div>
            </div>
          </a>
        </React.Fragment>);
    });
        return (
          <div>
            <h1>Shoppinggg</h1>
            <input id="filter" type="text" placeholder="Search.." value={this.state.productFilter}
              onChange={(event)=>{
              this.props.inputToBePassedOn(event)
              this.setState({input:event.target.value})
              }} />
            {/* <button onClick={()=>{this.filterHandler()}}>Filter by Name</button> */}
            <div className="card-deck">
              {searchProducts}
            </div>
          </div>
        );
    }
}

export default Search;
