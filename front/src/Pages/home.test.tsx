import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Home from './Home';
import { BrowserRouter } from 'react-router-dom';
import apiService from '../apiService';

describe('Home', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders without errors', () => {
    render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>);
  });

  it('displays the searchbar', async () => {
    const getCountriesSpy = jest.spyOn(apiService.Countries, 'getAll');
    getCountriesSpy.mockResolvedValue([]);

    const getCategoriesSpy = jest.spyOn(apiService.Categories, 'getAll');
    getCategoriesSpy.mockResolvedValue([]);

    const getUsersSpy = jest.spyOn(apiService.User, 'getAll');
    getUsersSpy.mockResolvedValue([]);

    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>);

    await waitFor(() => {
      expect(screen.getByTestId('searchbar-component')).toBeInTheDocument()
    })
  });

  it('displays the cards', async () => {
    const getAllSpy = jest.spyOn(apiService.Publications, 'getAll');
    getAllSpy.mockResolvedValue([]);

    const getCountriesSpy = jest.spyOn(apiService.Countries, 'getAll');
    getCountriesSpy.mockResolvedValue([]);

    const getCategoriesSpy = jest.spyOn(apiService.Categories, 'getAll');
    getCategoriesSpy.mockResolvedValue([]);

    const getUsersSpy = jest.spyOn(apiService.User, 'getAll');
    getUsersSpy.mockResolvedValue([]);

    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>);

    await waitFor(() => {
      expect(screen.getByTestId('cards-component')).toBeInTheDocument()
    })
  });

  it('displays the footer', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>);

    expect(screen.getByTestId('footer-component')).toBeInTheDocument();
  });
});