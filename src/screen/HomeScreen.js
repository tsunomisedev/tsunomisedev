import React from "react";
import Table from "../components/Table";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

export default function HomeScreen() {
  return (
    <>
      <MDBContainer>
        <MDBRow>
          <MDBCol size="4">
            <MDBRow>
              <MDBCol md="4">MENU</MDBCol>
            </MDBRow>
          </MDBCol>
          <MDBCol size="8">
            <Table />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
}
