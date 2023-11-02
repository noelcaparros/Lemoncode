export interface Character {
  image: string;
  id: string;
  name: string;
  origin: string;
  location: string;
  status: string;
  species: string;
  bestSentences: string[];
}

export const createEmptyCharacter = (): Character => ({
  id: '',
  name: '',
  origin: '',
  location: '',
  image: '',
  status: '',
  species: '',
  bestSentences: [],
});
