import React, { useCallback } from 'react';

import Input from '../../shared/components/FormElements/Input';
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/util/validators';
import './NewPlace.css';

const NewPlace = () => {
  {/* useCaalback helps prevent from creating infinite loops saves it in the memory and changes only when any one input has changed*/}
  const titleInputHandler = useCallback((id, value, isValid) => {}, []);

  const descriptionInputHandler = useCallback((id, value, isValid) => {}, []);

  return <form className='place-form'>
    <Input id="title" element="input" type="text" label="Title" validators={[VALIDATOR_REQUIRE()]} errorText="Please enter a valid title." onInput={titleInputHandler} />
    <Input id="description" element="textarea" label="Description" validators={[VALIDATOR_MINLENGTH(5)]} errorText="Please enter a valid desciption (atleast 5 characters)." onInput={descriptionInputHandler} />
  </form>
};

export default NewPlace;