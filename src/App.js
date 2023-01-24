import './App.css';
import Navbar from './components/Navbar';
import Offerzone from './components/Offerzone';
import Subnav from './components/Subnav';
import Label from './components/Label'; 
import Deals from './components/Deals';
import Items from './components/Items';
import Babesitems from './components/Babesitems';
import Product from './components/Product';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar/>
      <Subnav/>
      <Offerzone/>
       <Label/>
       <Deals/>
       <Items/>
       <Babesitems/>
       <Footer/>
    </div>
  );
}

export default App;
