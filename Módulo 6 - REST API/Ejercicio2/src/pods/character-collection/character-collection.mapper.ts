import * as apiModel from './api/character-collection.api-model';
import * as viewModel from './character-collection.vm';

export const mapFromApiToVm = (character): viewModel.CharacterEntityVm => {
  return {
    id: character.id,
    name: character.name,
    image: character.image,
  };
};
