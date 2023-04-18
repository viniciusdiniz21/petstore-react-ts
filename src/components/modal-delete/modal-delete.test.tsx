import "@testing-library/jest-dom";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import { describe, expect, vi } from "vitest";
import axios from "axios";
import { IProduct } from "../../types/global.types";
import ModalDelete from "./ModalDelete";

var url: string = import.meta.env.VITE_URL;

describe("ModalDelete", () => {
  const mockProducts: IProduct = {
    id: "231e-321f-2312",
    brand: "Test Brand 1",
    title: "Test Title 1",
    createdAt: "20/10/2021",
    updatedAt: "20/11/2021",
  };

  it("Precisa renderizar o botão que abre o modal", () => {
    render(<ModalDelete data={mockProducts} />);
    const deleteButton = screen.getByTestId("open-modal");
    expect(deleteButton).toBeInTheDocument();
  });

  it("Tem que abrir o modal", () => {
    const { getByText } = render(<ModalDelete data={mockProducts} />);
    const deleteButton = screen.getByTestId("open-modal");
    fireEvent.click(deleteButton);
    const modalTitle = getByText("Delete");
    expect(modalTitle).toBeInTheDocument();
  });

  it("Tem que fechar o modal", async () => {
    const { queryByText } = render(<ModalDelete data={mockProducts} />);
    const deleteButton = screen.getByTestId("open-modal");
    fireEvent.click(deleteButton);
    const closeButton = screen.getByTestId("close");
    fireEvent.click(closeButton);
    await waitFor(() => {
      const modalTitle = queryByText("Delete");
      expect(modalTitle).not.toBeInTheDocument();
    });
  });

  it("Tem que chamar a função de deletar passando url e id", async () => {
    vi.spyOn(axios, "delete").mockResolvedValueOnce({ data: mockProducts });
    render(<ModalDelete data={mockProducts} />);
    const deleteButton = screen.getByTestId("open-modal");
    fireEvent.click(deleteButton);
    const confirmButton = screen.getByTestId("delete");
    fireEvent.click(confirmButton);
    await waitFor(() => {
      expect(axios.delete).toHaveBeenCalledWith(`${url}/${mockProducts.id}`);
    });
  });
});
