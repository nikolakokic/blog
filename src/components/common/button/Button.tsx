import { FC } from 'react';
import { ButtonProps } from './Button.types';

export const Button: FC<ButtonProps> = ({
  children,
  className,
  onClick,
  ariaLabel,
  ariaExpanded,
  ...props
}) => {
  return (
    <button 
      className={className}
      onClick={onClick}
      aria-label={ariaLabel}
      aria-expanded={ariaExpanded}
      {...props}
    >
      {children}
    </button>
  );
};