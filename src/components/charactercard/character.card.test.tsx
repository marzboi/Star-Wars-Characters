import { render, fireEvent, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AppContext, ContextStructure } from "../../context/app.context";
import { CharacterCard } from "./character.card";
import { Character } from "../../models/character";

describe("Given the characterCard component", () => {
  describe("When given the a mock character", () => {
    const mockCharacter = {
      name: "Alex",
      url: "https://swapi.dev/api/people/1/",
    } as Character;

    const handleLoadOneChar = jest.fn();
    const value: ContextStructure = {
      characterContext: {
        handleLoadOneChar,
      },
    } as unknown as ContextStructure;

    beforeEach(() => {
      render(
        <MemoryRouter>
          <AppContext.Provider value={value}>
            <CharacterCard item={mockCharacter} />
          </AppContext.Provider>
        </MemoryRouter>
      );
    });

    test("it should call handleLoadOneChar and navigate when image is clicked", () => {
      const image = screen.getByRole("img");
      fireEvent.click(image);
      expect(handleLoadOneChar).toHaveBeenCalledWith(mockCharacter);
    });
  });
});
