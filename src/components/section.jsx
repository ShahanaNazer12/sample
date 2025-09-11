import { Button, Image } from "react-bootstrap";
import "./Section.css"

function Section(){
    return(
        <div className=" position-relative " style={{ marginBottom: "10px"}} >
             <picture>
            <source media="(min-width: 992px)" srcset="/images/op1.jpg" />
            <source media="(min-width: 576px)" srcset="/images/op2.webp" />
            <Image className=" w-100 mt-5   "  src="/images/op3.webp" style={{objectFit:"cover",height:"550px"}}  />
           </picture>
           
          
           {/* <div className="ct position-absolute   " style={{top:"100px", left:"10%"}}>
            <h1>OPPO F31 Series <sup>5G</sup></h1>
            <p>Smooth and powerful   Durable Champion</p>
           </div>
           <div className="tc position-absolute " style={{ bottom:"100px",left:"10%"}} >
            <p>Launching on 15 th september</p>
            <Button variant="outline-dark" className="rounded-pill " >Learn More</Button>

           </div> */}

           <div className=" position-absolute d-flex flex-column justify-content-start justify-content-lg-between " style={{top:"100px",left:"10%",height:"450px"}}>
            <div className="ct" >
                <h3>OPPO F31 Series <sup>5G</sup></h3>
                <p>Smooth and powerful <br />  Durable Champion</p>
            </div>
            <div className="tc">
                <p>Launching on 15 th september</p>
            <Button variant="outline-dark" className="rounded-pill " >Learn More</Button>

            </div>

           </div>
           
           

        </div>
    )
}
export default Section;