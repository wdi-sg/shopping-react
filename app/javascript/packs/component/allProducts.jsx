import React from "react";
import axios from "axios";

function AllProducts() {
  const [products, setProducts] = useState([]);

  function getProducts() {
    const url = "/products.json";

    axios
      .get(url)
      .then((response) => {
        const data = response.data;
        console.log(data);
        // setProducts(data);
      })

      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div>
      <h1>Products from React</h1>
      {products.map((eachProduct) => {
        return (
          <div>
            <h3>{eachProduct.name}</h3>
            <p>{eachProduct.price}</p>
            <img src={eachProduct.image_URL} />
            <p>{eachProduct.description}</p>
          </div>
        );
      })}
      <button onClick={getProducts}>All products</button>
    </div>
  );
}

export default AllProducts;
