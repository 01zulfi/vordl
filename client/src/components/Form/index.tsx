import { FC, FormEvent, ReactNode } from 'react';

interface FormProps {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  children: ReactNode;
}

const Form: FC<FormProps> = function Form({ onSubmit, children }) {
  return <form onSubmit={onSubmit}>{children}</form>;
};

export default Form;
