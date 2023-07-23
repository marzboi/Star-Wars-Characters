import CharacterInfo from "./character.info";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ContextStructure, AppContext } from "../../context/app.context";
import { MemoryRouter } from "react-router-dom";

describe("Given the component character info", () => {
  describe("When feedbackMessage is provided", () => {
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
        feedbackMessage: "Character added successfully",
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

    test("Then the feedback container should have visible class", () => {
      const element = screen.getByText(
        "CHARACTER ADDED TO FAVORITES ❤️"
      ).parentElement;
      expect(element).toHaveClass("visible");
    });
  });

  describe("When feedbackMessage is not provided", () => {
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
        feedbackMessage: null,
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

    test("Then the feedback container should not have visible class", () => {
      const element = screen.getByText(
        "CHARACTER ADDED TO FAVORITES ❤️"
      ).parentElement;
      expect(element).not.toHaveClass("visible");
    });
  });
});
