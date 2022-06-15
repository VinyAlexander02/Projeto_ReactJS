import React from "react";
import { Col, Input, Label, Row } from "reactstrap";
import { Button, Card } from "react-bootstrap";
import { Div, Title, Login, RowInput, ButtonEntrar } from "./style";

export const Home: React.FC = () => {
  return (
    <>
      <Title> Projeto React </Title>
      <Div>
        <Login> Login </Login>
        <RowInput>
          <Row>
            <Col>
              <Label htmlFor=""> Usuário </Label>
              <Input type="text" />
            </Col>
            <Col>
              <Label htmlFor=""> Senha </Label>
              <Input type="text" />
            </Col>
          </Row>
        </RowInput>
        <ButtonEntrar>
          <Button variant="outline-danger"> Danger </Button>
        </ButtonEntrar>
      </Div>
    </>
  );
};
