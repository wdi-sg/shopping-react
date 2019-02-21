import React from 'react';
import styles from './style.scss';
import PropTypes from 'prop-types';

class Form extends React.Component {
    constructor() {
        super();
        this.trackInput = this.trackInput.bind(this);
        this.search = this.search.bind(this);
        this.state = {
            sortOptions: ['sort by', 'relevance', 'price', 'title', 'bestseller', 'customerRating', 'new'],
            sortBy: "",
            searchKey: "",
        };
    }

    trackInput(e){
        this.setState({
            searchKey: e.target.value
        });
    }

    static getDerivedStateFromProps( nextProps, prevState ){
        if (prevState.sortBy && nextProps.sortBy == ""){
            return {
                sortBy: prevState.sortBy
            }
        } else {
            return null;
        }
    }

    sortOptions(){
        return this.state.sortOptions.map((option, index) => {
            if (index === 0){
                return (
                    <option 
                        defaultValue={ option }
                        key={ index + option }
                    >
                        { option }
                    </option> 
                )
            } else {
                return (
                    <option
                        key={ index + option }
                    >
                        { option }
                    </option>
                )
            }
        })
    }

    sortBy(e){
        if (this.state.searchKey !== "" && e.target.value != this.state.sortOptions[0]){
            this.setState({ sortBy: e.target.value });
            this.props.search(this.state.searchKey, e.target.value);
        }
    }

    search(){
        this.props.search(this.state.searchKey, this.state.sortBy);
    }

    render() {
        return (
            <div className="m-auto text-center">
                <input 
                    className = { styles.name }
                    id = "searchKey"
                    placeholder = "Enter product name"
                    onChange = { this.trackInput }
                    onKeyDown ={ e => { e.keyCode === 13 ? this.props.search(this.state.searchKey) : null } }
                /> 
                <button
                    onClick = { this.search }
                >
                    Search
                </button>
                <div>
                    <select
                        onChange={ e => { this.sortBy(e) }}
                    >
                        { this.sortOptions() }
                    </select>
                </div>
            </div> 

        );
    }
}

Form.propTypes = {
    search: PropTypes.func
};

export default Form;