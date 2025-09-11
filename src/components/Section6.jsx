import { Col, Container, Image, Row } from "react-bootstrap";
import "./Section6.css";

function Section6(){
    return(
        <div>
            <Container >
                <h4 className=" pt-5 pb-4">offers made for you</h4>
                <Row className=" gx-2">
                    <Col md={4}>
                    <div className="image-container">
                    <Image   src="/images/card1.webp" fluid/>
                    </div>
                    </Col>
                    <Col md={4}>
                    <div className="image-container">
                    <Image src="/images/card2.webp" fluid/>
                    </div>
                    </Col>
                    <Col md={4}>
                    <div className="image-container">
                    <Image src="/images/card3.webp" fluid/>
                    </div>
                    </Col>
                </Row>
                <Row className=" gx-2">
                    <Col md={4}>
                    <div className=" bg-light p-3 mt-1  rounded-2">
                       <h4>Exchange Program </h4>
                       <p>Upgrade Now and Save Up to ₹43,900 -</p>
                    </div>
                    </Col>
                     <Col md={4}>
                    <div className=" bg-light p-3 mt-1  rounded-2">
                       <h4>Welcome Gift </h4>
                       <p>Limitted Time offer for all new members -</p>
                    </div>
                    </Col>
                     <Col md={4}>
                    <div className=" bg-light p-3 mt-1  rounded-2">
                       <h4>Education Discount </h4>
                       <p>Students get up to  64% OFF on smartphone -</p>
                    </div>
                    </Col>
                </Row>
            </Container>
        </div>

    )
}
export default Section6;