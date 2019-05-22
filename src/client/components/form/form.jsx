import React from 'react';

class Form extends React.Component {

  render() {
    return (
      <div>
        <input onChange={this.props.onChangeHandler} value={this.props.searchForm} placeholder="search" />
        <button onClick={this.props.onClickHandler}>Search</button>
        <ListItems queryData={this.props.queryData} showProductHandler={this.props.showProductHandler} />
      </div>
    );
  }
}

class ListItems extends React.Component {
  render() {
    const {queryData} = this.props;
    return (
      <div>
        {queryData.length !== 0
          ? queryData.map((element, index) => (
              <div key={index}>
                <p>{element.name}</p>
                <button onClick={this.props.showProductHandler} id={element.id}>
                  show
                </button>
              </div>
            ))
          : null}
      </div>
    );
  }
}

export default Form;
