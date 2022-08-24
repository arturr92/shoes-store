import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";


function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer 
        greeting = "Bienvenidos a Shoes Store!"
        color = "#1B4F72"
        text = "center"
        size = "4rem"
      />
    </>
  );
}

export default App;
