import { FC } from 'react';

const Input: FC<any> = function Input(props) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <input {...props} />;
};

export default Input;
