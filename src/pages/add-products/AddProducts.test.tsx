import "@testing-library/jest-dom";
import { describe, expect, test } from "vitest";
import { render, fireEvent, waitFor } from "@testing-library/react";
import AddProducts from "./AddProducts.page";
import { MemoryRouter } from "react-router-dom";

describe("Testes de Add Products", () => {
  test("Renderizar o componente", () => {
    render(
      <MemoryRouter>
        <AddProducts />
      </MemoryRouter>
    );
  });

  test("Titúlo da página", () => {
    const { getByText } = render(
      <MemoryRouter>
        <AddProducts />
      </MemoryRouter>
    );

    expect(getByText("AddProducts")).toBeInTheDocument();
  });

  test("Completar o formulário e enviar", async () => {
    const { getByLabelText, getByText } = render(
      <MemoryRouter>
        <AddProducts />
      </MemoryRouter>
    );

    const brandInput = getByLabelText("Brand");
    const titleInput = getByLabelText("Title");
    const saveButton = getByText("Save");

    fireEvent.change(brandInput, { target: { value: "Test Brand" } });
    fireEvent.change(titleInput, { target: { value: "Test Title" } });

    fireEvent.click(saveButton);

    await waitFor(() => {
      expect(getByText("Product added successfully!")).toBeInTheDocument();
    });
  });

  test("Enviar Form com campos vazios", async () => {
    const { getByLabelText, getByText } = render(
      <MemoryRouter>
        <AddProducts />
      </MemoryRouter>
    );

    const brandInput = getByLabelText("Brand");
    const saveButton = getByText("Save");

    fireEvent.change(brandInput, { target: { value: "Test Brand" } });

    fireEvent.click(saveButton);

    await waitFor(() => {
      expect(getByText("Fill all fields!")).toBeInTheDocument();
    });
  });

  test("Clickar no botão e voltar a página", async () => {
    const { getByText } = render(
      <MemoryRouter>
        <AddProducts />
      </MemoryRouter>
    );

    const backButton = getByText("Back");

    fireEvent.click(backButton);

    await waitFor(() => {
      expect(window.location.pathname).toBe("/");
    });
  });
});
