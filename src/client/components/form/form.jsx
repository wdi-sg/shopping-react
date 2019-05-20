import React from 'react';

import PropTypes from 'prop-types';

import styles from './style.scss';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      monkey: 'haha'
    };
  }

  render() {
    return (
      <div onChange={this.props.onChangeHandler}>
        <p>{this.state.monkey}</p>
        <input className={styles.name} onKeyPress={this.props.onClickHandler} />
        <div className="btn btn-primary" onClick={this.props.onClickHandler}>
          Search
        </div>
      </div>
    );
  }
}
Form.propTypes = {
  onChangeHandler: PropTypes.func.isRequired,
  onClickHandler: PropTypes.func.isRequired
};

export default Form;
