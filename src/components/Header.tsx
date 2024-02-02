import React from 'react'
import '@coreui/coreui/dist/css/coreui.min.css'
import {CNavbar,CContainer,CNavbarBrand, CNavbarToggler,  CCollapse, CNavbarNav, CNavLink} from '@coreui/react'


interface CustomNavbarProps {
  style?: React.CSSProperties & {
    '--cui-navbar-bg'?: string; 
  };
}

function Header(){
  const [visible, setVisible] = React.useState(false)
  const navbarStyle: CustomNavbarProps['style'] = {
    '--cui-navbar-bg': 'black', 
  };

  return (
    <>
      <CNavbar expand="lg" colorScheme="light" className="bg-light" style={navbarStyle}>
        <CContainer fluid>
          <CNavbarBrand href="#">Portfolio</CNavbarBrand>
          <CNavbarToggler
            aria-label="Toggle navigation"
            aria-expanded={visible}
            onClick={() => setVisible(!visible)}
          />
          <CCollapse className="navbar-collapse" visible={visible}>
            <CNavbarNav component="nav">
              <CNavLink href="#">Home</CNavLink>
              <CNavLink href="#">About Me</CNavLink>
              <CNavLink href="#">Contact Me</CNavLink>
            </CNavbarNav>
          </CCollapse>
        </CContainer>
      </CNavbar>
  </>
)
}

export default Header;