import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './footer';

test('renders footer text', () => {
  render(<Footer />);

  // You can customize these queries based on your actual HTML structure
  const privacyElement = screen.getByText('Confidentialité');
  const termsElement = screen.getByText('Conditions générales');

  expect(privacyElement).toBeInTheDocument();
  expect(termsElement).toBeInTheDocument();
});
