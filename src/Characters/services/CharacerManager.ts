import { fetchCharacters } from './CharactersAPI';

class CharacerManager {
  async getCharacters() {
    try {
      const response = await fetchCharacters();
      return response;
    } catch (error) {
      console.log('error:', error);
    }
  }
}
export default CharacerManager;
