import { ICharacter } from './Character';

export interface ICharacterInfo {
  count: number;
  next: string;
  pages: number;
  results: ICharacter[];
}
