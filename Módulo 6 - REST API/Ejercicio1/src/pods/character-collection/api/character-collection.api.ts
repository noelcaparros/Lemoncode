import axios from 'axios';
import { CharacterEntityApi } from './character-collection.api-model';
import { mockCharacterCollection } from './character-collection.mock-data';

let characterCollection = [...mockCharacterCollection];

// fetch;
// export const getCharacterCollection = async () => {
//   try {
//     const response = await fetch('https://rickandmortyapi.com/api/character');

//     if (!response.ok) {
//       throw new Error(`Failed to fetch data. Status: ${response.status}`);
//     }

//     const data = await response.json();
//     return data.results;
//   } catch (error) {
//     console.error('Error in fetching data:', error);
//     throw error;
//   }
// };

//axios
export const getCharacterCollection = async () => {
  try {
    const response = await axios.get(
      'https://rickandmortyapi.com/api/character'
    );
    return response.data.results;
  } catch (error) {
    console.error('Error in fetching data:', error);

    throw error;
  }
};

export const deleteCharacter = async (id: string): Promise<boolean> => {
  characterCollection = characterCollection.filter((h) => h.id !== id);
  return true;
};
