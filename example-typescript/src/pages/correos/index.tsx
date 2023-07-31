import { useState } from "react";
import Layout from "../components/layouts/Layout";
import { ValidatedMails } from "../components/emails/validated-mails";
import { fetchNotAssigned, validateEmails } from "../solutions/email";

type EmailStateType = "valid" | "invalid" | "without";
const Correos = () => {
  const [emailState, setEmailState] = useState<EmailStateType>("valid");
  const [notAssignedEmails, setNotAssignedEmails] = useState<string[]>([]);
  const validatedEmails = validateEmails()
  const setNotAssigned = () => {
    setNotAssignedEmails(fetchNotAssigned());
    setEmailState("without");
  }
  return (
    <>
      <div className="my-4 text-center">
        <h5>
          FILTROS POR CORREOS
        </h5>
      </div>
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <button className="nav-link" onClick={() => setEmailState("valid")}>Válidos</button>
        </li>
        <li className="nav-item">
          <button className="nav-link"  onClick={() => setEmailState("invalid")}>Inválidos</button>
        </li>
        <li className="nav-item">
          <button className="nav-link"  onClick={setNotAssigned}>Sin Correo</button>
        </li>
      </ul>
      { emailState === "valid" && 
        <ValidatedMails
          description="Correos Válidos"
          emails={validatedEmails.validMail}
          />
      }
      { emailState === "invalid" &&
        <ValidatedMails
          description="Correos Inválidos"
          emails={validatedEmails.invalidMail}
          />
      }
      { emailState === "without" &&
        <ValidatedMails
          description="Correos no asignados"
          emails={notAssignedEmails}
        />
      }
    </>
  );
};

Correos.getLayout = Layout();
export default Correos;
