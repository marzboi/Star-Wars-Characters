import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import GoBack from "./goback";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";

describe("Given the GoBack component", () => {
  let scrollTopSet: jest.Mock;

  beforeEach(() => {
    scrollTopSet = jest.fn();

    Object.defineProperty(document.documentElement, "scrollTop", {
      get: () => 100,
      set: scrollTopSet,
    });

    render(
      <MemoryRouter>
        <GoBack />
      </MemoryRouter>
    );
  });

  test("Then it should render and reset the scroll position to 0 when clicked", async () => {
    const imgButton = screen.getByAltText("arrow button");

    await userEvent.click(imgButton);
    expect(imgButton).toBeInTheDocument();
    expect(scrollTopSet).toHaveBeenCalled();
  });
});
