import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Inscription from './inscription';
import { MemoryRouter } from 'react-router-dom';

test('renders Inscription component', () => {
  render(
    <MemoryRouter>
      <Inscription />
    </MemoryRouter>
  );

  // Customize these queries based on your HTML structure
  const pageTitle = screen.getByText('Triplink');
  const cancelButton = screen.getByRole('annule');
  const registerButton = screen.getByRole('inscrit');

  expect(pageTitle).toBeInTheDocument();
  expect(cancelButton).toBeInTheDocument();
  expect(registerButton).toBeInTheDocument();
});

test('cancel button should navigate to home', () => {
  const { getByRole, history } = render(
    <MemoryRouter initialEntries={['/inscription']}>
      <Inscription />
    </MemoryRouter>
  );

  const cancelButton = getByRole('annule');
  fireEvent.click(cancelButton);
  expect(history.location.pathname).toBe('/');
});
