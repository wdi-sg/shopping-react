import React from 'react';

class Product extends React.Component {
  constructor() {
    super();
    this.timeOut = null;
    this.state = {
      searchForm: '',
      queryData: []
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
  }


  onClickHandler() {
    this.searchItemByName();
  }

  searchItemByName(){
    fetch(`/searchItems/${this.state.searchForm}`,{
      method: 'GET'
    })
    .then(response => response.json())
    .then(json => this.setState({queryData: json.product}));
  }

  render() {
    console.log('Form state', this.state);
    return (
      <div>
        <input onChange={this.onChangeHandler} value={this.state.searchForm} placeholder="search"/>
        <button onClick={this.onClickHandler}>Search</button>
          <ListItems queryData={this.state.queryData}/>  
      </div>
    );
  }
}


class ListItems extends React.Component {
  render() {
    // console.log('Props ', this.props)
    // let listItems;
    // if(this.props.queryData.products && this.props.queryData.products.length > 0){
    //   listItems = this.props.queryData.products.map((item, index) => {
    //     return (
    //       <div key={index}>
    //         <li>{item.name}</li>
    //       </div>
    //     );
    // });
    // console.log('listitems', listItems)
    // }
  const {queryData} = this.props;
  console.log('query data', queryData);
  return(
    <div>
      {queryData.length !== 0 ? queryData.map(element => <p>{element.name}</p>) : null}
      {/* <ul> */}
        {/* {listItems || 'No list items'} */}
      {/* </ul> */}
    </div>
  )
}
  }

    


export default Product;
