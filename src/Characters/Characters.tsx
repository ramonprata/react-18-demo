import React, { useCallback, useState } from 'react';
// import { ICharacter } from '../types/Character';

import * as APIService from './services/CharactersAPI';
import CharacterItem from '../CharacterItem/CharacterItem';
import { ICharacterInfo } from '../types/ICharacterInfo';
import Controls from '../Controls/Controls';
import { ICharacter } from '../types/Character';
import { usePromise } from '../shared/hooks/usePromise';
import CharacerManager from './services/CharacerManager';
import { filterCharacters } from './charactersUtils';

const Manager = new CharacerManager();

interface CharactersProps { }

const Characters: React.FC<CharactersProps> = () => {
  const [searchText, setSearchText] = useState('');

  const loadData = useCallback(() => {
    return Manager.getCharacters();
  }, [])

  const { data: characters, loading, error } = usePromise(loadData);

  if (error) {
    return <div>ERROR</div>
  }


  const filteredCharacters = filterCharacters(characters, searchText);

  return (
    <div style={{ padding: 0 }}>

      <input type='text' value={searchText} onChange={(e) => setSearchText(e.target.value)} placeholder='Seach your favorite character' />
      <p>Results: {filteredCharacters.length}</p>
      <div className='content'>

        {
          loading ? <h6 className='feedback'>LOADING...</h6> :
            <div className='characters'>
              {filteredCharacters?.map((character: ICharacter, idx) => (
                <CharacterItem character={character} key={`${character.name}-${idx}`} />
              ))}
            </div>
        }
      </div>

    </div>)
};

export default Characters;
