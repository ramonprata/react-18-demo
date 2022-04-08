import { objectMatchText } from '../shared/utils/utilityFunctions';
import { ICharacter } from '../types/Character';

export const filterCharacters = (
  characters: Array<ICharacter> | null | undefined,
  searchText: string
) => {
  if (characters) {
    return characters.filter((c) => {
      return objectMatchText(
        { name: c.name, location: c.location.name, status: c.status, species: c.species },
        searchText
      );
    });
  }
  return [];
};
