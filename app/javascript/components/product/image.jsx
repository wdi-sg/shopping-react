import React from 'react';

class Image extends React.Component {

  render() {
  let display = this.props.imgurl

    return (
      <div>
        <h2> Image</h2>
        <img src={display} style={{width:'100%'}}></img>
      </div>
    );
  }
}
export default Image;