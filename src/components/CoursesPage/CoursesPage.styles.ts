import styled from "styled-components";
import logo from "../../assets/images/logo.svg";

export const CoursesPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 48px 0;
`

export const HeaderWrapper = styled.div`
  width: 1280px;
  height: 80px;
  display: flex;
  justify-content: center;
  margin: auto;
  align-items: center;
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-size: 150px 50px;
  background-position: left;
`;

export const PreloaderWrapper = styled.img`
  width: 300px;
  height: 300px;
  justify-self: center;
  margin: 60px auto;
  background-color: inherit;
`;

export const MessageDialogTitle = styled.p`
  font-size: var(--large-fs);
  font-weight: 700;
  margin: 0 auto;
  max-width: 60%;
  @media (max-width: 968px) {
    font-size: var(--default-fs);
  }
`;

export const MessageDialogMessage = styled.p`
  font-size: var(--default-fs);
  margin: 0 auto 2rem;
  color: ${(props) => props.theme.background};
  @media (max-width: 968px) {
    font-size: var(--small-fs);
  }
`;

export const CloseBtn = styled.div`
  padding: 0.5rem 1rem;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme.danger};
  border-radius: 0.5rem;
  user-select: none;
  transition: .3s;
  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.dangerHover};
  }
`;

export const AlertImg = styled.img`
  margin: 2em;
  width: 10rem;
  height: 10rem;
`;