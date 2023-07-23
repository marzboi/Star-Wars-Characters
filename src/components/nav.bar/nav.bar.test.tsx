import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import NavBar from "./nav.bar";
import { ContextStructure, AppContext } from "../../context/app.context";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

describe("Given a navegation bar component", () => {
  describe("When it is istantiate", () => {
    const value: ContextStructure = {
      characterContext: {
        currentCharacter: {},
        handleLoadLocalFavoritesServer: jest.fn(),
        handleLoadLocalCreatedServer: jest.fn(),
      },
    } as unknown as ContextStructure;

    beforeEach(() => {
      render(
        <MemoryRouter>
          <AppContext.Provider value={value}>
            <NavBar />
          </AppContext.Provider>
        </MemoryRouter>
      );
    });

    test("Then it should be in the document", () => {
      const element = screen.getByRole("navigation");
      expect(element).toBeInTheDocument();
    });

    test("Then the user should hit the returnHome button", async () => {
      const elementCheck = screen.getAllByRole("button");
      await userEvent.click(elementCheck[0]);
      await userEvent.click(elementCheck[1]);
      expect(
        value.characterContext.handleLoadLocalFavoritesServer
      ).toHaveBeenCalled();
      await userEvent.click(elementCheck[2]);
      expect(
        value.characterContext.handleLoadLocalCreatedServer
      ).toHaveBeenCalled();
    });
  });
});
