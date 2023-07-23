import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ContextStructure, AppContext } from "../../context/app.context";
import { MemoryRouter } from "react-router-dom";
import ListButtons from "./gobacktocreatedlist";
import { Character } from "../../models/character";
import userEvent from "@testing-library/user-event";
describe("first", () => {
  describe("first", () => {
    const item = { id: 1, name: "Alex" } as Character;

    const value: ContextStructure = {
      characterContext: {
        currentCharacter: item,
        handleDelete: jest.fn(),
        handleLoadLocalCreatedServer: jest.fn(),
      },
    } as unknown as ContextStructure;
    beforeEach(() => {
      render(
        <MemoryRouter>
          <AppContext.Provider value={value}>
            <ListButtons item={item} />
          </AppContext.Provider>
        </MemoryRouter>
      );
    });

    test("should ", () => {
      const element = screen.getAllByRole("button");
      expect(element[0]).toBeInTheDocument();
      expect(element[1]).toBeInTheDocument();
    });

    test("Then it should fire handleAdd and togglefeedback function ", async () => {
      const elementCheck = screen.getAllByRole("button");
      await userEvent.click(elementCheck[0]);
      await userEvent.click(elementCheck[1]);
      expect(value.characterContext.handleDelete).toHaveBeenCalled();
      expect(
        value.characterContext.handleLoadLocalCreatedServer
      ).toHaveBeenCalled();
    });
  });
  describe("When given an item that is undefined", () => {
    const item = undefined as unknown as Character;

    const value: ContextStructure = {
      characterContext: {
        currentCharacter: item,
      },
    } as unknown as ContextStructure;
    beforeEach(() => {
      render(
        <MemoryRouter>
          <AppContext.Provider value={value}>
            <ListButtons item={item} />
          </AppContext.Provider>
        </MemoryRouter>
      );
    });
    test("Then it should just return ", async () => {
      const elementCheck = screen.getAllByRole("button");
      await userEvent.click(elementCheck[1]);
    });
  });
});
