import "./homeImage.jpg"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export default function Home(){

    return(
        <div className="p-4">
            <Container>
                <Row>
                    <Col></Col>
                    <Col><img src="../src/pages/Home/homeImage.jpg" /></Col>
                    <Col></Col>
                </Row>
            </Container>
            <br/><br/>
            <Container>    
                <Row >
                    <Col ></Col>
                    <Col xs lg="2"><Button variant="success" size="lg">Login</Button></Col>{' '}
                    <Col ></Col>
                </Row>
            </Container>
            
        </div>
    )
}