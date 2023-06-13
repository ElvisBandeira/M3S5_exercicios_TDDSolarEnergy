import { BrowserRouter } from "react-router-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

describe("Navbar", () => {
  beforeEach(() => {
    useNavigate.mockClear();
  });

  it("deve exibir a imagem 'logoDhouse', ter 3 botões e navegar para as páginas corretas ao clicar nos botões", () => {
    const navigateMock = jest.fn();
    useNavigate.mockReturnValue(navigateMock);

    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    const dashButton = screen.getByText("DashBoard");
    const unidConsButton = screen.getByText("Unidade Consumidora");
    const cadastroButton = screen.getByText("Cadastro de Energia Gerada");

    expect(dashButton).toBeInTheDocument();
    expect(unidConsButton).toBeInTheDocument();
    expect(cadastroButton).toBeInTheDocument();

    fireEvent.click(dashButton);
    expect(navigateMock).toHaveBeenCalledWith("/");

    fireEvent.click(unidConsButton);
    expect(navigateMock).toHaveBeenCalledWith("/unidades");

    fireEvent.click(cadastroButton);
    expect(navigateMock).toHaveBeenCalledWith("/cadastro");
  });
});



