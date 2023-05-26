import Button from 'react-bootstrap/Button';
import '../assets/css/pokemones.css'
import { useEffect, useState} from 'react';
import { useNavigate} from 'react-router-dom';

export default function Pokemones() {
    const [pokemones, setPokemones] = useState([]);
    const [name, setName] = useState("");

    useEffect(() => {
        apiResults();

    }, []);

    const apiResults = async () => {
        const url = "https://pokeapi.co/api/v2/pokemon/";
        const response = await fetch(url)
        const {results} = await response.json()
        setPokemones(results);
        console.log(pokemones)
    }

    const navigate = useNavigate();    // Uso de useNavigate para cumplir requerimiento del desafio
    const irAPokemon = () => {
        navigate(`/pokemones/${name}`)  
      }

    return (   
        <div className="text-center pt-5 gap-3">
            <h3>Selecciona un pokemón</h3>
            <br />
            <select name="pokemones" id="format-select" value={name} onChange={({target})=>(setName(target.value))}>
                <option value="Pokemones">Pokemones</option>
                {pokemones.map((elemento) =>
                    <option key="elemento.name" value={elemento.name}>{elemento.name}</option>
                )
                }
            </select>
            <br />
            <br />
            <Button variant="secondary" onClick={irAPokemon}>Ver Detalle</Button>
        </div>
    )
}