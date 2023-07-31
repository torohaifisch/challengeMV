import { FC } from "react"
import BootstrapTable from "react-bootstrap-table-next";

type PropTypes = {
  emails: string[];
  description: string;
}

export const ValidatedMails: FC<PropTypes> = ({emails, description}) => {
  const columns = [{
    dataField: 'mail',
    text: description
  }]
  const mapEmails = emails.map((mail, key) => { return {id: key, mail} })
  return (
    <>
      <BootstrapTable keyField='mail' data={ mapEmails } columns={columns} />
    </>
  )
}
