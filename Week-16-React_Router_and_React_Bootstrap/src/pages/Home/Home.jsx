import "./homeImage.jpg"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import NavBar from "../../components/NavBar";

export default function Home(){
    const navigate = useNavigate();

function goLogin(){
    navigate(`/Login`);
};
    return(
        <>
        <NavBar />  
        <div className="p-4">
            <Container className="mt-4">
                <Row>
                    <Col></Col>
                    <Col><img src="../src/pages/Home/homeImage.jpg" /></Col>
                    <Col></Col>
                </Row>
            </Container>
            
            <Container  className="mt-5">    
                <Row >
                    <Col ></Col>
                    <Col xs lg="2"><Button onClick={goLogin} variant="success" size="lg">Login</Button></Col>{' '}
                    <Col ></Col>
                </Row>
            </Container>
            
        </div>
        </>
    )
}