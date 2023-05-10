
import './App.css';
import NavBar from './Components/navbar/Navbar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css'
import HeroSection from './Components/HeroSection/HeroSection';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Formulario from './Components/FooterSection/Footer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <BrowserRouter>
    <CartProvider>
    
      <div className="App">

        <HeroSection />
        <NavBar />


        <Routes>

          <Route path='/' element={<ItemListContainer greeting='bievenidos' />} />
          <Route exact path='/Footer' element={<Formulario />} />
          <Route path='/item/:itemId' element={<ItemDetailContainer />} />

        </Routes>
      </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;