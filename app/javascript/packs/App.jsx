import React from 'react';
import Product from './Product/Product';
import Search from './Search/Search';

class App extends React.Component {

    render() {

        return (
            <div>
                <h1>Shopping</h1>
                <Search />
                <Product />
            </div>
        );
    }

}

export default App;