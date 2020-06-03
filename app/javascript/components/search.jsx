import React from "react";
import Item from "./item"

export default class Search extends React.Component {
  compareName = (a, b) => {
    const itemA = a.name.toUpperCase();
    const itemB = b.name.toUpperCase();

    let comparison = 0;
    if (itemA > itemB) {
      comparison = 1;
    } else if (itemA < itemB) {
      comparison = -1;
    }
    return comparison;
  };

  renderItems = () => {
    let array = this.props.searchItems;
    if (array.length !== 0) {
      let sorted = array.sort(this.compareName);
      let result = sorted.map((element) => {
        return (
          <Item
            id={element.id}
            name={element.name}
            price={element.price}
            displayItem={this.props.displayItem}
          />
        );
      });
      return result;
    } else {
      return "No search results found.";
    }
  };
  render() {
    let searchItems = this.renderItems();

    return (
      <div>
        <h4>Search:</h4>
        <input className="mb-2" onChange={this.props.search} />
        <div>{searchItems}</div>
      </div>
    );
  }
}

