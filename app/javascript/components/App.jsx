import React, { useState } from 'react';
import axios from 'axios';
import Search from './Search';

function App() {

const [products, setProducts] = useState([]);


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


    return (

      <div>
          <h1>Shopping React App</h1>
                <div>

                    <button onClick={getProducts}>Display Products List</button>
                    <h1 style={{textDecoration: 'underline'}}>Products List</h1>
                </div>
                <div>
                    <ul>

                        {products.map((product, index) =>
                            <Search key={index} product={product} />
                            )}
                        </ul>
                </div>

        </div>

        )
}

export default App;