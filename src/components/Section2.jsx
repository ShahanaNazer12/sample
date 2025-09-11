import { Button, Col, Container, Image, Row } from "react-bootstrap";

function Section2(){
    return(
        <div style={{position:"relative" , marginBottom: "10px" }}>
            
            
            {/* <Image src="\images\sec3.jpg" fluid style={{height:"500px" }}/> */}
             <picture>
            <source media="(min-width: 992px)" srcset="/images/mmfull.jpg" />
            <source media="(min-width: 576px)" srcset="/images/mmfull.jpg" />
            <Image className=" w-100 mt-0 "  src="\images\mms.webp" style={{objectFit:"cover",height:"550px"}}  />
           </picture>
            
            
            {/* <Container>
                <Row>
                    <Col md={6} className="text-dark"  style={{position:"absolute",top:"100px"}} >
                    <h1>Reno 14 Pro 5G</h1>
                    <p>From  ₹49,999 </p>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col md={6} className="text-dark"  style={{position:"absolute",top:"300px"}} >
                    <p>10 % Instant Discount Up to ₹5K <br />
                    No Cost EMI up to 6 Months <br />
                    Enjoy Points Benefits  </p>
                    </Col>
                </Row>
            </Container>
            <div className=" d-flex flex-wrap  gap-3" style={{position:"absolute",top:"400px", left:"10%",}}>
           <Button  variant="outline-dark" className="rounded-pill " >Learn More</Button>
            <Button variant="dark" className="rounded-pill "  >Buy Now</Button>
        </div> */}

        <div className=" position-absolute d-flex flex-column justify-content-start justify-content-lg-between text-black " style={{top:"50px",left:"10%",height:"450px"}}>
            <div className="ct" >
                <h3> K13 Turbo Pro 5G <br /></h3>
                        Indias Only Cooling fan Phone <br />
                        From ₹37,999
            </div>
            <div className="tc text-black ">
                <p>Instant Bank Discount up to ₹3000 <br />
           No Cost EMI up to 9 months <br />
           Point Benefit</p>
            <Button variant="outline-dark" className="rounded-pill mb-3 " >Learn More</Button>
             <Button  variant="dark" className="rounded-pill ms-3 mb-3"  >Buy Now</Button>

            </div>

           </div>

           
        </div>


    )
}
export default Section2;