import { render, screen } from "@testing-library/react";
import Unidades from "./Unidades";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => jest.fn(),
}));

describe("Unidades", () => {
  it("exibe o título 'Unidades' na lista de unidades", () => {
    render(<Unidades />);
    const tituloUnidades = screen.getByText(/unidades/i);
    expect(tituloUnidades).toBeInTheDocument();
  });
});




