import React from 'react';
import styles from './style.scss';

class ResultList extends React.Component {
    constructor(){
        super();
        this.queryResult = this.queryResult.bind(this);
    }

    queryResult() {
        console.log(this.props.queryResults);
        if (this.props.queryResults.length > 0 ) {
            return ( this.props.queryResults.map(eachItem => {
                return (
                <div className={styles.eachItem}>
                    <h5>{eachItem.categoryPath}</h5>
                    <img src={eachItem.largeImage}/>
                    <h4>{eachItem.name} ( {eachItem.customerRating} / 5 &#9734; )</h4>
                    <p>{eachItem.shortDescription}</p>
                    <small>MSRP + Standard Shipping Rate</small><br/>
                    <small>${eachItem.salePrice} + ${eachItem.standardShipRate} = ${eachItem.msrp + eachItem.standardShipRate} - {eachItem.stock}</small>
                </div>

                );
            }))
        } else {
            return "No results found.";
        }
    }
    render(){

        return(
            <React.Fragment>
            <h2>Results</h2>
            <div>
                {this.queryResult()}
            </div>
            </React.Fragment>
        )
    }
}

export default ResultList;