import { useRouter } from "next/router";

export const Navbar = () => {
  const router = useRouter();
  const goToPath = (path: string) => {
    router.push(path)
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Multi Vende</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded={true} aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <button className="nav-link" onClick={() => goToPath("/personas/filtro1")}>Personas por Nombre</button>
            <button className="nav-link" onClick={() => goToPath("/personas/filtro2")}>H/L entre 20 y 30</button>
            <button className="nav-link" onClick={() => goToPath("/correos")}>Correos</button>
          </div>
        </div>
      </div>
    </nav>
  );
};
