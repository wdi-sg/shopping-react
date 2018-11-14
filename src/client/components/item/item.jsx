import React from 'react';

import styles from './style.scss';

import Slider from "react-slick";


class Item extends React.Component {
  constructor() {
    super();
  }

  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    let item = this.props.item;

        if (item) {
            return (
                <div>
                    <h3>{item.name}</h3>
                      <p>
                      About:<br/>
                      {item.shortDescription}
                      </p>

                    <Slider {...settings}>

                      {item.imageEntities.map((pic, i) => (
                             <div key={i}>
                             <img src={pic.mediumImage}/>
                            </div>
                      ))}
                    </Slider>


                      <p>
                        Price:<br/>
                        ${item.msrp}
                      </p>
                      <button onClick={() => this.props.addToCart(item)}>Add to cart</button>
                </div>
            )
        }
        else {
            return <span/>

        }
    }
}

export default Item;
