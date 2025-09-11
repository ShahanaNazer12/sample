import { Col, Container, Image, Row } from "react-bootstrap";
import "./Section6.css";

function Section7(){
    return(
        <div>
            <Container >
                <h4 className=" pt-5 pb-4">OPPO Events</h4>
                <Row className=" gx-2">
                    <Col md={4}>
                    <div className="image-container">
                    <Image src="/images/pic.webp" fluid/>
                    </div>
                    </Col>
                    <Col md={4}>
                    <div className="image-container">
                    <Image src="/images/pic1.webp" fluid/>
                    </div>
                    </Col>
                    <Col md={4}>
                    <div className="image-container">
                    <Image src="/images/pic2.webp" fluid/>
                    </div>
                    </Col>
                </Row>
                <Row className=" gx-2">
                    <Col md={4}>
                    <div className=" bg-light p-3 mt-1  rounded-2">
                       <h4>OPPO  </h4>
                       <h6>India Photograpgy Awards 2025</h6>
                       <p>Super Every moments -</p>
                    </div>
                    </Col>
                     <Col md={4}>
                    <div className=" bg-light p-3 mt-1  rounded-2">
                       <h4>Flippy Bird</h4>
                       <p>Play our cover Screen themed game <br /> for the chance to win an OPPO Find N2 Flip! -</p>
                    </div>
                    </Col>
                     <Col md={4}>
                    <div className=" bg-light p-3 mt-1  rounded-2">
                       <h4>OPPO Product ambassadors </h4>
                       <p>Get an early access and <br /> keep the OPPO find N2 flip</p>
                    </div>
                    </Col>
                </Row>
            </Container>


        </div>
    )
}
export default Section7;