import React from 'react';
import Result from '../result/result';

import styles from './styles.scss';

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
                    this.props.products.length > 1 ?
                    (
                        <Result
                            sortProductByPriceHandler= { () => { this.props.sortProductByPriceHandler() } }
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