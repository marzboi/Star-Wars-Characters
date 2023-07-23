import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ContextStructure, AppContext } from "../../context/app.context";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import ChangePage from "./change.page";

describe("Given the change page component", () => {
  describe("When an user clicks on change page buttons", () => {
    const value: ContextStructure = {
      characterContext: {
        handleLoad: jest.fn(),
      },
    } as unknown as ContextStructure;

    beforeEach(() => {
      render(
        <MemoryRouter>
          <AppContext.Provider value={value}>
            <ChangePage />
          </AppContext.Provider>
        </MemoryRouter>
      );
    });

    test("Then it should by in the document ", () => {
      const element = screen.getAllByRole("button");
      expect(element[0]).toBeInTheDocument();
      expect(element[1]).toBeInTheDocument();
    });

    test("Then it should fire handlenext function ", async () => {
      const elementCheck = screen.getAllByRole("button");
      await userEvent.click(elementCheck[0]);
      await userEvent.click(elementCheck[1]);
      expect(value.characterContext.handleLoad).toHaveBeenCalled();
    });
  });
});
