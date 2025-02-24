"use client"
import { FC, JSX } from 'react';
import Link from 'next/link';

import { LinkItem } from './footer.types';
import { categories, quickLinks } from './quic-links';
import { NewsletterForm } from './NewsletterFrom';
import Image from 'next/image';
import { useTheme } from '@/context/ThemeContext';

export const Footer: FC = () => {
  const { isDarkMode } = useTheme();
  const currentYear: number = new Date().getFullYear();

  const renderLink = (link: LinkItem): JSX.Element => (
    <li className='footer__link-wrap' key={link.href}>
      <Link href={link.href} className="footer__link hover">
        {link.label}
      </Link>
    </li>
  );

  return (
    <footer className="footer" role="contentinfo">
      <div className="wrapper">
        <div className="footer__grid">
          {/* About Section */}
          <div className="footer__about">
            <h2 className="footer__title">About</h2>
            <p className="footer__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam.
            </p>
            <address className="footer__contact">
              <p>
                <strong>Email: </strong>
                <a href="mailto:info@template.net" className="footer__link hover">
                  info@template.net
                </a>
              </p>
              <p>
                <strong>Phone: </strong>
                <a href="tel:+18102456789" className="footer__link hover">
                  +1 810 234 5678
                </a>
              </p>
            </address>
          </div>

          {/* Quick Links */}
          <div className="footer__section">
            <h2 className="footer__title">Quick Link</h2>
            <ul className="footer__list" aria-label="Quick links">
              {quickLinks.map(renderLink)}
            </ul>
          </div>

          {/* Categories */}
          <div className="footer__section">
            <h2 className="footer__title">Category</h2>
            <ul className="footer__list" aria-label="Categories">
              {categories.map(renderLink)}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer__newsletter">
            <h2 className="footer__title">Weekly Newsletter</h2>
            <NewsletterForm />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer__bottom">
          <div className="footer__brand">
            <Link href="/" className="footer__logo" aria-label="MetaBlog home">
                <Image
                   src={isDarkMode ? "/images/logo-small-white.png" : "/images/logo-small.png"}
                   alt="NiceBlog Logo"
                   width={48}
                   height={48}
                   priority
                 />
            </Link>
            <div className="footer__brand-text">
                <p className="footer__brand-title">
                    Meta<b>Blog</b>
                </p>
                <p className="footer__copyright">
                © {currentYear} All Rights Reserved
                </p>
            </div>
          </div>
          <ul className="footer__legal-list" aria-label="Legal links">
            <li>
              <Link href="/terms" className="footer__link hover">
                Terms of Use
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="footer__link hover">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/cookie" className="footer__link hover">
                Cookie Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};