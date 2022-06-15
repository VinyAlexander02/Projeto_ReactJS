import React from "react";
import { Table } from "reactstrap";
import { Header } from "../../components/Header";
import { Div, DivTable, H2, Title } from "./style";

export const Side: React.FC = () => {
  return (
    <>
      <Header />
      <Title> Acompanhamento de Vendas </Title>
      <Div>
        <H2> Total: R$ 1000,00 </H2>
        <DivTable>
          <Table responsive>
            <thead>
              <tr>
                <th> Cod </th>
                <th> Cliente </th>
                <th> Descrição </th>
                <th> Quantidade </th>
                <th> ValorR$ </th>
                <th> Pagamento </th>
                <th> Data </th>
                <th> Total Pago </th>
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
                <td>Table cell</td>
              </tr>
            </tbody>
          </Table>
        </DivTable>
      </Div>
    </>
  );
};
