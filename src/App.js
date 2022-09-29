import './App.css';
import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Footer } from './components/Footer/Footer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer"; 
import { NavBar } from "./components/NavBar/NavBar"; 
import {Cart} from './components/Cart/Cart';
import { CartProvider } from './context/CartContext';


function App() {
  return (
    <>
      <Router>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer 
            greeting = "Bienvenidos a Sneakers Addict!"
            text = "center"
            size = "4rem"
            />} />
            <Route path='/categoria/:categoriaId' element={<ItemListContainer />} />
            <Route path='/detalle/:detailId' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
          <Footer />
        </CartProvider>  
      </Router>
    </>
  );
}

export default App;
