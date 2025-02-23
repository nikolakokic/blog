'use client';

import { JSX, useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { NAVIGATION } from './navigation-items';
import { Button } from '../button/Button';
import { SearchIcon, SunIcon } from './icons';

export const Header = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    setIsDarkMode(savedTheme === 'dark');
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? 'unset' : 'hidden';
  };

  const toggleTheme = (): void => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', newTheme);
  };

  return (
    <header className="header">
      <div className="wrapper">
        <div className="header__container">
          <Link href="/" className="header__logo" aria-label="Go to homepage">
            <Image
              src="/images/logo.png"
              alt="NiceBlog Logo"
              width={120}
              height={40}
              priority
            />
          </Link>
          <div className={`header__menu ${isMenuOpen ? 'header__menu--active' : ''}`}>
            <div className="header__search">
              <input
                type="search"
                placeholder="Search"
                className="header__search-input"
              />
              <span className='header__search-icon'>
                <SearchIcon />
              </span>
            </div>
            <div className="header__actions">
            </div>
            <nav
              className={`header__nav ${isMenuOpen ? 'is-active' : ''}`}
              role="navigation"
              aria-label="Main navigation"
            >
              <ul className="header__nav-list">
                {NAVIGATION.map((item) => (
                  <li key={item.path} className="header__nav-item">
                    <Link href={item.path} className="header__nav-link">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <Button
            className={`header__theme-button ${isDarkMode ? 'header__theme-button--dark' : ''}`}
            onClick={toggleTheme}
            ariaLabel="Toggle theme"
          >
            <span className='header__theme-button-icon-wrap'>
              <SunIcon />
            </span>
          </Button>
          <Button
            className={`header__menu-button ${isMenuOpen ? 'header__menu-button--active' : ''}`}
            onClick={toggleMenu}
            ariaLabel="Toggle navigation menu"
            ariaExpanded={isMenuOpen}
          >
            <span className="header__menu-icon"></span>
          </Button>
        </div>
      </div>
    </header>
  );
};