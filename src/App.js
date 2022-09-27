import logo from './logo.svg';
import './App.css';
import axios from 'axios'


function App() {

  state = {
    ruta: 'lista',
  }


  const { ruta } = state;

  return (
    <div className="App">
      {ruta === 'lista' && <Cabecera />}
      {ruta === 'formulario' && <Formulario />}
    </div>
  );
}

export default App;
