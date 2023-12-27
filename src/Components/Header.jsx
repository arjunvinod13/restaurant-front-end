import React from 'react'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';

function Header() {
  return (
    <div>  <MDBNavbar light bgColor='light'>
    <MDBContainer fluid>
      <MDBNavbarBrand href='#'>
        <img
          src='https://icon-library.com/images/restaurant-icon-png/restaurant-icon-png-15.jpg'
          height='70'
          alt=''
          loading='lazy'
        />
        Food Stories
      </MDBNavbarBrand>
    </MDBContainer>
  </MDBNavbar></div>
  )
}

export default Header