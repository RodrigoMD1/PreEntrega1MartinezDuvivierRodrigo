
import './App.css';
import NavBar from './Components/navbar/Navbar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css'
import HeroSection from './Components/HeroSection/HeroSection';
import ItemCount from './Components/ItemCount/ItemCount';


function App() {
  return (
    <div className="App">
     <HeroSection />
      <NavBar />
      <ItemListContainer greeting={'bievenidos'}/>
      <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('cantidad agregada',quantity)}/>
      
    </div>
  );
}

export default App;
