import './App.css';
import CharactersPage from './Characters/views/CharactersPage';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <h1>{`Ricky & Morty`}</h1>
        <CharactersPage />
      </div>
    </div>
  );
}

export default App;
