import "@testing-library/jest-dom";
import { describe, test } from "vitest";
import { render } from "@testing-library/react";
import App from "./App";
import { MemoryRouter } from "react-router-dom";

describe("App", () => {
  test("Renderizar o componente", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
  });
});
