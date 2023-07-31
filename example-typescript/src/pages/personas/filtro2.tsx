import { lastArray } from "../solutions/person";
import Layout from "../components/layouts/Layout";
import BootstrapTable from 'react-bootstrap-table-next';

const Filtro2 = () => {
  const dataPersons = lastArray();
  const columns = [{
    dataField: 'index',
    text: 'ID'
  }, {
    dataField: 'name',
    text: 'Nombre'
  }, {
    dataField: 'company',
    text: 'Compañía'
  }, {
    dataField: 'email',
    text: 'E-mail'
  }, {
    dataField: 'age',
    text: 'Edad'
  }];

  return (
    <>
      <div className="my-5 text-center">
        <h5>
          TABLA DE PERSONAS FILTRADA POR NOMBRES QUE COMIENZAN CON H/L Y TIENEN ENTRE 20 y 30 AÑOS
        </h5>
      </div>
      <BootstrapTable keyField='id' data={ dataPersons } columns={ columns } />
    </>
  )
}

Filtro2.getLayout = Layout();
export default Filtro2;
