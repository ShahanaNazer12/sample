import { Col, Container, Image, Row } from "react-bootstrap";
import "./Section5.css"

function Section5(){
    return(
        <div >
            <Container className=" my-2 " >
                <Row className=" gx-2" >
                    <Col md={6}  >
                    <div className=" bg-light p-4 position-relative">
                    <h2> OPPO K13 turbo Pro 5G </h2>
                    <div className=" text-end">
                    <Image className="im1 w-50  pe-5" src="/images/mob1.webp" fluid/>
                    </div>
                    <div className="  w-50 p-2 rounded-2 position-absolute top-50 " style={{background:"SeaShell"}}>
                        <p> india's Only smartphone with <br /> a cooling Fan </p> 
                        <a className=" text-black" href=""> Learn more</a> <a className=" text-black" href=""> Buy Now</a>
                        

                    </div>
                    </div>
                    </Col>
                    <Col md={6}   >
                    <div className=" bg-light p-4 position-relative ">
                    <h2> OPPO K13 turbo Pro 5G </h2>
                    <div className=" text-end">
                    <Image className="im1 w-50  pe-5" src="/images/mob2.webp" fluid/>
                    </div>
                    <div className="  w-50 p-2 rounded-2 position-absolute top-50 " style={{background:"SeaShell"}}>
                        <p> india's Only smartphone with <br /> a cooling Fan </p> 
                        <a className=" text-black" href=""> Learn more</a> <a className=" text-black" href=""> Buy Now</a>
                        

                    </div>
                    

                    </div>
                    </Col>
                </Row>

                <Row className="gx-2">
                    <Col md={6}  >
                    <div className=" bg-light p-4 position-relative mt-2">
                    <h2> OPPO A5X 5G </h2>
                    <div className=" text-end">
                    <Image className="im1 w-50  pe-5" src="/images/mob3.webp" fluid/>
                    </div>
                    <div className="  w-50 p-2 rounded-2 position-absolute  " style={{background:"SeaShell", top:"100px"}}>
                        <p> IP65 Water and Dust Resistance <br /> Damage-Proof 360° Armour Body <br/> 6000mAh Large Battery <br />45W SUPERVOOCTM Flash Charge </p> 
                        <a className=" text-black" href=""> Learn more</a> <a className=" text-black" href=""> Buy Now</a>
                        

                    </div>
                    </div>
                    </Col>
                    <Col md={6}   >
                    <div className=" bg-light p-4 position-relative mt-2 ">
                    <h2> OPPO Enco Buds3 Pro</h2>
                    <div className=" text-end">
                    <Image className="im1 w-50  pe-5" src="/images/airpods.webp" fluid/>
                    </div>
                    <div className="  w-50 p-2 rounded-2 position-absolute top-50 " style={{background:"SeaShell"}}>
                        <p>True Wireless Earbuds   </p> 
                        <a className=" text-black" href=""> Learn more</a> <a className=" text-black" href=""> Buy Now</a>
                    </div>
                    </div>
                    </Col>
                </Row>

                <Row className=" gx-2">
                    <Col md={6}  >
                    <div className=" bg-light p-4 position-relative mt-2">
                    <h2> OPPO A5 5G </h2>
                    <div className=" text-end">
                    <Image className="im1 w-50  pe-5" src="/images/mob4.webp" fluid/>
                    </div>
                    <div className="  w-50 p-2 rounded-2 position-absolute  " style={{background:"SeaShell", top:"100px"}}>
                        <p> IP65 Water and Dust Resistance <br /> Damage-Proof 360° Armour Body <br/> 6000mAh Large Battery + 45 W <br />SUPERVOOCTM Flash Charge <br /> 120Hz Ultra Bright Display </p> 
                        <a className=" text-black" href=""> Learn more</a> <a className=" text-black" href=""> Buy Now</a>
                        

                    </div>
                    </div>
                    </Col>

                    <Col md={6}   >
                    <div className=" bg-light p-4 position-relative mt-2 ">
                    <h2> OPPO A5 Pro 5G</h2>
                    <div className=" text-end">
                    <Image className="im1 w-50  pe-5" src="/images/mob5.webp" fluid/>
                    </div>
                    <div className="  w-50 p-2 rounded-2 position-absolute  " style={{background:"SeaShell", top:"125px"}}>
                        <p>IP69 All-Round Waterproof Champion <br /> Damage-Proof 360° Armour Body <br />45W SUPERVOOCTM Flash Charge </p> 
                        <a className=" text-black" href=""> Learn more</a> <a className=" text-black" href=""> Buy Now</a>
                    </div>
                    </div>
                    </Col>

                </Row>

            </Container>
        </div>
    )
}
export default Section5;