import React from "react";
import { Button } from "react-bootstrap";
import { Col, Input, Label, Row, Table } from "reactstrap";
import { Header } from "../../components/Header";
import { Div, ButtonVender, DivTable, RowInput, Title } from "./style";

export const Sales: React.FC = () => {
  return (
    <>
      <Header />
      <Title>Vendas</Title>
      <Div>
        <RowInput>
          <Row>
            <Col>
              <Label htmlFor=""> Cod. Produto </Label>
              <Input type="text" />
            </Col>
            <Col>
              <Label htmlFor=""> Descrição </Label>
              <Input type="text" />
            </Col>
            <Col>
              <Label htmlFor=""> Valor R$</Label>
              <Input type="number" />
            </Col>
            <Col>
              <Label htmlFor=""> Nome Cliente</Label>
              <Input type="text" />
            </Col>
          </Row>
        </RowInput>
        <RowInput>
          <Row>
            <Col>
              <Label htmlFor=""> Quantidade </Label>
              <Input type="number" />
            </Col>
            <Col>
              <Label htmlFor=""> Tipo de Pagamento </Label>
              <Input type="text" />
            </Col>
            <Col>
              <Label htmlFor=""> Data </Label>
              <Input type="date" />
            </Col>
            <Col>
              <Label htmlFor=""> Total à pagar </Label>
              <Input type="number" />
            </Col>
          </Row>
        </RowInput>
        <ButtonVender>
          <Button variant="danger"> Vender </Button>
        </ButtonVender>
      </Div>
    </>
  );
};
