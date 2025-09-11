// import { Button, Col, Container, Image, Row } from "react-bootstrap";

import { Button } from "react-bootstrap";

// function Section3(){
//     return(
//         <div className=" position-relative">
//             <Image src="/images/sec4.jpg" fluid style={{height:"500px"}}/>
//         <Container>
//             <Row>
//                 <Col md={6} style={{position:"absolute",top:"100px",left:"10%"}}>
//                 <h1>Reno 14 5G</h1>
//                 <p>From ₹37,999 </p>
//                 </Col>
//             </Row>
//         </Container>
//         <Container>
//             <Row>
//                 <Col md={6} style={{position:"absolute",top:"300px",left:"10%"}}>
//                 <p>10 % Instant Discount Up to ₹4,299 <br />
//                     No Cost EMI up to 6 Months <br />
//                   Up to  ₹3.5k Exchange Bonus + Free <br /> Gifts </p>
//                 </Col>
//             </Row>
//         </Container>
//         <div className=" d-flex flex-wrap  gap-3" style={{position:"absolute",top:"450px", left:"10%",}}>
//            <Button  variant="outline-dark" className="rounded-pill " >Learn More</Button>
//             <Button variant="dark" className="rounded-pill "  >Buy Now</Button>
//         </div>

            

//         </div>
//     )
// }
// export default Section3;


function Section3(){
    return (
        <div style={{position:"relative" , marginBottom: "10px" }}>
            <picture>
                <source media="(min-width:992px )" srcset="/images/ppbig.jpg" />
                <source media="(min-width:567 )" srcset="/images/ppmed.webp" />
                <img className=" w-100" src="/images/ppsmall.webp" alt="" style={{objectFit:"cover",height:"550px"}} />
            </picture>

            <div className=" position-absolute d-flex flex-column justify-content-start justify-content-lg-between text-black " style={{top:"50px",left:"10%",height:"450px"}}>
            <div className="ct" >
                <h1> Reno 14 <sup>5G</sup> <br /></h1>
                        <p className=" fw-semibold fs-5">From ₹37,999 </p>
            </div>
            <div className="tc text-black ">
                <p>10 % Instant Discount Up to ₹4,299 <br />
                    No Cost EMI up to 6 Months <br />
                  Up to  ₹3.5k Exchange Bonus + Free <br /> Gifts </p>
            <Button variant="outline-dark" className="rounded-pill mb-3 " >Learn More</Button>
             <Button  variant="dark" className="rounded-pill ms-3 mb-3"  >Buy Now</Button>

            </div>

           </div>

        </div>
    )

}
export default Section3;