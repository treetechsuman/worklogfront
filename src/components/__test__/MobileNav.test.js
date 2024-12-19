import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MobileNav from './MobileNav';

describe('MobileNav Component', () => {
  const brand = { name: 'MyApp', href: '/' };
  const links = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' },
  ];

  test('renders the brand name with the correct href', () => {
    render(<MobileNav brand={brand} links={links} />);
    const brandElement = screen.getByText(brand.name);
    expect(brandElement).toBeInTheDocument();
    expect(brandElement.closest('a')).toHaveAttribute('href', brand.href);
  });

  test('renders all navigation links', () => {
    render(<MobileNav brand={brand} links={links} />);
    links.forEach(link => {
      const linkElement = screen.getByText(link.label);
      expect(linkElement).toBeInTheDocument();
      expect(linkElement.closest('a')).toHaveAttribute('href', link.href);
    });
  });

  test('applies the correct background and variant classes', () => {
    render(<MobileNav brand={brand} links={links} bg="dark" variant="dark" />);
    const navbar = screen.getByRole('navigation');
    expect(navbar).toHaveClass('navbar-dark');
    expect(navbar).toHaveClass('bg-dark');
  });

  test('renders the toggle button for responsiveness', () => {
    render(<MobileNav brand={brand} links={links} />);
    const toggleButton = screen.getByLabelText('Toggle navigation');
    expect(toggleButton).toBeInTheDocument();
  });
});
