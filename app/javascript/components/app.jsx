import React from "react";
import axios from "axios";
import Search from "./search";

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      searchItems: [],
    };
  }

  onSearch(event) {
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

  displayItem(event) {
    
  }

  render() {
    return (
      <div className="row">
        <div className="col-4">
          <Search
            searchItems={this.state.searchItems}
            search={(event) => {
              this.onSearch(event);
            }}
          />
        </div>
        <div className="col-4"></div>
        <div className="col-4"></div>
      </div>
    );
  }
}
