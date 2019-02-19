import React from 'react';
// import styles from './style.scss';
import PropTypes from 'prop-types';
var decode = require('decode-html');

class Results extends React.Component {

    mappedResults(){
        if (this.props.results){
            return this.props.results.data.items.map((result, index) => {
                return (
                    <Result 
                        result={ result }
                        key={ index + result }
                    />
                )
            });
        } else {
            return (
                <div>
                    No results
                </div>
            )
        }
    }

    render() {
        return (
            <div className="w-100">
                { this.mappedResults() }
            </div> 
        );
    }
}

class Result extends React.Component {

    modifyShortDescription(){
        if (!this.props.result.shortDescription){
            return
        }

        if (this.props.result.shortDescription.length > 200){
            return decode(this.props.result.shortDescription.substring(0,200)) + "...";
        }
        return decode(this.props.result.shortDescription);
    }

    render() {
        return (
            <div className="d-flex mt-5 mb-5">
                <div className="w-20 mr-3">
                    <img src={ this.props.result.thumbnailImage }/>
                </div>
                <div>
                    <h5>{ this.props.result.name }</h5>
                    <div>
                        <img src={ this.props.result.customerRatingImage }/>
                        <small>{ this.props.result.customerRating }</small>
                    </div>
                    <small>Reviews: { this.props.result.numReviews }</small>
                    <p>{ this.modifyShortDescription() }</p>
                </div>
            </div>
        )
    }
}

Result.propTypes = {
    result: PropTypes.object
};

export default Results;