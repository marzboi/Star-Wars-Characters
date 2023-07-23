import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import List from "./favorite.list";
import { Character } from "../../models/character";
import { AppContext, ContextStructure } from "../../context/app.context";
import { MemoryRouter } from "react-router-dom";

describe("Given List component", () => {
  describe("When it is instantiated with characters", () => {
    const favoritesCharacters = [
      { name: "Alex", url: "https://swapi.dev/api/people/1/" },
    ] as Character[];

    const value: ContextStructure = {
      characterContext: {
        favoritesCharacters,
      },
    } as unknown as ContextStructure;

    beforeEach(() => {
      render(
        <MemoryRouter>
          <AppContext.Provider value={value}>
            <List></List>
          </AppContext.Provider>
        </MemoryRouter>
      );
    });

    test("Then it should render the list", () => {
      const element = screen.getByRole("list");
      expect(element).toBeInTheDocument();
    });
  });

  describe("When it is instantiated with no characters", () => {
    const favoritesCharacters = [] as Character[];

    const value: ContextStructure = {
      characterContext: {
        favoritesCharacters,
      },
    } as unknown as ContextStructure;

    beforeEach(() => {
      render(
        <MemoryRouter>
          <AppContext.Provider value={value}>
            <List></List>
          </AppContext.Provider>
        </MemoryRouter>
      );
    });

    test("Then it should render the Error404 component", () => {
      const errorMessage = screen.getByText("These aren't the");

      expect(errorMessage).toBeInTheDocument();
    });
  });
});
