import React from 'react';
import Result from '../result/result';

class Search extends React.Component {
    render() {
        return (
            <div>
                <form onKeyUp={ (e) => { this.props.searchProductsHandler(e) } }>
                    <h4>Search:</h4>
                    <input type="text" className="form-control"/>
                </form>

                <br/>
                {
                    this.props.products.length > 0 ?
                    (
                        <Result
                            sortProductByPriceAscHandler= { () => { this.props.sortProductByPriceAscHandler() } }
                            sortProductByPriceDescHandler= { () => { this.props.sortProductByPriceDescHandler() } }
                            selectProductHandler= { (e) => { this.props.selectProductHandler(e) } }
                            products={ this.props.products }
                        />
                    ) : (<label>No search result</label>)
                }
            </div>
        );
    }
}

export default Search;