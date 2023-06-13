import { useState, useEffect } from "react";
import Container from "../../components/templates/Container";
import "./Unidades.css";

export default function Unidades() {
  const [apareceCadastro, setApareceCadastro] = useState(true);
  const [unidadeSelecionada, setUnidadeSelecionada] = useState(null);
  const [apelido, setApelido] = useState("");
  const [local, setLocal] = useState("");
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [status, setStatus] = useState(false);

  useEffect(() => {
    const unidadesSalvas = localStorage.getItem("unidades");
    if (unidadesSalvas) {
      setUnidades(JSON.parse(unidadesSalvas));
    }
  }, []);

  const [unidades, setUnidades] = useState([
    {
      id: 123,
      apelido: "P 1",
      local: "R 1",
      marca: "M 1",
      modelo: "Mod 1",
      ativo: true,
    },
    {
      id: 124,
      apelido: "P 2",
      local: "R 2",
      marca: "M 2",
      modelo: "Mod 2",
      ativo: false,
    },
  ]);

  const salvarUnidadesNoLocalStorage = (unidades) => {
    localStorage.setItem("unidades", JSON.stringify(unidades));
  };

  const handleEditarUnidade = (unidade) => {
    console.log("Editar unidade:", unidade);
    setUnidadeSelecionada(unidade);
    setApelido(unidade.apelido);
    setLocal(unidade.local);
    setMarca(unidade.marca);
    setModelo(unidade.modelo);
    setStatus(unidade.ativo);
    setApareceCadastro(true);
  };

  const handleRemoverUnidade = (id) => {
    console.log("Remover unidade com ID:", id);
    const unidadesAtualizadas = unidades.filter((item) => item.id !== id);
    setUnidades(unidadesAtualizadas);
    salvarUnidadesNoLocalStorage(unidadesAtualizadas);
  };

  const handleSalvarUnidade = () => {
    const novaUnidade = {
      id: unidades.length + 1,
      apelido: apelido,
      local: local,
      marca: marca,
      modelo: modelo,
      ativo: status,
    };

    setUnidades([...unidades, novaUnidade]);
    setApelido("");
    setLocal("");
    setMarca("");
    setModelo("");
    setStatus(false);
    setApareceCadastro(false);
    salvarUnidadesNoLocalStorage([...unidades, novaUnidade]);
  };

  const handleSalvarEdicao = () => {
    const unidadesAtualizadas = unidades.map((item) => {
      if (item.id === unidadeSelecionada.id) {
        return {
          ...item,
          apelido: apelido,
          local: local,
          marca: marca,
          modelo: modelo,
          ativo: status,
        };
      }
      return item;
    });

    setUnidades(unidadesAtualizadas);
    setUnidadeSelecionada(null);
    setApelido("");
    setLocal("");
    setMarca("");
    setModelo("");
    setStatus(false);
    setApareceCadastro(false);
    salvarUnidadesNoLocalStorage(unidadesAtualizadas);
  };

  return (
    <Container>
      {apareceCadastro || unidadeSelecionada ? (
        <div>
          <h1>{unidadeSelecionada ? "Edição de Unidade" : "Cadastro de Unidades"}</h1>
          <br />
          <form className="container">
            <label>
              Apelido
              <input type="text" value={apelido} onChange={(event) => setApelido(event.target.value)} />
            </label>
            <br />
            <label>
              Local
              <input type="text" value={local} onChange={(event) => setLocal(event.target.value)} />
            </label>
            <br />
            <label>
              Marca
              <input type="text" value={marca} onChange={(event) => setMarca(event.target.value)} />
            </label>
            <br />
            <label>
              Modelo
              <input type="text" value={modelo} onChange={(event) => setModelo(event.target.value)} />
            </label>
            <br />
            <label>
              Ativo
              <input type="checkbox" checked={status} onChange={(event) => setStatus(event.target.checked)} />
            </label>
            <br />
          </form>
          {unidadeSelecionada ? (
            <button className="botao-salvar" onClick={handleSalvarEdicao}>
              Salvar Edição
            </button>
          ) : (
            <button className="botao-salvar" onClick={handleSalvarUnidade}>
              Salvar
            </button>
          )}
        </div>
      ) : (
        <div>
          <h1>Unidades</h1>
          <br />
          <h1>Lista de Unidades</h1>
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Apelido</th>
                <th>Local</th>
                <th>Marca</th>
                <th>Modelo</th>
              </tr>
            </thead>
            <tbody>
              {unidades.map((unidade) => (
                <tr key={unidade.id}>
                  <td>{unidade.id}</td>
                  <td>{unidade.apelido}</td>
                  <td>{unidade.local}</td>
                  <td>{unidade.marca}</td>
                  <td>{unidade.modelo}</td>
                  <td>
                    <button
                      className="botao-editar"
                      onClick={() => handleEditarUnidade(unidade)}
                    >
                      Editar
                    </button>
                  </td>
                  <td>
                    <button
                      className="botao-remover"
                      onClick={() => handleRemoverUnidade(unidade.id)}
                    >
                      Remover
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="novaUnidade" onClick={() => setApareceCadastro(true)}>Nova Unidade</button>
        </div>
      )}
    </Container>
  );
}


























