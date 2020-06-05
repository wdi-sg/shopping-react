import React, { useState } from 'react';
import axios from 'axios';
import SearchList from './SearchList';
import Product from './Product';



function App() {

        const [products, setProducts] = useState([]);
        const [showProducts, setShowProducts] = useState(false);
        const [viewStatus, setViewStatus] = useState(false);
        const [showProduct, setShowProduct] = useState({});
        const [findProduct, setFindProduct] = useState("");
        const [productFound, setProductFound] = useState(false);
        const [noResult, setResult] = useState("");
        const [someText, setText] = useState('some text');

   function getProducts() {

        const url = '/products.json';

        const runWhenDone = (res) => {
            const data = res.data;
            setProducts(data);
            setShowProducts(!showProducts);
            console.log(showProducts);
        }

        const whenError = (error) => {
            console.log('error', error);
        }

        axios.get(url).then(runWhenDone).catch(whenError);

    }

    function viewHandler(id) {

        const index = products.findIndex(p => {
            return p.id === id;
        })
        setShowProduct(products[index])
        setViewStatus(!viewStatus);
    }
        // console.log(showProduct);
        // console.log(viewStatus);

    function statusToggle() {
        setViewStatus(!viewStatus);
    }

    function searchHandler(event) {
        const itemSelection = event.target.value;
        setFindProduct(itemSelection);

    }

    const displayStatus = productFound ? {someText} : 'Not found';

    function searchClick() {
        console.log(findProduct + ' PRODUCT SEARCH');

        products.map(product => {
            if(product.name === findProduct) {
                setProductFound(!productFound);
                console.log(productFound);
                console.log(product.name + ' MATCHING PRODUCT');
                setFindProduct("");
                setProductFound(!productFound);
                return;
            } else {
                setResult('Sorry, there are no matches for your search');
                setProductFound(!productFound);
                setFindProduct("");
            }
        })
    }

    const displaySearchList = viewStatus === true ?
            <Product
                    img={showProduct.image_url}
                    name={showProduct.name}
                    price={showProduct.price}
                    content={showProduct.description}
                    onToggle={statusToggle}
                />
                        :
            <ul>
            {   showProducts === true ?
                    products.map((product, index) =>
                    <SearchList
                        id={index}
                        key={index}
                        product={product}
                        onChecked={viewHandler}
                    />
                    ) : null
                    }
                </ul>

    const displayButtons = viewStatus === true ?
                    null :
                    <div>
                        <button onClick={getProducts}>Display Products List</button>
                        <h1 style={{textDecoration: 'underline'}}>Products List</h1>
                        <input name="itemSearch" onChange={searchHandler}type="text" placeholder="Search for an item" value={findProduct} />
                        <button onClick={searchClick}>Search</button>
                    </div>

    return (
      <div>
          <h1>Shopping React App</h1>
            {displayButtons}
            {displaySearchList}
        </div>
        )
}

export default App;