import { useNavigate } from "react-router-dom";
import logoDhouse from "../../assets/imagem/logoDhouse.png";
import dash from "../../assets/imagem/dash.png";
import unidCons from "../../assets/imagem/unidCons.png";
import cadastro from "../../assets/imagem/cadastro.png";
import "./Navbar.css";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="navbar-styled">
      <h1>DevInHouse</h1>
      <img src={logoDhouse} alt="devin"/>

      <nav>
        <button onClick={() => navigate("/")}>
         <img src={dash} alt="dash" />
          DashBoard
        </button>
        
        <button onClick={() => navigate("/unidades")}>
         <img src={unidCons} alt="unidCons" />
          Unidade Consumidora
        </button>
        
        <button onClick={() => navigate("/cadastro")}>
         <img src={cadastro} alt="cad" />
          Cadastro de Energia Gerada
        </button>
      </nav>
    </div>
  );
}
