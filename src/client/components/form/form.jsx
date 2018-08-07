import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.scss';

class Form extends React.Component {

  searchUpdate(event){
    // const val = this.current_value.value
    const val = event.target.value
    this.props.filterUpdate(val)
  }

  add(event){
    if(event.key === 'Enter'){
      alert('Adding....');
      this.props.submitHandler(event)
   }
  }

  render() {
    return (
      <div className={styles.box}>
        <input 
          className={styles.name} 
          placeholder='Search Item ...'
          onChange={this.searchUpdate.bind(this)}
          onKeyPress={(event) => this.add(event)}
        />
      </div>
    );
  }
}

Form.propTypes = {
  searchText: PropTypes.string.isRequired
};

export default Form;
