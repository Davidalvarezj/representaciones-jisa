import logo from './logo.svg';
import './App.css';
import Navmenu from "./Components/Navmenu";
import Jumbo from './Components/Jumbo';
import Nosotros from "./Components/Nosotros";
import Productos from './Components/Productos';
import Footer from './Components/Footer';
import Contacto from './Components/Contacto';



function App() {
  return (
    <>
      <Jumbo />
      <Navmenu />
      <Nosotros />
      <Productos />
      <Contacto />
      <Footer />
    </>
  );
}

export default App;
