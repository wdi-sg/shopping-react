import React from 'react';
// import styles from './style.scss';
import PropTypes from 'prop-types';
var decode = require('decode-html');

class Results extends React.Component {

    mappedResults(){
        console.log(this.props.results)
        if (this.props.results && this.props.results.data.items && this.props.results.data.items.length > 0){
            return this.props.results.data.items.map((result, index) => {
                return (
                    <Result 
                        result={ result }
                        key={ index + result }
                    />
                )
            });
        } else if(this.props.results) {
            return (
                <div>
                    { this.props.results.data.message }
                </div>
            )
            
        } else {
            return (
                <div>
                    No searches done yet
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

    getShortDescription(){
        if (!this.props.result.shortDescription){
            return
        }

        if (this.props.result.shortDescription.length > 200){
            return decode(this.props.result.shortDescription.substring(0,200)) + "...";
        }
        return decode(this.props.result.shortDescription);
    }

    getReviews(){
        if (!this.props.result.numReviews){
            return "No reviews"
        } else {
            return "Reviews: " + this.props.result.numReviews
        }
    }

    getRating(){
        if(!this.props.result.numReviews){
            return 
        } else {
            return (
                <React.Fragment>
                    <img src={ this.props.result.customerRatingImage }/>
                    <small>{ parseFloat(this.props.result.customerRating).toFixed(2) }</small>
                </React.Fragment>
            )
        }
    }

    getPriceAndAvailability(){
        if (!this.props.result.availableOnline){
            return (
                <p className="mb-0 text-danger">
                    <strong>NOT AVAILABLE ONLINE</strong>
                </p>
            )
        } else if(this.props.result.salePrice){
            return (
                <strong>{'$' + this.props.result.salePrice.toFixed(2)}</strong>
            )
        } else {
            return
        }
    }

    render() {
        return (
            <div className="d-flex mt-5 mb-5">
                <div className="w-20 mr-3">
                    <img src={ this.props.result.thumbnailImage }/>
                </div>
                <div>
                    <h5>{ this.props.result.name }</h5>
                    { this.getPriceAndAvailability() }
                    <div>
                        { this.getRating() }
                    </div>
                    <small>{ this.getReviews() }</small>
                    <p>{ this.getShortDescription() }</p>
                </div>
            </div>
        )
    }
}

Result.propTypes = {
    result: PropTypes.object
};

export default Results;