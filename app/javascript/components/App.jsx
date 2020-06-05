import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchList from './SearchList';
import Product from './Product';
import SearchedItems from './SearchedItems';
import Cart from './Cart';



const App = () => {

        const [products, setProducts] = useState([]);

        const [showProduct, setShowProduct] = useState({});
        const [viewStatus, setViewStatus] = useState(false);
        const [searchedProducts, setSearchedProducts] = useState([]);
        const [productInputValue, setInputValue] = useState(null);
        const [displaySearchStatus, setSearchStatus] = useState(false);
        const [cartItems, setCartItems] = useState([]);
        const [cartStatus, setCartStatus] = useState(false);
        const [cartPage, setCartPage] = useState(false)





    useEffect(() => {

        const url = '/products.json';

        const runWhenDone = (res) => {
            const data = res.data;
            setProducts(data);
        }

        const whenError = (error) => {
            console.log('error', error);
        }

        axios.get(url).then(runWhenDone).catch(whenError);


   }, [searchedProducts])


    const handleChange = (event) => {
       setInputValue(event.target.value);
       console.log(productInputValue);
    }

    const searchButton = (event) => {
        const filteredProducts = products
        .filter(product => {
            // console.log(product.name.toLowerCase());
            // console.log(productInputValue);
            return product.name.toLowerCase().includes(productInputValue.toLowerCase());
        })


        // if(filteredProducts.length > 0) {
        //     setSearchedProducts(filteredProducts);
        // }
        // setSearchStatus(!displaySearchStatus);
        console.log('############');
        console.log(filteredProducts)
        console.log('############');
        setProducts(filteredProducts);
    }

    const addToCartClickHandler = (id) => {
        console.log(id);
        console.log(cartItems);
        const index = products.findIndex(p => {
            return p.id === id;

        })

        setCartItems(prevItems => {
            return [...prevItems, products[index]]
        })


            setCartStatus(true);
            setCartPage(!cartPage);


        // console.log('CARTTTTTTTT ITEMS @@@@@@@@@@@@@@')
        // console.log(cartItems);
        // console.log('CARTTTTTTTT ITEMS @@@@@@@@@@@@@@')
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

    function cartPageToggle() {
        setCartPage(false)
    }

    function removeItemFromCart (id) {
            console.log(id);
        // setCartItems((prevItems) => {
        //    return prevItems.filter((item, index) => {
        //         return item.id !== id;
        //     })
        setCartItems(cartItems.filter((item, index) => {
                return item.id !== id;
       })
    )}



       const displayAllProducts = products.map((product, index) =>
            <SearchList
                id={index}
                key={index}
                product={product}
                onChecked={viewHandler}
                clickHandler={addToCartClickHandler}
                />
    )


     const displayProducts = viewStatus === true ?
            <Product
                    img={showProduct.image_url}
                    name={showProduct.name}
                    price={showProduct.price}
                    content={showProduct.description}
                    onToggle={statusToggle}

                /> : displayAllProducts




    const displayButtons = viewStatus === true ?
                    null :
                    <div>
                        <h1 style={{textDecoration: 'underline'}}>Products List</h1>
                        <input name="itemSearch" onChange={handleChange} type="text" placeholder="Search for an item" />
                        <button onClick={searchButton}>Search</button>
                    </div>



    return (
      <div>

          <h1>Shopping React App</h1>
           {cartPage === true && <Cart items={cartItems} onToggle={cartPageToggle} onDelete={removeItemFromCart}/>}
           {!cartPage === true && <> {displayButtons} {displayProducts}</>}

        </div>
        )
}

export default App;