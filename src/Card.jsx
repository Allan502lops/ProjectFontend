import { useEffect, useState } from 'react';
import axios from 'axios';


export default function Card({ pokemon }) {
  const [onePokemon, setOnePokemon] = useState({
    name: "",
    sprites: { front_default: '' }
  });
  const [isCardPressed, setIsCardPressed] = useState(false);

  useEffect(() => {
    getPokemon(pokemon.url);
  }, [pokemon.url]);

  const getPokemon = (url) => {
    axios.get(url)
      .then((response) => {
        setOnePokemon(response.data)
      })
  };

  const handleCardClick = () => {
    setIsCardPressed(!isCardPressed);
  }

  return (
    <div className={`card m-3 ${isCardPressed && "bg-primary text-black"}`} style={{ width: '18rem', cursor: 'pointer' }} onClick={handleCardClick}>
  <div className="card-zoom">
    {isCardPressed ? (
      <div>
        <img src={onePokemon.sprites.front_default} className="card-img-top" alt={`Imagen de ${onePokemon.name}`} style={{ maxHeight: '150px', objectFit: 'contain' }} />
        <div className="card-body">
          <h5 className="card-title">{onePokemon.name}</h5>
          <p className="card-text"><strong>Tipo:</strong> {onePokemon.types && onePokemon.types[0].type.name}</p>
          <p className="card-text"><strong>Altura:</strong> {onePokemon.height / 10} m</p>
          <p className="card-text"><strong>Peso:</strong> {onePokemon.weight / 10} kg</p>
          <p className="card-text"><strong>Habilidad:</strong> {onePokemon.abilities && onePokemon.abilities[0].ability.name}</p>
          <p className="card-text"><strong>Stats:</strong></p>
         
         
          {onePokemon.stats && onePokemon.stats.map((stat) => (
            <div className="progress mb-2" key={stat.stat.name}>
              <div className="progress-bar bg-success" role="progressbar" style={{ width: `${stat.base_stat}%` }} aria-valuenow={stat.base_stat} aria-valuemin="0" aria-valuemax="100">{stat.stat.name}: {stat.base_stat}</div>
            </div>
          ))}

          
        </div>
        <div className="card-footer">
          <small className="text">Número Pokemon: {onePokemon.id}</small>
        </div>
      </div>
    ) : (
      <img src={onePokemon.sprites.front_default} className="card-img-top" alt='..' style={{ maxHeight: '200px' }} />
    )}
  </div>
</div>

  );
}