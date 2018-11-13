import React from 'react';

import PropTypes from 'prop-types';

import styles from './style.scss';

class Counter extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     banana: 'sneakers'
  //   };
  // }

  render() {
    return (
      <ul>
        {this.props.dataResults.map((item, index) => (
        <li key={index}>
          {item.name}
        </li>
        ))
        }
      </ul>
    );
  }

}

// Counter.propTypes = {
//   message: PropTypes.string.isRequired
// };

export default Counter;

//  render() {
//     return (
//       <p className={styles.desc}>
//         {this.props.message} : {this.state.banana}
//       </p>
//     );
//   }
// }
