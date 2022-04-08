import React, { useDeferredValue } from 'react';
import CharacterItem from './CharacterItem';
import { ICharacter } from '../../types/Character';
import CharacerManager from '../services/CharacerManager';

const Manager = new CharacerManager();

interface CharactersListProps {
  characters: ICharacter[]
}

const CharactersList: React.FC<CharactersListProps> = ({ characters }) => {
  const deferredCharacters = useDeferredValue(characters);
  return (
    <div className='characters'>
      {deferredCharacters?.map((character: ICharacter, idx: number) => (
        <CharacterItem character={character} key={`${character.name}-${idx}`} />
      ))}
    </div>
  )
};

export default CharactersList;
