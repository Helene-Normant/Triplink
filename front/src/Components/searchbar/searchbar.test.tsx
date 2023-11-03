import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Searchbar from './Searchbar';
import apiService from '../../apiService';

const countryFixture = {
  id: 1,
  code: 10,
  alpha2: 'alpha2',
  alpha3: 'alpha3',
  nameFr: 'France',
  nameEn: 'France'
}

const categoryFixture = {
  id: 1,
  categoryFr: 'categorie fr',
  categoryEn: 'category en',
}

const userFixture = {
  id: 1,
  email: 'john@doe.fr',
  roles: [],
  password: 'pretendItsHashedPassword',
  plainPassword: 'pretendItsHashedPassword',
  userName: 'JohnDoe',
  firstName: 'John',
  lastName: 'Doe',
  picture: '',
  description: 'I am handsome',
  birthday: null,
  createdAt: null
}

const setDestinationMock = jest.fn();
const setCategoryMock = jest.fn();
const setProfilMock = jest.fn();

const spyGetAllCountries = jest.spyOn(apiService.Countries, 'getAll');
const spyGetAllCategories = jest.spyOn(apiService.Categories, 'getAll');
const spyGetAllUsers = jest.spyOn(apiService.User,'getAll');

const renderSearchBar = ({
  countries = [countryFixture],
  categories = [categoryFixture],
  users = [userFixture],
} = {}) => {
  spyGetAllCountries.mockResolvedValue(countries);
  spyGetAllUsers.mockResolvedValue(users);
  spyGetAllCategories.mockResolvedValue(categories);

  return render(
    <Searchbar setDestination={setDestinationMock} setCategory={setCategoryMock} setProfil={setProfilMock} />
  )
}

describe('Searchbar', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders Searchbar component', async () => {
    renderSearchBar();
    
    await waitFor(() => {
      expect(screen.getByText('Destinations')).toBeInTheDocument();
    });
    expect(screen.getByText('Catégories')).toBeInTheDocument();
    expect(screen.getByText('Profil')).toBeInTheDocument();
    expect(screen.getByRole('search')).toBeInTheDocument();
  });

  it('calls setDestination, setCategory and setProfile when the search button is clicked', async () => {
    renderSearchBar();
    await waitFor(() => {
      expect(screen.getByText('Destinations')).toBeInTheDocument();
    });
    fireEvent.click(screen.getByRole('search'));

    expect(setDestinationMock).toHaveBeenCalled();
    expect(setCategoryMock).toHaveBeenCalled();
    expect(setProfilMock).toHaveBeenCalled();
  });
});