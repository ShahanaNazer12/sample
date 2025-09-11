import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { RiSurveyLine } from "react-icons/ri";

function Section1(){
    return(
        <div  style={{position:"relative",  marginBottom: "10px" }}>
           <div className=" rounded p-3" style={{position:"absolute",right:"10px",background:"white",position:" fixed",borderRadius:"50%"}}>
            <RiSurveyLine />
           </div>
           <picture>
            <source media="(min-width: 992px)" srcset="/images/nn1.jpg" />
            <source media="(min-width: 576px)" srcset="/images/nnmd.webp" />
            <Image className=" w-100 mt-0 "  src="/images/nn2.webp" style={{objectFit:"cover",height:"550px"}}  />
           </picture>

            {/* <Container>
                <Row>
                    <Col md={6} className="text-light" style={{position:"absolute",top:"100px", left:"10%"}}>
                     <h1> K13 Turbo Pro 5G <br /></h1>
                        Indias Only Cooling fan Phone <br />
                        From ₹37,999
                        
                    </Col>    
                </Row>
            </Container>
           

        <div className="fw-bold text-light" style={{position:"absolute",top:"400px", left:"10%"}}>
           Instant Bank Discount up to ₹3000 <br />
           No Cost EMI up to 9 months <br />
           Point Benefit
        </div>

        <div className=" d-flex flex-wrap  gap-3" style={{position:"absolute",top:"500px", left:"10%",}}>
           <Button  variant="outline-light" className="rounded-pill " >Learn More</Button>
            <Button variant="light" className="rounded-pill "  >Buy Now</Button>
            
        </div>
         */}

         <div className=" position-absolute d-flex flex-column justify-content-start justify-content-lg-between text-light " style={{top:"50px",left:"10%",height:"450px"}}>
            <div className="ct" >
                <h3> K13 Turbo Pro 5G <br /></h3>
                        Indias Only Cooling fan Phone <br />
                        From ₹37,999
            </div>
            <div className="tc ">
                <p>Instant Bank Discount up to ₹3000 <br />
           No Cost EMI up to 9 months <br />
           Point Benefit</p>
            <Button variant="outline-light" className="rounded-pill mb-3 " >Learn More</Button>
             <Button  variant="light" className="rounded-pill ms-3 mb-3"  >Buy Now</Button>

            </div>

           </div>

         

        </div>
       

      

    )
}
export default Section1;