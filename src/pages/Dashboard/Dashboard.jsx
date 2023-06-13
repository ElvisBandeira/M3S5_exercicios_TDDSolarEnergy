import React, { useState, useEffect } from "react";
import Container from "../../components/templates/Container";
import "./Dashboard.css";

export default function Dashboard() {
  const [unidades, setUnidades] = useState([]);
  const [mediaEnergia, setMediaEnergia] = useState(0);

  useEffect(() => {
    const unidadesMock = [
      {
        id: 1,
        apelido: 'Unidade 1',
        status: true,
        energia: 100
      },
      {
        id: 2,
        apelido: 'Unidade 2',
        status: true,
        energia: 200
      },
      {
        id: 3,
        apelido: 'Unidade 3',
        status: false,
        energia: 150
      },
      {
        id: 4,
        apelido: 'Unidade 4',
        status: true,
        energia: 300
      }
    ];

    setUnidades(unidadesMock);

    const totalEnergia = unidadesMock.reduce((total, unidade) => total + unidade.energia, 0);
    const media = unidadesMock.length > 0 ? totalEnergia / unidadesMock.length : 0;
    setMediaEnergia(media);
  }, []);

  const totalUnidades = unidades.length;
  const unidadesAtivas = unidades.filter(unidade => unidade.status === true).length;
  const unidadesInativas = unidades.filter(unidade => unidade.status === false).length;

  return (
    <Container>
      <h1>Dashboard</h1>
      <br />
      <div className="dashboard-container">
        <div className="card">
          <h2>Total de Unidades</h2>
          <p>{totalUnidades}</p>
        </div>
        <div className="card">
          <h2>Unidades Ativas</h2>
          <p>{unidadesAtivas}</p>
        </div>
        <div className="card">
          <h2>Unidades Inativas</h2>
          <p>{unidadesInativas}</p>
        </div>
        <div className="card">
          <h2>Média de Energia</h2>
          <p>{mediaEnergia}</p>
        </div>
      </div>
    </Container>
  );
}





