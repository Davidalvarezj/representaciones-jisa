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
  const [ShowPlasticos, setShowPlasticos] = React.useState(true);
  const [ShowMetalicos, setShowMetalicos] = React.useState(false);
  console.log("ShowPlasticos: ", ShowPlasticos);
  console.log("ShowMetalicos: ", ShowMetalicos);
  return (
    <>
      <Jumbo />
      <Navmenu />
      <Nosotros />
      <ProductosTitle
        setShowPlasticos={setShowPlasticos}
        setShowMetalicos={setShowMetalicos}
        ShowPlasticos={ShowPlasticos}
        ShowMetalicos={ShowMetalicos}
      />

      {ShowPlasticos ? (
        <>
          <ProductosPlast />
        </>
      ) : (
        <ProductosMet />
      )}

      <Contacto />
    </>
  );
}

export default App;
