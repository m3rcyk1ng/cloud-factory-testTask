import styled from 'styled-components';

export const MessageDialogContentWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: ${(props) => props.theme.white};
  border: ${(props) => `1px solid ${props.theme.black}`};
  padding: 2rem;
  border-radius: 12px;
  width: 30rem;
  top: 20rem;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
`;

export const MessageDialogTitle = styled.p`
  font-size: var(--large-fs);
  font-weight: 700;
  color: ${(props) => props.theme.background};
  margin: 0 auto 1rem;
  max-width: 60%;
  @media (max-width: 968px) {
    font-size: var(--default-fs);
  }
`;

export const MessageDialogMessage = styled.p`
  font-size: var(--default-fs);
  margin: 0 auto;
  @media (max-width: 968px) {
    font-size: var(--small-fs);
  }
`;