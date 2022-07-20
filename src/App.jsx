import { useContext } from 'react';
import './App.css';
import ComponenteHijo from "./componentes/ComponenteHijo";
import {GlobalContext} from "./context/global/global.context";
import mifoto from '../src/assets/mifoto.jpeg';
import {FaDropbox, FaStripe, FaGithub,} from 'react-icons/fa'; 


function App() {
  const { add, substract} = useContext (GlobalContext);
 
  return (
    <div className="App">
      <div className='menu'>
        <nav className='nav'>
           <ul>
            <li><a className='me' href='#'>Home</a></li>
            <li><a className='me' href='#'>Español</a></li>
            <li><a className='me' href='#'>Ingles</a></li>
          </ul>
        </nav>
      </div>
      <div className='img'>
          <img src={mifoto}
        />
        </div>
        <br/>
      <header className="App-header">
        <h1 className='titulo'>Guadalupe del Rocio Gonzalez Limon</h1>
        <br/>
        <p className='parrafo'>A mi me gusta escuchar musica, leer, ver peliculas y series, cuando termine la carrera,
         espero poder trabajar como desarrolladora y seguir aprendiendo mas cosas sobre la carrera</p>
        <br/> 
        <button  className=' btn'
          style={{
            padding:'2%',
            width: "13vn", 
            backgroundColor:"rgb(64, 255, 47)", 
            cursor: "pointer",
            margin:"1vn"
            
          }} 
          onClick={add}>Contar vistas > </button>
        
        <ComponenteHijo />

            <a className='icon' href='#'><FaDropbox/></a>
            <a className='icon' href='#'><FaStripe/></a>
            <a className='icon' href='#'><FaGithub/></a>
            
      </header>
      
    </div>
  );

}



export default App;
