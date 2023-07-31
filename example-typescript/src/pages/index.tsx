import { useRouter } from 'next/router';
import Layout from './components/layouts/Layout'

const Home = () => {
  const router = useRouter();
  const goToPath = (path: string) => {
    router.push(path)
  }
  return (
    <>
      <div className="card my-5">
        <div className="card-body text-center">
          A continuación podrá revisar las soluciones implementadas del ejercicio de Lógica
        </div>
      </div>
      <div className="card">
        <ul className="nav flex-column justify-content-center">
          <li className="nav-item my-2">
            <button className="nav-link w-100" onClick={() => goToPath("/personas/filtro1")}>
              {"Personas que no contienen el campo 'address' y ordenadas por el campo Name"}
            </button>
          </li>
          <li className="nav-item my-2">
            <button className="nav-link w-100" onClick={() => goToPath("/personas/filtro2")}>
              {"Personas que tienen una edad entre 20 y 30 años y cuyo nombre empieza por 'H' o 'L'" }
            </button>
          </li>
          <li className="nav-item my-2">
            <button className="nav-link w-100" onClick={() => goToPath("/correos")}>
              {"Filtros con correos válidos, inválidos y sin asignar"}
            </button>
          </li>
        </ul>
      </div>
    </>
  )
}

Home.getLayout = Layout();
export default Home;
