import CharacterInfo from "./favorite.card.info";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ContextStructure, AppContext } from "../../context/app.context";
import { MemoryRouter } from "react-router-dom";

describe("Given the component character info", () => {
  describe("When it is instantiated", () => {
    const mockCharacter = {
      name: "alex",
      height: "44",
      image: "url",
      mass: "44",
      hair_color: "blue",
      eye_color: "blue",
      birth_year: "1999",
      gender: "other",
      homeworld: "Catalunya",
    };

    const value: ContextStructure = {
      characterContext: {
        currentCharacter: mockCharacter,
      },
    } as unknown as ContextStructure;

    beforeEach(() => {
      render(
        <MemoryRouter>
          <AppContext.Provider value={value}>
            <CharacterInfo />
          </AppContext.Provider>
        </MemoryRouter>
      );
    });

    test("Then it should should be in the document", () => {
      const element = screen.getByRole("img");
      expect(element).toBeInTheDocument();
    });
  });
});
