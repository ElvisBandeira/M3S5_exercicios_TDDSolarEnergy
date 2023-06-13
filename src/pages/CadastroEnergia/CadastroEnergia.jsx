import Container from "../../components/templates/Container";
import { useState } from "react";
import "./CadastroEnergia.css";

export default function CadastroEnergia() {
  const [unidadeGeradora, setUnidadeGeradora] = useState("");
  const [mesAno, setMesAno] = useState();
  const [totalKwGerado, setTotalKwGerado] = useState("");

  const unidades = [
    {
      id: 123,
      apelido: 'P 1',
      local: 'R 1',
      marca: 'M 1',
      modelo: 'Mod 1',
      ativo: true
    },
    {
      id: 124,
      apelido: 'P 2',
      local: 'R 2',
      marca: 'M 2',
      modelo: 'Mod 2',
      ativo: false
    }
  ];

  const handleSalvarUnidade = () => {
    const unidadeGeradora = {
      unidadeGeradora: unidadeGeradora,
      mesAno: mesAno,
      totalKwGerado: totalKwGerado
    };
    console.log("Unidade Geradora:", unidadeGeradora);

    setUnidadeGeradora("");
    setMesAno("");
    setTotalKwGerado("");
    setApareceCadastro(false);
  };

  return (
    <Container>
      <div>
        <h1>Lançamento de geração mensal</h1>

        <form className="container" onSubmit={handleSalvarUnidade}>
          <label>
            Unidade Geradora
            <br />
            <select
              value={unidadeGeradora}
              onChange={(event) => setUnidadeGeradora(event.target.value)}
            >
              <option value="">Selecione uma unidade</option>
              {unidades.map((unidade) => (<option key={unidade.id}
                value={unidade.id}> {unidade.apelido}
              </option>
              ))}
            </select>
          </label>
          <br />
          <label>
            Mês/Ano
            <input type="month" value={mesAno} dateFormat="MM/yyyy"
              onChange={(event) => setMesAno(event.target.value)}
            />
          </label>
          <br />
          <label>
            Total KW Gerado
            <input type="number" value={totalKwGerado}
              onChange={(event) => setTotalKwGerado(event.target.value)}
            />
          </label>
          <br />
          <button className="botao-cadastrar" type="submit">Cadastrar</button>
        </form>
      </div>
    </Container>
  );
}




































































