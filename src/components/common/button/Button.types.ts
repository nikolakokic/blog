import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
  isActive?: boolean;
  ariaLabel?: string;
  ariaExpanded?: boolean;
}