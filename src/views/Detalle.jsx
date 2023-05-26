import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function DetallePokemon() {

    const { name } = useParams(); // Uso de useParams para cumplir requerimiento del desafio
    const [pokemones, setPokemones] = useState({});
    const url = "https://pokeapi.co/api/v2/pokemon";

    const apiResults = async (name) => {
        const response = await fetch(`${url}/${name}`)
        const data = await response.json()
        const src = data.sprites.other.dream_world.front_default;
        const height = (data.height)*10; // Hago la conversion de decimetros a centimetros segun documentacion de la API
        const weight = (data.weight)*10; // Hago la conversion de hectogramos a miligramos segun documentacion de la API
        const experience = data.base_experience;
        setPokemones({ src, height, weight, experience });
    }

    useEffect(() => {
        apiResults(name);
    }, [name]);

    return (
        <div>
            <h1 className="text-center mt-3 mb-3">Pokemon seleccionado:</h1>
            <div className="d-flex ms-4 mt-5 gap-4 justify-content-center">
                <img src={pokemones.src} alt="" height="340" width="340"/>
                <div className="mt-5 pt-5">
                    <h3>Nombre: {name[0].toUpperCase() + name.substring(1)}</h3>
                    <h3>Altura: {pokemones.height} cm</h3>
                    <h3>Peso: {pokemones.weight} gr </h3>
                    <h3><strong className="text-warning">{pokemones.experience} puntos de experiencia</strong> por derrotar a este pokemon</h3>
                </div>
            </div>


        </div>
    )
}