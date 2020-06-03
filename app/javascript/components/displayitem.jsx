import React from "react";

export default class DisplayItem extends React.Component {
  render() {
    let item = this.props.item;
    let itemHtml = "";

    if (item.name) {
      itemHtml = (
        <div class="card">
          <img class="card-img-top" src={item.image_url} alt="Item image" />
          <div class="card-body">
            <h5 class="card-title">{item.name}</h5>
            <h5>${item.price}</h5>
            <p class="card-text">{item.description}</p>
          </div>
          {/* <ul class="list-group list-group-flush">
            <li class="list-group-item">
            </li>
          </ul> */}
          <div class="card-body">
            <button onClick={this.props.addToCart}>Add To Cart</button>
          </div>
        </div>
      );
    }
    return (
      <div>
        <h4>Item Details:</h4>
        {itemHtml}
      </div>
    );
  }
}
