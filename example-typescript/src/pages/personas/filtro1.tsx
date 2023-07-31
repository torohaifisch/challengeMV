
import { sortedArray } from "../solutions/person";
import Layout from "../components/layouts/Layout";
import BootstrapTable from 'react-bootstrap-table-next';

const Filtro1 = () => {
  const dataPersons = sortedArray();
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
    dataField: 'address',
    text: 'Dirección'
  }];

  return (
    <>
      <div className="my-5 text-center">
        <h5>
          TABLA DE PERSONAS ORDENADA POR NOMBRE Y FILTRADA CON DIRECCIÓN VÁLIDA
        </h5>
      </div>
      <BootstrapTable keyField='id' data={ dataPersons } columns={ columns } />
    </>
  )
}

Filtro1.getLayout = Layout();
export default Filtro1;
