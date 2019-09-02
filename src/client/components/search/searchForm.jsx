import React from 'react';
// import PropTypes from 'prop-types';


class SearchForm extends React.Component{

    changeHandler(){
        this.props.changeHandler();
    }

    render(){
        // console.log("SEARCHED PRODUCTS:", this.props.products)
        return(
            <div>
                <input onChange={()=>{this.changeHandler()}}/>
                <p>test</p>
            </div>
    )}
}

// SearchForm.propTypes = {
//   products: PropTypes.object.isRequired,
// };

export default SearchForm;