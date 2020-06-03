import React from "react";
import axios from "axios";
import Search from "./search";
import ItemDetail from "./displayitem"
import { element } from "prop-types";

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      searchItems: [],
      item: {},
    };
  }

  onSearch = (event) => {
    const url = "/items.json";
    let input = event.target.value.toUpperCase();
    axios
      .get(url)
      .then((response) => {
        const data = response.data;
        console.log(data);

        let searchItems = [];
        data.forEach((element) => {
          let string = element.name.toUpperCase();
          if (string.includes(input)) {
            searchItems.push(element);
          }
        });
        console.log(searchItems);
        this.setState({ searchItems });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  displayItem = (id) => {
    console.log(id);
    let item = this.state.searchItems.find((element) => {
      return element.id === id;
    });
    console.log(item);
    this.setState({ item });
  }

  render() {
    return (
      <div className="row">
        <div className="col-4">
          <Search
            searchItems={this.state.searchItems}
            search={this.onSearch}
            displayItem={this.displayItem}
          />
        </div>
        <div className="col-4">
          <ItemDetail item={this.state.item}/>
        </div>
        <div className="col-4"></div>
      </div>
    );
  }
}
