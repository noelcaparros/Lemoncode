import * as apiModel from './api/character.api-model';
import * as viewModel from './character.vm';

export const mapCharacterFromApiToVm = (
  character: apiModel.Character
): viewModel.Character => ({
  ...character,
  id: character.id,
  name: character.name,
  image: character.image,
  origin: character.origin,
  location: character.location,
  status: character.status,
  species: character.species,
});

export const mapCharacterFromVmToApi = (
  character: viewModel.Character
): apiModel.Character =>
  ({
    ...character,
    id: character.id,
    name: character.name,
    image: character.image,
    origin: character.origin,
    location: character.location,
    status: character.status,
    species: character.species,
  } as unknown as apiModel.Character);
