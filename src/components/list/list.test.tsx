import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import List from "./list";
import { Character } from "../../models/character";
import { AppContext, ContextStructure } from "../../context/app.context";
import { MemoryRouter } from "react-router-dom";

describe("Given List component", () => {
  const characters = [
    { name: "Alex", url: "https://swapi.dev/api/people/1/" },
  ] as Character[];

  const value: ContextStructure = {
    characterContext: {
      characters,
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

  describe("When it is instantiate", () => {
    test("Then it should be in the document", () => {
      const element = screen.getByRole("list");

      expect(element).toBeInTheDocument();
    });
  });

  describe("When it is instantiated with no characters", () => {
    const characters = [] as Character[];

    const value: ContextStructure = {
      characterContext: {
        characters,
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
