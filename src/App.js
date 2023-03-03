import Navbar from './Navbar';
import ListPokemons from './ListPokemos';



function App() {
  return (
    <div>
      <Navbar title="PokeApi" />
      <div className='container'>
      <ListPokemons />
      </div>
    </div>
  );
}

export default App;
