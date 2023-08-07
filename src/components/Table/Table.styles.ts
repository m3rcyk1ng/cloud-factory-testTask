import styled from 'styled-components';

export const TableSection = styled.table`
  display: flex;
  width: 1168px;
  flex-direction: column;
  margin: 0;
  table-layout: fixed;
  border-collapse: collapse;
  border-radius: 32px;
  background-color: var(--color-white);
`;

export const StyledTh = styled.th`
  padding: 10px 0;
  font-size: 18px;
  color: #4874c7;
  width: 292px;
`;

export const StyledTd = styled.td`
  border-top: 1px solid rgba(34, 36, 38, 0.1);
  justify-content: center;
  font-weight: 400;
  font-size: 16px;
  padding: 10px 0;
  text-align: center;
  width: 292px;
  color: var(--color-bg);
`;

export const StyledTr = styled.tr`
  display: flex;
  justify-content: space-between;
  &:hover {
    background-color: var(--color-primary-variant);
    cursor: pointer;
  }
`

export const StyledThead = styled.thead`
  font-size: 20px;
  color: #4874c7;
  font-weight: 700;
  box-shadow: rgb(31 31 31 / 15%) 0 4px 20px -2px;
`;


