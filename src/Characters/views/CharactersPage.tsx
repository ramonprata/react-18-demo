import React, { useCallback, useState, useTransition } from 'react';
import { usePromise } from '../../shared/hooks/usePromise';
import CharacerManager from '../services/CharacerManager';
import { filterCharacters } from '../charactersUtils';
import CharactersList from './CharactersList';

const Manager = new CharacerManager();

interface CharactersProps { }

const CharactersPage: React.FC<CharactersProps> = () => {
  const [inputText, setInputText] = useState('');
  const [searchText, setSearchText] = useState('');
  const [isPending, startTransition] = useTransition();

  const loadData = useCallback(() => {
    return Manager.getCharacters();
  }, [])

  const { data: characters, loading, error, done, success } = usePromise(loadData);

  const handleUpdateText = (event: { target: { value: string } }) => {
    setInputText(event.target.value);
    startTransition(() => {
      setSearchText(event.target.value)
    });
  }

  const filteredCharacters = filterCharacters(characters, searchText);

  if (error) {
    return <div>ERROR</div>
  }

  const shouldRenderContent = done && success;

  return (
    <div style={{ padding: 0 }}>
      <input
        type='text'
        value={inputText}
        onChange={handleUpdateText}
        placeholder='Seach your favorite character' />

      <p>Results: {isPending ? 'Searching..' : filteredCharacters.length}</p>

      <div className='content'>
        {
          shouldRenderContent ?
            <CharactersList characters={filteredCharacters} /> :
            <p className='feedback'>LOADING...</p>
        }
      </div>

    </div>)
};

export default CharactersPage;
