import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from "react-router-dom";
import '../assets/css/navbar.css'

export default function Encabezado() {
  const setActiveClass=({isActive})=>(isActive ? "active" : "notActive");
  return (
    <>
      <Navbar bg="secondary" variant="dark">
        <Container>
          <Navbar.Brand>
            <img
              alt=""
              src="public\img\logo.png"
              width="45"
              height="50"
            />
          </Navbar.Brand>
          <Nav className='gap-3'>
             <NavLink to="/" className={setActiveClass}> Home </NavLink> {/* Uso de NavLink y Active para cumplir requerimiento del desafio */}
            <NavLink to="/pokemones" className={setActiveClass}> Pokemones </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}