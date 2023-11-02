import axios from 'axios';
import { CharacterEntityApi } from './character-collection.api-model';

export const getCharacterCollection = async (): Promise<
  CharacterEntityApi[]
> => {
  try {
    const response = await axios.get('http://localhost:3000/characters');
    return response.data;
  } catch (error) {
    console.error('Error in fetching data:', error);

    throw error;
  }
};
