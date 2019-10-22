import React from 'react';
import style from '../style.scss';

class Search extends React.Component {

      constructor() {
        super();
        this.state = {
            term: ''
        }
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onTermChange(term);
    }


  render() {

    return (
            <input type="search" className={style.search} onChange={event => this.onInputChange(event.target.value)} />
    );
  }
}

export default Search;
