import React from "react";
import { Navbar, Container,Button } from "react-bootstrap";
import {Link} from 'react-router-dom'

const NavMenu = () => {
  return (
    <Navbar expand="lg" variant="dark" bg="dark">
      <Container>
        <Navbar.Brand >MANGA-SEKAI</Navbar.Brand>
        <Link to='/add'><Button  variant="warning">Add Manga</Button></Link>
      </Container>
    </Navbar>
  );
};

export default NavMenu;
