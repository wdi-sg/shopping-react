import React from "react";

export default class Item extends React.Component {
  onClick = () => {
    this.props.displayItem(this.props.id);
  };

  render() {
    return (
      <div className="item">
        <div className="card mb-2" id={this.props.id} onClick={this.onClick}>
          <h5>
            {this.props.name} - ${this.props.price}
          </h5>
        </div>
      </div>
    );
  }
}
