//Imports
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Col } from "react-bootstrap";
import filterByName from "../../components/filterByName";
import UserTableRow from "../../components/UserTableRow";

//Delaney's Page
export default function ChildD({ chores }) {
  //Html Output
  return (
    <Container>
      <Row>
        <Col className="p-3 m-4" id="form-area">
          <h1 id="text-header">Delaney's Tasks:</h1>
        </Col>
        <Col></Col>
        <Col></Col>
      </Row>
      <Row className="m-3 p-3">
        <div className="round-corners">
          <Table id="table" striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Delaney's Tasks</th>
                <th>Date Assigned:</th>
                <th>Task:</th>
                <th>Completed?:</th>
              </tr>
            </thead>
            <tbody>
              {filterByName("Delaney", chores).map((chore, index) => (
                <UserTableRow key={index} chore={chore} />
              ))}
            </tbody>
          </Table>
        </div>
      </Row>
    </Container>
  );
}
