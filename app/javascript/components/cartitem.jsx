import React from "react";

export default class CartItem extends React.Component {
  onClick = () => {
    this.props.displayItem(this.props.id);
  }
  render() {
    return (
      <h5 onClick={this.onClick} className="item">
        {this.props.name} - ${this.props.price}
      </h5>
    );
  }
}
