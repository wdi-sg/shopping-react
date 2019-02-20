import React from 'react';
import styles from './style.scss';
import EachResult from './eachResult'

class ResultList extends React.Component {
    constructor(props){
        super();
        this.state = {
            sorting: "",
            resultList: props.queryResults
        }
        this.setResultList = this.setResultList.bind(this);
        this.sortHandler = this.sortHandler.bind(this);
    }

    setResultList(){
        this.setState({resultList: this.props.queryResults})
    }

    sortHandler() {
        this.setState({sorting: event.target.value});
        if (this.props.queryResults.length > 0 ) {
            let eachItem = [...this.state.resultList]
            console.log(eachItem, this.props.queryResults);

        } 
    }

    render(){
        return(
            <React.Fragment>
            {/* {this.setResultList()} */}
            
            <h2>Results</h2>
            <select onChange={this.sortHandler}>
                <option selected disabled>Sort</option>
                <option value="priceAsc">Price Asc</option>
                <option value="priceDesc">Price Desc</option>
            </select>
            <div>
                
            </div>
            </React.Fragment>
        )
    }
}

export default ResultList;