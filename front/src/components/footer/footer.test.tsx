import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './footer';

it('renders footer text', () => {
  render(<Footer />);

  expect(screen.getByText('Confidentialité')).toBeInTheDocument();
  expect(screen.getByText('Conditions générales')).toBeInTheDocument();
});
