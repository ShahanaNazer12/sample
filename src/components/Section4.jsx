import { Col, Container, Image, Row } from "react-bootstrap";
import "./Section4.css"

function Section4(){
    return(
        <div className=" position-relative">
            <div className=" d-flex justify-content-between pt-4 pb-4">
                 <h3 style={{position:"relative", left:"120px"}} >New product</h3>
                 <a style={{right:"120px"}} className="hide text-secondary  link-underline-light position-relative" href="">View more products  </a>
                 <span class="arrow">➔</span>

            </div>
            <Container >
                <Row>
                    <Col md={12}>
                     <Image src="/images/sec5.webp" fluid />
                    </Col>
                </Row>

            </Container>
            <Container>
                <Row>
                    <Col md={6} style={{position :"absolute", top:"100px", left:"10%", width:"300px", height:"600px" }}>
                    <h1>OPPO A5x</h1>
                    </Col>
                    <Col md={6}  style={{position :"absolute", top:"250px", left:"10%", width:"300px", height:"600px" }}>
                    <p className=" p-4" style={{background:"PaleGreen"}}>
                         IP65 Water and Dust <br /> Resistance <br />
                            Damage-Proof 360° Armour <br /> Body <br />
                            6000mAh Large Battery <br />

                            <a className=" text-black  pt-4" href=""> Learn more</a>  <a className="text-black" href=""> Buy Now</a>
                    </p>
                    
                       
                    

                    </Col>
                </Row>
            </Container>
           
           

        </div>
    )
}
export default Section4;