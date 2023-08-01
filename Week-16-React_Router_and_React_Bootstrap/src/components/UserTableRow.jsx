//Imports
import { Button } from "react-bootstrap";
import EmailAdmin from "./EmailAdmin";

//Display Table Row Function
export default function DisplayTableRow({ chore }) {
  
  //Html Output
  return (
    <tr>
      <td>{chore.name}</td>
      <td>{chore.date}</td>
      <td>{chore.task}</td>
      <td>
        <Button
          variant="success"
          onClick={() => EmailAdmin((chore = { chore }))}
        >
          Done
        </Button>
      </td>
    </tr>
  );
}
