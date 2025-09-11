import { Col, Container, Image, Row } from "react-bootstrap";
import "./Section6.css"; 

function Section8(){
    return(
        <div className=" mt-5" style={{background:"AliceBlue"}}>
            <Container >
                <h4 className=" pt-5 pb-4">Explore OPPO</h4>
                <Row className=" gx-2">
                    <Col md={4}>
                    <div className="image-container">
                    <Image src="/images/oppo1.webp" fluid/>
                    </div>
                    </Col>
                    <Col md={4}>
                    <div className="image-container">
                    <Image src=" \images\ooop.png"    fluid/>
                    </div>
                    </Col>
                    <Col md={4}>
                    <div className="image-container">
                    <Image src="\images\oppo3.webp" fluid/>
                    </div>
                    </Col>
                </Row>
                <Row className=" gx-2">
                    <Col md={4}>
                    <div className=" bg-light p-3 mt-1 mb-5  rounded-2">
                       <h5> About OPPO <br /> -  </h5>
                       <p>Make Your Moment </p>
                    </div>
                    </Col>
                     <Col md={4}>
                    <div className=" bg-light p-3 mt-1 mb-5  rounded-2">
                       <h5>OPPO AI <br /> -</h5>
                     
                     
                      <p> Leading AI experiance </p>
                    </div>
                    </Col>
                     <Col md={4}>
                    <div className=" bg-light p-3 mt-1 mb-5  rounded-2">
                       <h5>Great Product Create Ultimate <br /> Experiance </h5>
                       <p>The stories of OPPO </p>
                    </div>
                    </Col>
                </Row>
            </Container>

        </div>
    )

}
export default Section8;