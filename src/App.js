import './App.css';
import { Footer } from './components/Footer/Footer';
import { ItemDetail } from './components/ItemDetail/ItemDetail';
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer"; 
import { NavBar } from "./components/NavBar/NavBar"; 


function App() {
  return (
    <>
      <NavBar />
      {/* <ItemListContainer 
        greeting = "Bienvenidos a Sneakers Addict!"
        text = "center"
        size = "4rem"
      /> */}
      <ItemDetail />
      <Footer />
    </>
  );
}

export default App;
