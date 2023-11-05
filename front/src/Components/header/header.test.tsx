import {
  render,
  screen,
  waitFor,
  fireEvent,
} from "@testing-library/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import Header from "./Header";
import Inscription from "../../Pages/inscription/Inscription";
import React from "react";
import * as hook from '../../Hooks/useIsMobile';

describe('Header', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render the header logo', () => {
    render(
      <Router>
        <Header />
      </Router>
    );

    const logo = screen.getByRole("img");
    expect(logo).toHaveAttribute("src", "Triplink_min.png");
    expect(logo).toHaveAttribute("alt", "Logo Triplink");
  });

  it('should render the header title', () => {
    render(
      <Router>
        <Header />
      </Router>
    );
    expect(screen.getByText("Triplink")).toBeInTheDocument();
  });

  it('should render button named "Se connecter" and click on it', async () => {
    const user = userEvent.setup();
    render(
      <Router>
        <Header />
      </Router>
    );

    expect(screen.getByText("Se connecter")).toBeInTheDocument();
    await user.click(screen.getByRole("login"));
    await waitFor(() => {
      expect(screen.getByText("Bienvenue sur Triplink")).toBeInTheDocument();
    });
  });

  it('clicking on "S\'incrire" button redirects to Inscription page with correct text', () => {
    render(<Router>
      <Header />
      <Routes>
        <Route path="/inscription" element={<Inscription />} />
      </Routes>
    </Router>
    );

    fireEvent.click(screen.getByRole("inscription"));

    expect(
      screen.getByText('Rejoins la communauté des voyageurs')
    ).toBeInTheDocument();
  });

  it('should render HeaderDesktop when user is logged in and not in mobile view', () => {
    const spyIsMobileHook = jest.spyOn(hook, 'default');
    spyIsMobileHook.mockReturnValue(false);

    const mockLocalStorage = jest.spyOn(Storage.prototype, 'getItem');
    mockLocalStorage.mockReturnValue('logged in token');

    render(<Router><Header /></Router>);

    expect(screen.getByTestId('header-logout')).toBeInTheDocument();
    expect(screen.queryByTestId('header-mobile-logout')).toBeNull();
  });

  it('should render HeaderMobile when user is logged in and in mobile view', () => {
    const spyIsMobileHook = jest.spyOn(hook, 'default');
    spyIsMobileHook.mockReturnValue(true);

    const mockLocalStorage = jest.spyOn(Storage.prototype, 'getItem');
    mockLocalStorage.mockReturnValue('logged in token');

    render(<Router><Header /></Router>);

    expect(screen.queryByTestId('header-logout')).toBeNull();
    expect(screen.getByTestId('header-mobile-logout')).toBeInTheDocument();
  });

  it('should render HeaderMobile-login when user is not logged in and in mobile view', () => {
    const spyIsMobileHook = jest.spyOn(hook, 'default');
    spyIsMobileHook.mockReturnValue(true);

    const mockLocalStorage = jest.spyOn(Storage.prototype, 'getItem');
    mockLocalStorage.mockReturnValue(null);

    render(<Router><Header /></Router>);

    expect(screen.queryByTestId('header-login')).toBeNull();
    expect(screen.getByTestId('header-mobile-login')).toBeInTheDocument();
  });

  it('should call logout when user clicks logout button', () => {
    const spyIsMobileHook = jest.spyOn(hook, 'default');
    spyIsMobileHook.mockReturnValue(true);

    const mockLocalStorage = jest.spyOn(Storage.prototype, 'getItem');
    mockLocalStorage.mockReturnValue('loged in token');

    const mockClearStorage = jest.spyOn(Storage.prototype, 'clear');

    render(<Router><Header /></Router>);

    fireEvent.click(screen.getByText('Se déconnecter'));
    expect(mockClearStorage).toHaveBeenCalled();
  });
});
