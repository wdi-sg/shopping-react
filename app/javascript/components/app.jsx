import React from "react";
import axios from "axios";
import Search from "./search";

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      isClicked: false,
      allItems: [],
      searchItems: [],
    };
  }

  getAll() {
    if (!this.state.isClicked) {
      this.setState({ isClicked: true });
      const url = "/items.json";
      axios
        .get(url)
        .then((response) => {
          const data = response.data;
          console.log(data);
          this.setState({ allItems: data });
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      this.setState({ isClicked: false, allItems: [] });
    }
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

  render() {
    let allItems = "";
    if (this.state.allItems.length !== 0) {
      let sortedByName = this.state.allItems.sort(this.compareName);
      allItems = sortedByName.map((element, index) => {
        return (
          <div className="card">
            <h5>
              {element.name} - ${element.price}
            </h5>
          </div>
        );
      });
    }

    return (
      <div className="row">
        <div className="col-4">
          <Search
            getAll={() => {
              this.getAll();
            }}
            allItems={this.state.allItems}
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
