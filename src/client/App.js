import React from "react";
import styled from "styled-components";

const Table = styled.table`
  width: 100%;
  height: 300px;
  font-size: 40px;
  background: linear-gradient(20deg, rgb(219, 112, 147), #daa357);
`;

const App = ({ name }) => (
  <Table align="center">
    <tbody>
      <tr>
        <td align="center">
          Hello {name}
          <br />
          Email templates with Styled components
          <br />
          💅
        </td>
      </tr>
    </tbody>
  </Table>
);

export default App;
