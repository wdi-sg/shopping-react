import React from 'react';

import PropTypes from 'prop-types';

import styles from './style.scss';

class Form extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <select className="custom-select" onChange={this.props.onSelect} value={this.props.selectValue}>
                    <option value="1">Price</option>
                    <option value="2">Name</option>
                    <option value="3">None</option>
                </select>
                <div onChange={this.props.onChangeHandler}>
                    <input className={styles.name} />
                    <div className="btn btn-primary" onClick={this.props.onClickHandler}>
                        Search
                    </div>
                </div>
            </div>
        );
    }
}
Form.propTypes = {
    onChangeHandler: PropTypes.func.isRequired,
    onClickHandler: PropTypes.func.isRequired,
    onSelect: PropTypes.func.isRequired,
    selectValue: PropTypes.string.isRequired
};

export default Form;
