import AppContainer from './components/AppContainer';
import {Navbar} from './components/Navbar';
import './styles/styles.scss';
import Banner from './components/Banner';
import Footer from './components/Footer';
import { AiFillAlert, AiFillCarryOut } from "react-icons/ai";
import Button from './components/Button';

function App() {
      return (
            <div className="App">
                  <Navbar /> 
                  <div><img src="http://coder.comnic.com.ar/img/top-index.jpg" alt="top-index" class="top"/></div>
                  <main className="content"> 
                  <AppContainer />
                  </main>
                  <Banner promocion="ÚNETE AL CLUB Y CONSIGUE UN 35% DE DESCUENTO" boton="unete" onClick={() => console.log("click en unete")}/>
                  <Footer />
            </div>
      );
}

export default App;
