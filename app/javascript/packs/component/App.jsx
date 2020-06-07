import React, { useState } from "react";
import Products from "./Products";
import axios from "axios";

const csrfToken = document.querySelector('[name="csrf-token"]').content;
axios.defaults.headers.common["X-CSRF-TOKEN"] = csrfToken;

function App() {
  return (
    <div>
      <Products />
    </div>
  );
}

export default App;
