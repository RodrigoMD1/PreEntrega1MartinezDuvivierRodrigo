import logo from './logo.svg';
import './App.css';
import NavBar from './Components/navbar/Navbar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css'
import HeroSection from './Components/HeroSection/HeroSection';



function App() {
  return (
    <div className="App">
     <HeroSection />
      <NavBar />
      <ItemListContainer greeting={'bievenidos'}/>
    </div>
  );
}

export default App;
