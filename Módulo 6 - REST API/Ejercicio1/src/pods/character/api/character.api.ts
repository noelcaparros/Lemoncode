import axios from 'axios';
import { Character } from './character.api-model';

// axios
// export const getCharacter = async (id: string) => {
//   try {
//     const response = await axios.get(
//       `https://rickandmortyapi.com/api/character/${id}`
//     );
//     return response.data;
//   } catch (error) {
//     if (axios.isAxiosError(error)) {
//       console.error('Error:', error.response?.data);
//     } else {
//       console.error('Error:', error.message);
//     }
//     throw error;
//   }

//fetch
export const getCharacter = async (id: string): Promise<Character> => {
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/${id}`
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error.message);

    throw error;
  }
};
