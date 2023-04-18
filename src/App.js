
import './App.css';
import NavBar from './Components/navbar/Navbar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css'
import HeroSection from './Components/HeroSection/HeroSection';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Formulario from './Components/FooterSection/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
       
        <HeroSection />
        <NavBar />
        <ItemListContainer greeting={'bievenidos'} />
        <Routes>
          <Route exact path='/Footer' element={<Formulario />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;