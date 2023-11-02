import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Searchbar from './searchbar';

describe('Searchbar', () => {
  it('renders Searchbar component', () => {
    render(<Searchbar setDestination={() => { }} setCategory={() => { }} setProfil={() => { }} />);

    expect(screen.getByText('Destinations')).toBeInTheDocument();
    expect(screen.getByText('Catégories')).toBeInTheDocument();
    expect(screen.getByText('Profil')).toBeInTheDocument();
    expect(screen.getByRole('search')).toBeInTheDocument();
  });

  it('calls setDestination, setCategory and setProfile when the search button is clicked', () => {
    const setDestination = jest.fn();
    const setCategory = jest.fn();
    const setProfil = jest.fn();

    render(<Searchbar setDestination={setDestination} setCategory={setCategory} setProfil={setProfil} />);

    fireEvent.click(screen.getByRole('search'));

    expect(setDestination).toHaveBeenCalled();
    expect(setCategory).toHaveBeenCalled();
    expect(setProfil).toHaveBeenCalled();
  });
});

