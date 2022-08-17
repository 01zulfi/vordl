import { MouseEvent, FC } from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
  variant: 'contained' | 'outlined';
  color?: 'success' | 'error' | 'default';
  disabled?: boolean;
}

const Button: FC<ButtonProps> = function Button({
  children,
  onClick,
  variant,
  disabled,
  color,
}) {
  return (
    <button
      type="button"
      className={`${variant} ${color}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
