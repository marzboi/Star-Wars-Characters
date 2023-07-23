import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SearchBar from "./filter";
import { ContextStructure, AppContext } from "../../context/app.context";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

describe("Given search component", () => {
  describe("When it is instantiated", () => {
    const mockHandleLoad = jest.fn();
    const value: ContextStructure = {
      characterContext: {
        handleLoad: mockHandleLoad,
      },
    } as unknown as ContextStructure;

    beforeEach(() => {
      render(
        <MemoryRouter>
          <AppContext.Provider value={value}>
            <SearchBar />
          </AppContext.Provider>
        </MemoryRouter>
      );
    });

    test("Then it should be in the document", () => {
      const element = screen.getByRole("textbox");
      expect(element).toBeInTheDocument();
    });

    test("Then it should call handleLoad on input change", async () => {
      const input = screen.getByRole("textbox");
      await userEvent.type(input, "Darth Vader");

      expect(mockHandleLoad).toHaveBeenCalledTimes(11);
      expect(mockHandleLoad).toHaveBeenCalledWith(
        "https://swapi.dev/api/people/?search=Darth Vader"
      );
    });
  });
});
