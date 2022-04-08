import React, { useCallback, useEffect, useState, useTransition } from 'react';

import { ICharacter } from '../../types/Character';
import { usePromise } from '../../shared/hooks/usePromise';
import CharacerManager from '../services/CharacerManager';
import { filterCharacters } from '../charactersUtils';
import CharactersList from './CharactersList';

const Manager = new CharacerManager();

interface CharactersProps { }

const CharactersPage: React.FC<CharactersProps> = () => {
  const [searchText, setSearchText] = useState('');
  const [filteredCharacters, setList] = useState<ICharacter[]>([]);
  const [isPending, startTransition] = useTransition();

  const loadData = useCallback(() => {
    return Manager.getCharacters();
  }, [])

  const { data: characters, loading, error, done } = usePromise(loadData);

  const handleUpdateText = (event: { target: { value: string } }) => {
    setSearchText(event.target.value)
  }

  useEffect(() => {
    if (done) {
      const filtered = filterCharacters(characters, searchText);
      startTransition(() => {
        setList(filtered)
      })
    }
  }, [searchText, done]);

  if (error) {
    return <div>ERROR</div>
  }


  return (
    <div style={{ padding: 0 }}>

      <input type='text' value={searchText} onChange={handleUpdateText} placeholder='Seach your favorite character' />
      <p>Results: {filteredCharacters.length}</p>
      <div className='content'>
        {loading ? <h6 className='feedback'>LOADING...</h6> :
          <CharactersList characters={filteredCharacters} />
        }
      </div>

    </div>)
};

export default CharactersPage;
