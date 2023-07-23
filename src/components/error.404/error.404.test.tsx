import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Error404 from "./error.404";

describe("Given a error page component", () => {
  describe("When it is istantiate", () => {
    test("Then it should be in the document", () => {
      render(<Error404></Error404>);
      const element = screen.getAllByRole("img");
      expect(element[0]).toBeInTheDocument();
    });
  });
});
