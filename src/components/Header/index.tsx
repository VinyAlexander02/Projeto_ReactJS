import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

export const Header: React.FC = () => {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand>Dogs Tabacaria</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/cadastro"> Cadastro </Nav.Link>
            <Nav.Link href="/vendas"> Vendas </Nav.Link>
            <Nav.Link href="/acompanhamento">Acompanhamento</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
