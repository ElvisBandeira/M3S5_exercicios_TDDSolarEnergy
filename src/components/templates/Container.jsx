import Navbar from "../molecules/Navbar";
import "./Container.css"

export default function Container({ children }) {
  return (
    <div className="container-styled">
      <Navbar />
      <main className="meu-conteudo">
        {children}
      </main>
    </div>
  );
}