import { ChangeEvent, FC } from 'react';

type InputProps = {
  placeholder: string;
  name: string;
  value: string;
} & (
  | {
      type?: 'text';
      onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    }
  | {
      type: 'textarea';
      onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
    }
);

const Input: FC<InputProps> = function Input(props) {
  const { type } = props;
  // eslint-disable-next-line react/jsx-props-no-spreading
  return type === 'textarea' ? <textarea {...props} /> : <input {...props} />;
};

export default Input;
