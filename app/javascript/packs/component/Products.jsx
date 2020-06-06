import React, { useState } from "react";
import Search from "./search";
import Calculator from "./calculate";
import axios from "axios";
import Cart from "./cart";

function Products() {
  const [product, setProduct] = useState({
    cart: [],
    search_results: [],
    selected_product: null,
    quantity: "",
  });

  function searchInputChage(event) {
    var newInput = event.target.value;
    // setProduct({ name: newInput });
    console.log(product.name);

    const url = "/search";
    axios
      .post(url, { search: newInput })
      .then((data) => {
        // const data = response.data;
        // console.log(data);
        setProduct((prevVal) => {
          return {
            ...prevVal,
            search_results: [...data.data.products],
          };
        });
      })

      .catch((error) => {
        console.log(error);
      });

    console.log(product.search_results);
  }

  function clickOnItem(event) {
    event.preventDefault();

    const id = event.target.getAttribute("data-id");
    const activeProduct = product.search_results.filter((item) => {
      return item.id == parseInt(id);
    });

    setProduct((prevVal) => {
      return {
        ...prevVal,
        selected_product: activeProduct[0],
        search_results: [],
      };
    });
    console.log(`this is ${product.quantity}`);
  }

  function addToCart(event) {
    event.preventDefault();

    var theProduct = product.selected_product;
    var theQuantity = product.quantity;

    const url = "/calculate";
    axios
      .post(url, { id: theProduct.id, quantity: theQuantity })
      .then((data) => {
        // const data = response.data;
        console.log(data);

        setProduct((prevVal) => {
          return {
            ...prevVal,
            cart: [data.data],
            // cart: [product.cart.push(data.data)],
            quantity: "",
            selected_product: null,
          };
        });
        console.log(`this is now in cart ${product.cart}`);
        console.log(product);
      })

      .catch((error) => {
        console.log(error);
      });

    // console.log(product);
  }

  function quantityChange(event) {
    console.log(event.target.name);
    var newQuantity = event.target.value;
    const { name, value } = event.target;
    setProduct((prevVal) => {
      return { ...prevVal, quantity: newQuantity };
    });
    console.log(`this is ${product.quantity}`);
  }

  const isProductSelected = product.selected_product ? (
    <Calculator
      selectedProduct={product.selected_product}
      addCart={addToCart}
      quantityInputChange={quantityChange}
      quantity={product.quantity}
    />
  ) : (
    <Search
      clickItem={clickOnItem}
      searchChange={searchInputChage}
      searchResults={product.search_results}
    />
  );

  return (
    <div>
      {isProductSelected}
      <Cart cartFromProduct={product.cart} />
    </div>
  );
}

export default Products;
