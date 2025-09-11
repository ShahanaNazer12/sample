import { Col, Container, Row } from "react-bootstrap";

function Form(){
    return(
        <div>
            <Container>
                <Row className=" mt-5 mb-5">
                    <Col md={6}>
                    <h2>OPPO Support</h2>
                    </Col>
                    <Col md={6}>
                    <p>Autheticity and warrenty Status Check</p>
                    <hr />
                    <p>Service center and Reservation</p>
                    <hr />
                    <p>Contact Us</p>
                    <hr />
                    <p>Find more support</p>
                    <hr />
                    <p>Retail Store Locator</p>
                    <hr />
                    </Col>
                </Row>
            </Container>

        </div>
    )
}
export default Form;