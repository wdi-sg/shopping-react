import React from "react";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };

    const items = (this.props.list ? (this.props.list.map(item => { return<div>
      <p>Name: {item.name}</p>
      <p>Dollars: $${item.price}</p>
      <button className="btn btn-primary" onClick={(evt)=>this.props.selectProduct(item.id)}>Click Here </button>
      </div>})) : "")

    return (<div className="p-5">
      <Slider {...settings}>
        {items}
      </Slider></div>
    );
  }
}

export default SimpleSlider 