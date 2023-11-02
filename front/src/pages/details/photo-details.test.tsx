import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import PhotoDetails from './photo-details';
import apiService from '../../api-service';

describe('PhotoDetails', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render loading component while data is being fetched', () => {
    render(
      <MemoryRouter initialEntries={['/photo/1']}>
        <Route path="/photo/:id">
          <PhotoDetails />
        </Route>
      </MemoryRouter>
    );

    expect(screen.getByTestId('loading')).toBeInTheDocument();
  });

  it('should navigate to next and previous images when buttons are clicked', async () => {
    const mockPublication = {
      id: '1',
      country: { id: 1, nameFr: 'France' },
      picture: 'image1.jpg,image2.jpg,image3.jpg',
    };

    const getAllSpy = jest.spyOn(apiService.Publications, 'get');
    getAllSpy.mockResolvedValue([mockPublication]);
    
    render(
      <MemoryRouter initialEntries={['/photo/1']}>
        <Route path="/photo/:id">
          <PhotoDetails />
        </Route>
      </MemoryRouter>
    );

    // Vérifiez que la première image est affichée initialement
    await expect(screen.getByAltText('photos voyage')).toHaveAttribute('src', 'image1.jpg');

    fireEvent.click(screen.getByRole('button', { name: 'Next' }));

    // Vérifiez que la deuxième image est affichée
    await expect(screen.getByAltText('photos voyage')).toHaveAttribute('src', 'image2.jpg');

    fireEvent.click(screen.getByRole('button', { name: 'Previous' }));

    // Vérifiez que la première image est à nouveau affichée
    await expect(screen.getByAltText('photos voyage')).toHaveAttribute('src', 'image1.jpg');
  });
});
