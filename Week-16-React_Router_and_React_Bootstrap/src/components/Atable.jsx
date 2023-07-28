import Table from 'react-bootstrap/Table';
import filterByName from './filterByName';
import DisplayTableRow from './DisplayTableRow';


export default function Atable({chores,
    deleteTask,
    uuser,
    utask,
    udate,
    setUuser,
    setUtask,
    setUdate,
    updatedTask
}) {
  return (
    <Table id="table" striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Ayla's Tasks</th>
          <th>Date Assigned:</th>
          <th>Task:</th>
          <th>Update:</th>
          <th>Delete:</th>
        </tr>
      </thead>
      <tbody>
        {filterByName("Ayla", chores).map((chore, index) => (
          <DisplayTableRow
            key={index}
            chore={chore}
            deleteTask={deleteTask}
            uuser={uuser}
            utask={utask}
            udate={udate}
            setUuser={setUuser}
            setUtask={setUtask}
            setUdate={setUdate}
            updatedTask={updatedTask}
          />
        ))}
      </tbody>
    </Table>
  );
}
