import { Character } from './character.api-model';
import axios from 'axios';

export const getCharacter = async (id: string): Promise<Character> => {
  try {
    const response = await axios.get(`http://localhost:3000/characters/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error in fetching data:', error);

    throw error;
  }
};

export const saveCharacter = async (character: Character): Promise<boolean> => {
  try {
    const response = await axios.put(
      `http://localhost:3000/characters/${character.id}`,
      character
    );
    return response.status === 200;
  } catch (error) {
    console.error('Error in saving data:', error);

    throw error;
  }
};
