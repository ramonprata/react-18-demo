import { objectMatchText } from '../shared/utils/utilityFunctions';
import { ICharacter } from '../types/Character';

export const filterCharacters = (
  characters: Array<ICharacter> | null | undefined,
  searchText: string
) => {
  if (characters) {
    return characters.filter((c) => {
      const { image, ...otherProperties } = c;
      return objectMatchText({ ...otherProperties }, searchText);
    });
  }
  return [];
};
