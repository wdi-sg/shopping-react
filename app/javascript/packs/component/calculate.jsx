import React, { useState } from "react";

function Calculator(props) {
  const [calculator, setCalculator] = useState("");

  return (
    <div>
      <h1>{props.selectedProduct.name}</h1>
      <img src={props.selectedProduct.img_url}></img>

      <h3>How many {props.selectedProduct.name} do you want to buy?</h3>
      <form
        onSubmit={() => {
          props.addCart(event);
        }}
      >
        <div className="form-group">
          <label>Enter quantity here:</label>
          <br />
          <input
            onChange={() => {
              props.quantityInputChange(event);
            }}
            autoComplete="off"
            type="text"
            name="quantity"
            placeholder="Enter number only"
            value={props.quantity}
            className="field"
          />
        </div>
        <div className="form-group">
          <input
            type="submit"
            className="calculate-btn"
            value="Add to Cart"
          ></input>
        </div>
      </form>
    </div>
  );
}
export default Calculator;
