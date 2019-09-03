import React from 'react';
// import PropTypes from 'prop-types';


class SearchResults extends React.Component{

    returnResults(){
        console.log('returning results')
        console.log(this.props.products[0])
        // for(let i=0; i<5; i++){
        //     return(
        //         <p>{this.props.products[i].name}</p>
        // )};
    }

    render(){
        // console.log("RESULT PRODUCTS PRODUCTS:", this.props.products);

        // let results = this.props.products.slice(0, 5).map((result)=>{
        //     return(
        //     <p>result</p>
        //     )
        // })
        return(
            <div>
                {this.returnResults()}
                <p>test results</p>
                }
            </div>
    )}
}

// SearchForm.propTypes = {
//   products: PropTypes.object.isRequired,
// };

export default SearchResults;