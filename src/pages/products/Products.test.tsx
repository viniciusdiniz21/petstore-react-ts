import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import axios from "axios";
import { MemoryRouter } from "react-router";
import { describe, expect, test, vi } from "vitest";
import Products from "./Products.page";
import { IProduct } from "../../types/global.types";

describe("Testes products", () => {
  test("Teste para renderizar 1 card de produto", async () => {
    const mockProducts: IProduct[] = [
      {
        id: "231e-321f-2312",
        brand: "Test Brand 1",
        title: "Test Title 1",
        createdAt: "20/10/2021",
        updatedAt: "20/11/2021",
      },
    ];
    vi.spyOn(axios, "get").mockResolvedValueOnce({ data: mockProducts });
    render(<Products />);
    const productCards = await screen.findAllByTestId("product-card");
    expect(productCards).toHaveLength(1);
  });

  test("Teste de mensagem de loading quando fizer requisição de produtos", async () => {
    vi.spyOn(axios, "get").mockImplementationOnce(() => {
      return new Promise(() => {});
    });
    render(<Products />);
    const loadingMessage = await screen.findByText("Loading...");
    expect(loadingMessage).toBeInTheDocument();
  });

  test("Teste erro ao buscar produtos", async () => {
    vi.spyOn(axios, "get").mockRejectedValueOnce(new Error());
    render(<Products />);
    const errorMessage = await screen.findByText(
      "Can't get the product list..."
    );
    expect(errorMessage).toBeInTheDocument();
  });
});
