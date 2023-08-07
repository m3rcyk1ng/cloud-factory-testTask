import styled from 'styled-components';

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const Tab = styled.button<{ active: boolean }>`
  font-size: 20px;
  padding: 10px 60px;
  min-width: 200px;
  cursor: pointer;
  background: ${(props) => props.theme.backgroundVariant};
  color: ${(props) => props.theme.white};
  border: 0;
  outline: 0;
  opacity: 0.6;
  border-radius: 32px;
  &:first-of-type {
    margin-right: 2rem;
  }
  ${({ active, theme }) => active && `opacity: 1; outline: 2px ${theme.orange} solid`}
`;
