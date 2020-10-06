import React from "react";
import { MDBRow, MDBCol } from "mdbreact";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBNavLink,
  MDBTypography,
} from "mdbreact";
// import logo from "../logo.png";
import logo from "../logo.svg";
export default function HeaderNavBar() {
  return (
    <>
      <MDBRow>
        <MDBCol size="12">
          <header>
            <MDBNavbar color="gray" dark expand="md">
              <MDBNavbarBrand href="/">
                <MDBTypography colorText="black">
                  <img src={logo} alt="Logo" width="50" height="40" />
                  <strong> 管理画面</strong>
                </MDBTypography>
              </MDBNavbarBrand>
              <MDBNavbarToggler />
              <MDBCollapse navbar>
                <MDBNavbarNav left>
                  <MDBNavItem active>
                    <MDBNavLink to="#">Ankhaa </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#">Bol </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#">boojgoi</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#">yum</MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
          </header>
        </MDBCol>
      </MDBRow>
    </>
  );
}
