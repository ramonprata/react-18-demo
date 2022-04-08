import React from 'react';
import { ICharacter } from '../../types/Character';

interface CharacterItemProps {
  character: ICharacter
}

const CharacterItem: React.FC<CharacterItemProps> = ({ character }) => {
  return <div className='card' >
    <img src={character.image} alt='character-pic' />
    <div className='text-container'>
      <h3>
        {character.name}
      </h3>
      <p className='status'>
        {character.status} -  {character.species}
      </p>
      <p>
        Last seen on
      </p>
      <p className='title'>
        {character.location.name}
      </p>
    </div>
  </div>
};

export default CharacterItem;