import { MouseEvent, FC, ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  variant: 'contained' | 'outlined';
  color?: 'success' | 'error' | 'default';
  disabled?: boolean;
  type: 'button' | 'submit' | 'reset';
}

const Button: FC<ButtonProps> = function Button({
  children,
  onClick,
  variant,
  disabled,
  color,
  type,
}) {
  /* eslint-disable react/button-has-type */
  return (
    <button
      type={type}
      className={`${variant} ${color}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
