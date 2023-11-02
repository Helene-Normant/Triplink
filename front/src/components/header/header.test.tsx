import {
  render,
  screen,
  waitFor,
  fireEvent,
} from "@testing-library/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import Header from "./header";
import Inscription from "../../pages/inscription/inscription";
import React from "react";

jest.mock('../../Hooks/useIsMobile', () => ({
  __esModule: true,
  default: jest.fn(),
}));

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
    expect(logo).toHaveAttribute("src", "triplink_min.png");
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
    require('../../Hooks/useIsMobile').default.mockReturnValue(false);

    render(<Header />);

    expect(screen.getByTestId('header-desktop')).toBeInTheDocument();
    expect(screen.queryByTestId('header-mobile')).toBeNull();
  });

  it('should render HeaderMobile when user is logged in and in mobile view', () => {
    require('../../Hooks/useIsMobile').default.mockReturnValue(true);

    render(<Header />);

    expect(screen.getByTestId('header-desktop')).toBeInTheDocument();
    expect(screen.queryByTestId('header-mobile')).toBeNull();
  });

  it('should render HeaderMobile when user is not logged in and in mobile view', () => {
    require('../../Hooks/useIsMobile').default.mockReturnValue(true);

    render(<Header />);

    expect(screen.getByTestId('header-desktop')).toBeInTheDocument();
    expect(screen.queryByTestId('header-mobile')).toBeNull();
  });

  it('should call logout when user clicks logout button', () => {
    const mockLogout = jest.fn();
    require('../../Hooks/useIsMobile').default.mockReturnValue(false);

    render(<Header />);

    fireEvent.click(screen.getByText('Logout'));
    expect(mockLogout).toHaveBeenCalled();
  });
});

