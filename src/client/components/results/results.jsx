import React from 'react';
// import styles from './style.scss';
// import PropTypes from 'prop-types';

class Results extends React.Component {

    sortResults(){
        if (this.props.results){
            console.log(this.props.results.data.items)
            return this.props.results.data.items.map(result => {
                return (
                    <div className="d-flex mt-5 mb-5">
                        <div className="w-20 mr-3">
                            <img src={ result.thumbnailImage }/>
                        </div>
                        <div>
                            <h5>{ result.name }</h5>
                            <div>
                                <img src={ result.customerRatingImage }/>
                                <small>{ result.customerRating }</small>
                            </div>
                            <small>Reviews: {result.numReviews}</small>
                            <p>{ result.shortDescription }</p>
                        </div>
                    </div>
                )
            });
        }
        return "no results"
    }

    render() {
        return (
            <div className="w-100">
                { this.sortResults() }
            </div> 
        );
    }
}

// Form.propTypes = {
//     search: PropTypes.func
// };

export default Results;