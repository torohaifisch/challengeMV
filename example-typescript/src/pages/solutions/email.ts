import emails from './files/emails.json';
import persons from './files/persons.json';
// validar mails
const expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

export const validateEmails = () => {
  const validMail: string[] = [];
  const invalidMail: string[] = [];
  emails.forEach((mail) => {
    if (expression.test(mail)) {
      validMail.push(mail);
    } else {
      invalidMail.push(mail);
    }
  });
  // punto 1 y punto 3
  return ({validMail, invalidMail});
}

export const fetchNotAssigned = () => {
  const notAssigned: string[] = [];
  emails.forEach((mail) => {
    let bool = false;
    for (let person of persons) {
      if (person.email === mail) {
        bool = true;
        break;
      }
    }
    if (!bool) notAssigned.push(mail);
  });
  return notAssigned;
}