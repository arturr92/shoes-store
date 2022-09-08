import './App.css';
import { Footer } from './components/Footer/Footer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
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
      <ItemDetailContainer />
      <Footer />
    </>
  );
}

export default App;
