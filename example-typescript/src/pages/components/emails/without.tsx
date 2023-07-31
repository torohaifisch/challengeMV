import { fetchNotAssigned } from "@/pages/solutions/email";

export const Without = () => {
  const notAssigned = fetchNotAssigned();
  return (
    <>
      {JSON.stringify(notAssigned)}
    </>
  )
}