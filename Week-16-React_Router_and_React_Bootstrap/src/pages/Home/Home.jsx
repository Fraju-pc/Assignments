//Imports
import "./homeImage.jpg"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import { Link, useNavigate } from 'react-router-dom';
import NavBar from "../../components/NavBar";

//Home Page
export default function Home(){

//Setup Navigate
const navigate = useNavigate();

//Function for Log In Button
function goLogin(){
    navigate(`/Login`);
};

    //Html Output
    return(
        <>
        <NavBar />  
        <div className="p-4">
            <Container className="mt-4">
                <Row>
                    <Col xs={1} md={3}></Col>
                    <Col xs={10} md={6}><Image src="../src/pages/Home/homeImage.jpg" fluid /></Col>
                    <Col xs={1} md={3}></Col>
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