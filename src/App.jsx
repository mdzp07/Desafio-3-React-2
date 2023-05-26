import 'bootstrap/dist/css/bootstrap.min.css';
import Encabezado from './components/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";

// importando vistas

import Home from './views/Home';
import Pokemones from './views/Pokemones';
import DetallePokemon from './views/Detalle';

function App() {
  return (
    <>
      <BrowserRouter>
        <Encabezado />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemones/" element={<Pokemones />} />
          <Route path="/pokemones/:name" element={<DetallePokemon />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
