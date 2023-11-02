import * as React from 'react';
import Button from '@mui/material/Button';
import { CharacterEntityVm } from './character-collection.vm';
import { CharacterCard } from './components/character-card.component';
import * as classes from './character-collection.styles';

interface Props {
  characterCollection: CharacterEntityVm[];
  onCreateCharacter: () => void;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

export const CharacterCollectionComponent: React.FunctionComponent<Props> = (
  props
) => {
  const { characterCollection } = props;

  const handleClick = (characterId) => {
    const url = `#/characters/${characterId}`;
    window.location.href = url;
    return null;
  };
  return (
    <div className={classes.root}>
      <ul className={classes.list}>
        {characterCollection.map((character) => (
          <li key={character.id} onClick={() => handleClick(character.id)}>
            <CharacterCard character={character} />
          </li>
        ))}
      </ul>
    </div>
  );
};
