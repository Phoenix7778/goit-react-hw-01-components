import styled from 'styled-components';

export const TransactionTable = styled.table`
  width: 600px;
  border-radius: 10px;
  box-shadow: 0px 8px 20px rgba(28, 28, 30, 0.5),
    0px 4px 10px rgba(255, 255, 255, 0.1);
`;

export const TransactionTitleCells = styled.tr`
  background-color: rgb(54, 136, 230);
  text-transform: uppercase;
  color: #ffffff;
  height: 50px;
  font-size: 14px;
`;

export const TransactionCells = styled.tr`
  height: 50px;
  font-weight: 500;
  text-align: center;
  color: #808090;
  background: rgb(231, 231, 231);
  :nth-of-type(odd) {
    background-color: #ffffff;
  }
`;
