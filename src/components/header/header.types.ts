export interface NavItem {
    path: string;
    label: string;
}

export interface Theme {
    isDark: boolean;
    toggleTheme: () => void;
  }
  
export interface SearchProps {
    isOpen: boolean;
    onClose: () => void;
}
  