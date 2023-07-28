import { Button } from "react-bootstrap";
import EmailAdmin from "./EmailAdmin";



export default function DisplayTableRow({ chore }) {
  

  //Modal State
 

  return (
    
    <tr>
      <td>{chore.name}</td>
      <td>{chore.date}</td>
      <td>{chore.task}</td>
      <td>
      <Button variant="warning" onClick={() => EmailAdmin(chore={chore})}>
        Done
      </Button>
     
      </td>
    </tr>
  );
}