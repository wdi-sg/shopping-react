import React from 'react';
import styles from './style.scss';
import EachResult from './eachResult'

class ResultList extends React.Component {
    constructor(){
        super();
        this.state = {
            resultList: [], 
            sorting: undefined
        }
        this.sortHandler = this.sortHandler.bind(this);
    }

    sortHandler() {
        if (this.props.queryResults.length > 0 ) {
            let resultList = [...this.state.resultList]
            
            // sort by price ascending
            if (event.target.value === "priceAsc"){
                resultList = resultList.sort((a, b) => {
                    return a.salePrice - b.salePrice
                })

            // sort by price descending
            } else {
                    resultList = resultList.sort((a, b) => {
                        return b.salePrice - a.salePrice
                    })
            }
            console.log(resultList)
            this.setState({resultList: resultList, sorting: event.target.value})
        } 
    }
    
    static getDerivedStateFromProps( nextProps, prevState ){
        if (!prevState.sorting && nextProps.queryResults !== prevState.resultList){
            console.log(nextProps, prevState);
            return {
                resultList: nextProps.queryResults
            }
        } else {
            return null;
        }
      }

    render(){

        console.log("oi look here", this.state.resultList)
        return(
            <React.Fragment>
            
            <h2>Results</h2>
            <select onChange={this.sortHandler}>
                <option selected disabled>Sort</option>
                <option value="priceAsc">Price Asc</option>
                <option value="priceDesc">Price Desc</option>
            </select>
            <div>
                <EachResult resultList={this.state.resultList}/>
            </div>
            </React.Fragment>
        )
    }
}

export default ResultList;