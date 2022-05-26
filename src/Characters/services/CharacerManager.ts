import { fetchCharacters } from './CharactersAPI';

class CharacerManager {
  async getCharacters() {
    try {
      const response = await fetchCharacters();
      console.log(JSON.stringify(response, null, 2));
      return response;
    } catch (error) {
      console.log('error:', error);
    }
  }
}
export default CharacerManager;
