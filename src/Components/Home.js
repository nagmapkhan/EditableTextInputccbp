
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCharacters } from './store/starWarsSlice';

const Home = () => {
  const dispatch = useDispatch();
  const { characters, loading, error } = useSelector((state) => state.starWars);

  useEffect(() => {
    dispatch(fetchCharacters(1)); // Fetch first page on mount
  }, [dispatch]);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Star Wars Characters</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {characters.map((character) => (
          <div key={character.name} className="p-4 bg-white rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">{character.name}</h2>
            <p>Height: {character.height}</p>
            <p>Mass: {character.mass}</p>
            <p>Hair Color: {character.hair_color}</p>
            <p>Skin Color: {character.skin_color}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
