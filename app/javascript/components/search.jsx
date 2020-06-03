import React from "react";

export default class App extends React.Component {
  render() {
    function compareName(a, b) {
      const itemA = a.name.toUpperCase();
      const itemB = b.name.toUpperCase();

      let comparison = 0;
      if (itemA > itemB) {
        comparison = 1;
      } else if (itemA < itemB) {
        comparison = -1;
      }
      return comparison;
    }

    function renderItems(array) {
      if (array.length !== 0) {
        let sorted = array.sort(compareName);
        let result = sorted.map((element, index) => {
          return (
            <div className="card mb-2">
              <h5>
                {element.name} - ${element.price}
              </h5>
            </div>
          );
        });
        return result;
      }
    }

    let allItems = renderItems(this.props.allItems) || "";
    let searchItems = renderItems(this.props.searchItems) || "";

    return (
      <div>
        <h3>Search</h3>
        <input onChange={this.props.search}></input>
        <div>
          <button onClick={this.props.getAll}>Show All Items</button>
        </div>
        <div>{allItems}</div>
        <div>{searchItems}</div>
      </div>
    );
  }
}
