import { Button } from "react-bootstrap";
import { useState } from "react";
import UpdateTask from "../components/UpdateTask";

export default function DisplayTableRow({ chore, deleteTask, uuser, utask, udate, 
  setUuser,  setUtask, setUdate, updatedTask}) {
  

  //Modal State
  const [modalShow, setModalShow] = useState(false);

  return (
    
    <tr>
      <td>{chore.name}</td>
      <td>{chore.date}</td>
      <td>{chore.task}</td>
      <td>
      <Button variant="success" onClick={() => setModalShow(true)}>
        Update
      </Button>

      <UpdateTask
        show={modalShow}
        onHide={() => setModalShow(false)}
        chore={chore}
        uuser={uuser}
        utask={utask}
        udate={udate}
        setUuser={setUuser}
        setUtask={setUtask}
        setUdate={setUdate}
        updatedTask={updatedTask}
      />

        
      </td>
      <td>
        <Button variant="danger" onClick={(e) => deleteTask(e, chore.id)}>Delete</Button>
      </td>
    </tr>
  );
}
