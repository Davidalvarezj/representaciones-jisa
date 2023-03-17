import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navmenu from "./Components/Navmenu";
import Jumbo from "./Components/Jumbo";
import Nosotros from "./Components/Nosotros";
import ProductosMet from "./Components/ProductosMet";
import ProductosPlast from "./Components/ProductosPlast";

import Contacto from "./Components/Contacto";
import ProductosTitle from "./Components/ProductosTitle";

function App() {
  const [productState, setProductState] = React.useState(false);
  return (
    <>
      <Jumbo />
      <Navmenu />
      <Nosotros />
      <ProductosTitle
        productState={productState}
        setProductState={setProductState}
      />
      {productState ? <ProductosMet /> : <ProductosPlast />}

      <Contacto />
    </>
  );
}

export default App;
