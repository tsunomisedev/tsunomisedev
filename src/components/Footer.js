import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <>
      <MDBFooter color="black" className="font-small pt-4 mt-4">
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow>
            <MDBCol md="12" className="text-center ">
              <p>Copyright(c)　通の店キッチン ALL Rights Reserved.</p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBFooter>
    </>
  );
};

export default Footer;
