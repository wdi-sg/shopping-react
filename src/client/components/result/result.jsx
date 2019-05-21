import React from 'react';
import styles from './style.scss';

class Result extends React.Component {

  render() {
    let elements = this.props.products.map( (item) => {
        return (
            <li>{ item.name }</li>
        );
    });

    return (
      <div>
        { elements }
      </div>
    );
  }
}

export default Result;