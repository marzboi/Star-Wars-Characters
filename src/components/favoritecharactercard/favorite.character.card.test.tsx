import { render, fireEvent, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AppContext, ContextStructure } from "../../context/app.context";
import { FavoriteCharacterCard } from "./favorite.character.card";
import { Character } from "../../models/character";

describe("Given the characterCard component", () => {
  describe("When given the a mock character", () => {
    const mockCharacter = {
      name: "Alex",
      url: "https://swapi.dev/api/people/1/",
    } as Character;

    const handleLoadOneFavoriteChar = jest.fn();
    const value: ContextStructure = {
      characterContext: {
        handleLoadOneFavoriteChar,
      },
    } as unknown as ContextStructure;

    beforeEach(() => {
      render(
        <MemoryRouter>
          <AppContext.Provider value={value}>
            <FavoriteCharacterCard item={mockCharacter} />
          </AppContext.Provider>
        </MemoryRouter>
      );
    });

    test("it should call handleLoadOneFavoriteChar and navigate when image is clicked", () => {
      const image = screen.getByRole("img");
      fireEvent.click(image);
      expect(handleLoadOneFavoriteChar).toHaveBeenCalledWith(mockCharacter);
    });
  });
});
