import { ICharacterInfo } from '../../types/ICharacterInfo';

export const fetchCharacters = async (): Promise<ICharacterInfo['results']> => {
  const responses = await (await fetch('http://localhost:5000/api/characters')).json();
  return responses;
};
