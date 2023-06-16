import {
  render,
  screen,
  waitFor,
  fireEvent,
  queryByText,
} from "@testing-library/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import Header from "../../Components/header/Header";
import Inscription from "../../Pages/inscription/Inscription";

describe("<Header />", () => {
  test("It should render the header logo", () => {
    render(
      <Router>
        <Header />
      </Router>
    );
    const logo = screen.getByRole("img");
    expect(logo).toHaveAttribute("src", "Triplink_min.png");
    expect(logo).toHaveAttribute("alt", "Logo Triplink");
  });

  test("It should render the header title", () => {
    render(
      <Router>
        <Header />
      </Router>
    );
    expect(screen.getByText("Triplink")).toBeInTheDocument();
  });

  test("It should render button named Se connecter and click on it", async () => {
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

  test('clicking on "S\'incrire" button redirects to Inscription page with correct text', () => {
   render(<Router>
      <Header />
      <Routes>
        {/* Define your routes here using <Route> */}
        <Route path="/inscription" element={<Inscription />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );

  fireEvent.click(screen.getByRole("inscription"));

  // Use queryByText with a custom text matcher function
  const UserClick = (content, element) => {
    const hasText = (node) =>
      node.textContent === "Rejoins la communauté des voyageurs";
    const nodeHasText = hasText(element);

    return nodeHasText;
  };

  expect(
    queryByText(screen.getByTestId("inscription-page"), UserClick)
  ).toBeInTheDocument();
});
});
