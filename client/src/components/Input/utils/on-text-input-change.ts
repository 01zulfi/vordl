import { Dispatch, ChangeEvent, SetStateAction } from 'react';

/* eslint-disable */
const onTextInputChange =
  (stateFunction: Dispatch<SetStateAction<string>>) =>
  (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    stateFunction(event.target.value);
  };

export default onTextInputChange;
