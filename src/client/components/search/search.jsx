import React from 'react';

import styles from './style.scss';

export class Search extends React.Component {

  render() {

    const items = this.props.items.map((item, index)=>{
        return <p key={index} id={item.id} name={item.name} onClick={(e) => {this.props.showProduct(e)}}>
                {item.name}
                </p>
    });

    return (
      <div>

        <p>YAY AND STUFF</p>
        <button onClick={this.props.makeAjaxCall}> Show Products </button>
        <input type="text" name="name" />
        <br/> <br/>
          {items}
      </div>
    );
  }
}