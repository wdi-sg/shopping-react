import React, { useState } from 'react';
import axios from 'axios';
import Search from './Search';
import Product from './Product';



function App() {

const [products, setProducts] = useState([]);
const [viewStatus, setViewStatus] = useState(false);
const [showProduct, setShowProduct] = useState({});

   function getProducts() {

        const url = '/products.json';

        const runWhenDone = (res) => {
            const data = res.data;
            setProducts(data);
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

    return (
      <div>
          <h1>Shopping React App</h1>
                { viewStatus === true ?
                    null :
                    <div>
                        <button onClick={getProducts}>Display Products List</button>
                        <h1 style={{textDecoration: 'underline'}}>Products List</h1>
                    </div>
                }

            <div>
            { viewStatus === true ?
                     <Product img={showProduct.image_url}
                        name={showProduct.name}
                        price={showProduct.price}
                        content={showProduct.description}
                        onToggle={statusToggle}
                        />
                        :
                        <ul>
                            {products.map((product, index) =>
                            <Search
                            id={index}
                            key={index}
                            product={product}
                            onChecked={viewHandler}
                            />
                            )}
                        </ul>
                    }
                </div>
        </div>
        )
}

export default App;