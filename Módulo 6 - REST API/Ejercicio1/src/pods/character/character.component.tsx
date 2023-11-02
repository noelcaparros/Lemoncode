import React from 'react';
import { Formik, Form } from 'formik';
import { TextFieldComponent } from 'common/components';
import { formValidation } from './character.validations';
import { Character } from './character.vm';
import * as classes from './character.styles';

interface Props {
  character: Character;
  onSave: (character: Character) => void;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character, onSave } = props;

  return (
    <Formik
      onSubmit={onSave}
      initialValues={character}
      enableReinitialize={true}
      validate={formValidation.validateForm}
    >
      {() => (
        <Form className={classes.root}>
          <TextFieldComponent name="name" label="Name" disabled />
          <TextFieldComponent name="species" label="Species" disabled />
          <TextFieldComponent name="status" label="Status" disabled />
          <TextFieldComponent name="origin.name" disabled />
          <TextFieldComponent name="location.name" disabled />
        </Form>
      )}
    </Formik>
  );
};
