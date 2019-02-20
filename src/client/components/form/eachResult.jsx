import React from 'react';
import styles from './style.scss';

class ResultList extends React.Component {
    constructor(){
        super();
        this.queryResult = this.queryResult.bind(this);
    }

    queryResult() {
        // console.log(this.props.resultList);
        if (this.props.resultList.length > 0 ) {
            return ( this.props.resultList.map(eachItem => {
                return (
                <div className={styles.eachItem}>
                    <h6>{eachItem.categoryPath}</h6>
                    <div>
                        <img src={eachItem.thumbnailImage}/>
                        <h5>{eachItem.name} ( {eachItem.customerRating} / 5 &#9734; )</h5>
                    </div>
                    <div>{eachItem.shortDescription.substring(0, 200) +  "..."}</div>
                    <small>MSRP: ${eachItem.salePrice}</small><br/>
                    <small>Availability - {eachItem.stock}</small>
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
                {this.queryResult()}
            </React.Fragment>
        )
    }
}

export default ResultList;