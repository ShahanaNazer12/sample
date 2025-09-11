import { Col, Container, Image, Row } from "react-bootstrap";
import { AiFillInstagram } from "react-icons/ai";
import { BiLogoWhatsapp } from "react-icons/bi";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import "./Footer.css"

function Footer(){
    return(
        <div className=" bg-black  text-light p-5">
            <Container>
                <Row>
                    <Col  md={12}>
                    <span className="hu ">
                        *The product pictures are for reference only, please refer to the actual product. <br />
                        *The UI is only for demonstration purposes, please refer to the UI design of actual product. <br />
                        *The prices displayed are the official suggested retail prices, the actual price may vary depending on the purchasing channel.
                        <hr />
                    </span>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6} md={2}>
                    <div>
                        
                        <p>Smart phone</p>
                        <div className="hi">
                        <a  href="">OPPO Find X8 Pro</a> <br />
                        <a  href="">OPPO Reno14 5g</a> <br />
                        <a href="">OPPO F29 5G</a> <br />
                        <a href="">OPPO K13 5G</a> <br />
                        <a href="">OPPO K12 x 5G</a> <br />
                        <a href="">OPPO A5 Pro 5G</a> <br />
                        <a href="">OPPO A5 5G</a>
                        
                       
                        </div>

                    </div>
                    </Col>
                    <Col xs={6} md={2}>
                    <div className="hi">
                        
                        <p>Iot products</p>
                        <a href="">OPPO Pad SE</a> <br />
                        <a  href="">OPPO Pad Air</a> <br />
                        <a  href="">OPPO Enco Buds</a> <br />
                        <a  href="">OPPO Enco Air2pro</a>
                    </div>
                    </Col>
                    <Col xs={6} md={2}>
                   
                    <div className="hi">
                        <p>Special offers</p>
                        <a  href=""> Education Discount </a>
                    </div>
                    </Col>
                    <Col xs={6} md={2}>
                    <div className="hi">
                        
                        <p>Support</p>
                        <a href="">Contact Us</a> <br />
                        <a  href="">Service Centers & Reservation</a> <br />
                        <a href="">OPPO Update</a> <br />
                        <a  href="">Terms and Conditions</a> <br />
                        <a  href="">E-waste Management</a> <br />
                        <a  href="">Security Response Center</a> <br />
                        <a  href="">Warranty Policy</a>
                    </div>
                    </Col>
                    <Col xs={6} md={2}>
                    <div className="hi">
                        
                        <p>About OPPO</p>
                        <a  href="">OPPO Store</a> <br />
                        <a  href="">Our Story</a> <br />
                        <a href="">Technology</a> <br />
                        <a  href="">Newsroom</a> <br />
                        <a  href="">Campaign</a> <br />
                        <a  href="">Career</a> <br />
                        <a  href="">ColorOS</a> <br />
                        <a  href="">Store Locator</a>
                        
                    </div>
                    </Col>
                    <Col xs={6} md={2}>
                    <div className="hi mb-5">
                        <p>OPPO Community</p>
                        <a  href="">OPPO Find X8 Pro</a>
                    </div >
                    </Col>
                    <hr className=" mt-4" />
                </Row>
                <Row>
                    <Col xs={6} md={6}>
                    <div className=" p-3">
                    <Image style={{width:"30px"}}  src="/images/robot.png" fluid/>
                    <span className=" ps-3">Get Support From Oppo</span>
                    </div>
                    </Col>
                    <Col xs={6} md={6}>
                    <div className="  p-3 d-flex gap-4 justify-content-end align-baseline" >
                        <FaFacebook />
                    <FaSquareXTwitter />
                    <FaYoutube />
                    <AiFillInstagram />
                    <BiLogoWhatsapp />
                    <a className=" text-light" href="">India (English)</a>
                     

                    </div>
                    
                    
                    
                    </Col>
                    <hr className=" mt-4" />
                    
                   
                </Row>
                <Row>
                    <Col md={9}>
                    <div style={{fontSize:"13px", display:"flex",gap:"10px", marginTop:"10px"}}>
                    <a className=" text-secondary text-decoration-none"href="">Privacy</a>
                    <a className=" text-secondary text-decoration-none"href="">Terms of use</a>
                    <a className=" text-secondary text-decoration-none"href="">Terms of sales</a>
                    <a className=" text-secondary text-decoration-none"href="">Cookies</a>
                    <a className=" text-secondary text-decoration-none"href="">Legal & Compliance</a>
                    <span className=" text-secondary">Copyright © 2004-2025 OPPO. All rights reserved.</span>
                    </div>
                    </Col>
                    <Col md={3}>
                    <div className=" text-end">
                    <span className=" text-secondary" >Back to Top</span>
                    </div>
                    </Col>
                </Row>
               
                
            </Container>
           
            

        </div>
    )
}
export default Footer;