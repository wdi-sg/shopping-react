import React from 'react';
import styles from './style.scss';
import PropTypes from 'prop-types';

class Form extends React.Component {
    constructor() {
        super();
        this.trackInput = this.trackInput.bind(this);
        this.state = {
            searchKey: ""
        };
    }

    trackInput(e){
        this.setState({
            searchKey: e.target.value
        });
    }

    render() {
        return (
            <React.Fragment>
                <input 
                    className = { styles.name }
                    id = "searchKey"
                    placeholder = "Enter product name"
                    onChange = { this.trackInput }
                /> 
                <button
                    onClick = { () => { this.props.search(this.state.searchKey) }}
                >
                    Search
                </button>
            </React.Fragment> 

        );
    }
}

Form.propTypes = {
    search: PropTypes.func
};

export default Form;