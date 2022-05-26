import React from 'react';
import CharacterItem from './CharacterItem';
import { ICharacter } from '../../types/Character';

interface CharactersListProps {
  characters: ICharacter[]
}

const CharactersList: React.FC<CharactersListProps> = ({ characters }) => {

  return (
    <div className='characters'>
      {characters?.map((character: ICharacter, idx) => (
        <CharacterItem character={character} key={`${character.name}-${idx}`} />
      ))}
    </div>
  )
};

export default CharactersList;
