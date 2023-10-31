import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Searchbar from './searchbar';

test('renders Searchbar component', () => {
  render(<Searchbar setDestination={() => { }} setCategory={() => { }} setProfil={() => { }} />);

  // You can customize these queries based on your actual HTML structure
  const destinationSelect = screen.getByText('Destinations');
  const categorySelect = screen.getByText('Catégories');
  const profilSelect = screen.getByText('Profil');
  const searchButton = screen.getByRole('search');

  expect(destinationSelect).toBeInTheDocument();
  expect(categorySelect).toBeInTheDocument();
  expect(profilSelect).toBeInTheDocument();
  expect(searchButton).toBeInTheDocument();
});

test('search button should call setDestination, setCategory, and setProfil on click', () => {
  const setDestination = jest.fn();
  const setCategory = jest.fn();
  const setProfil = jest.fn();

  render(<Searchbar setDestination={setDestination} setCategory={setCategory} setProfil={setProfil} />);

  // Customize these queries based on your HTML structure
  const searchButton = screen.getByRole('search');

  const destinationSelect = screen.getByText('Destinations');
  const categorySelect = screen.getByText('Catégories');
  const profilSelect = screen.getByText('Profil');

  fireEvent.click(searchButton);

  expect(setDestination).toHaveBeenCalled();
  expect(setCategory).toHaveBeenCalled();
  expect(setProfil).toHaveBeenCalled();
});
