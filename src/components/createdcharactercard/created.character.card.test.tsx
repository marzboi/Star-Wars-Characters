import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AppContext, ContextStructure } from "../../context/app.context";
import { CreatedCharacterCard } from "./created.character.card";
import { Character } from "../../models/character";
import userEvent from "@testing-library/user-event";

describe("Given the characterCard component", () => {
  describe("When given the a mock character", () => {
    const mockCharacter = {
      name: "Alex",
      url: "https://swapi.dev/api/people/1/",
    } as Character;

    const value: ContextStructure = {
      characterContext: { handleLoadOneCreatedChar: jest.fn() },
    } as unknown as ContextStructure;

    beforeEach(() => {
      render(
        <MemoryRouter>
          <AppContext.Provider value={value}>
            <CreatedCharacterCard item={mockCharacter} />
          </AppContext.Provider>
        </MemoryRouter>
      );
    });

    test("it should call handleLoadOneFavoriteChar and navigate when image is clicked", async () => {
      const image = screen.getByRole("img");
      await userEvent.click(image);
      expect(
        value.characterContext.handleLoadOneCreatedChar
      ).toHaveBeenCalled();
    });
  });
});
