import React from "react";
import { Div, DivButton, DivTable, Title, RowInput } from "./style";
import { Col, Input, Label, Table } from "reactstrap";
import { Button, Row } from "react-bootstrap";
import { Header } from "../../components/Header";

export const Registration: React.FC = () => {
  return (
    <>
      <Header />
      <Title>Cadastro de Produtos</Title>;
      <Div>
        <RowInput>
          <Row>
            <Col>
              <Label htmlFor=""> Cod. Produto </Label>
              <Input type="text" />
            </Col>
            <Col>
              <Label htmlFor=""> Valor Compra R$</Label>
              <Input type="text" />
            </Col>
            <Col>
              <Label htmlFor=""> Valor Venda R$</Label>
              <Input type="text" />
            </Col>
          </Row>
        </RowInput>
        <RowInput>
          <Row>
            <Col>
              <Label htmlFor=""> Descrição </Label>
              <Input type="text" />
            </Col>
          </Row>
        </RowInput>
        <DivButton>
          <Button variant="outline-danger">Novo</Button>{" "}
          <Button variant="outline-danger">Editar</Button>{" "}
          <Button variant="outline-danger">Salvar</Button>{" "}
          <Button variant="outline-danger">Excluir</Button>{" "}
          {/* <button type="submit"> Novo </button>
          <button type="submit"> Salvar </button>
          <button type="submit"> Editar </button>
          <button type="submit"> Excluir </button> */}
        </DivButton>
        <DivTable>
          <Table responsive>
            <thead>
              <tr>
                <th>Cod</th>
                <th>Produto</th>
                <th>Quantidade</th>
                <th>Preço Compra</th>
                <th>Preço Venda</th>
                <th>Fornecedores</th>
                <th>Lucro</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
              </tr>
            </tbody>
          </Table>
        </DivTable>
      </Div>
    </>
  );
};
