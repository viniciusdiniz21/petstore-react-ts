import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import Home from "../home/Home.page";
import { MemoryRouter } from "react-router-dom";
import { ReactNode } from "react";

const navigateMock = vi.fn();

describe("Testes Home", () => {
  test("Titúlo da página", () => {
    const { getByText } = render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    expect(getByText("Wellcome")).toBeInTheDocument();
  });
});

describe("Home component", () => {
  test("Renderiza o componente", () => {
    render(<Home />);
    const welcomeMessage = screen.getByText("Wellcome");
    expect(welcomeMessage).toBeInTheDocument();
  });

  test("Navegar para página de produtos", () => {
    type Props = {
      children: ReactNode;
    };
    vi.mock("react-router-dom", () => ({
      useNavigate: (text: string) => navigateMock,
      MemoryRouter: ({ children }: Props) => children,
    }));

    render(<Home />);
    const productsButton = screen.getByText("Products List");
    fireEvent.click(productsButton);

    expect(navigateMock).toHaveBeenCalledWith("../products");
  });
});
