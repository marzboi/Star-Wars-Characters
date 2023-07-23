import { MemoryRouter } from "react-router-dom";
import { AppContext, ContextStructure } from "../../context/app.context";
import { render, screen } from "@testing-library/react";
import CreatedList from "./created.list";
import { Character } from "../../models/character";
import "@testing-library/jest-dom";

describe("Given the created list component", () => {
  describe("When it is instantiated with characters", () => {
    const createdCharacters = [
      { name: "Alex", url: "https://swapi.dev/api/people/1/", id: 1 },
    ] as Character[];

    const value: ContextStructure = {
      characterContext: {
        createdCharacters,
      },
    } as unknown as ContextStructure;

    beforeEach(() => {
      render(
        <MemoryRouter>
          <AppContext.Provider value={value}>
            <CreatedList></CreatedList>
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
    const createdCharacters = [] as Character[];

    const value: ContextStructure = {
      characterContext: {
        createdCharacters,
      },
    } as unknown as ContextStructure;

    beforeEach(() => {
      render(
        <MemoryRouter>
          <AppContext.Provider value={value}>
            <CreatedList></CreatedList>
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
