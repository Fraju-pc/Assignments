import Table from 'react-bootstrap/Table';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import filterByName from '../../components/filterByName';
import UserTableRow from '../../components/UserTableRow';


export default function ChildD({chores}) {
  return (
    <Container>
        <Row className='m-3 p-3'>
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Ayla's Tasks</th>
          <th>Date Assigned:</th>
          <th>Task:</th>
          <th>Completed?:</th>
        </tr>
      </thead>
      <tbody>
        {filterByName("Delaney", chores).map((chore, index) => (
          <UserTableRow
            key={index}
            chore={chore}
          />
        ))}
      </tbody>
    </Table>
    </Row>
    </Container>
  );
}