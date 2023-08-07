import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';

export const HeaderContainer = styled.div`
  width: 100%;
  border-bottom: 2px solid var(--color-white);
`

export const HeaderWrapper = styled.div`
  height: 80px;
  display: flex;
  justify-content: center;
  margin: auto;
  align-items: center;
`;

export const Logo = styled.div`
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-size: 50px 50px;
  background-position: center;
  padding: 10px 50px;
  width: 200px;
  height: 50px;
  @media (max-width: 968px) {
    width: 70px;
    background-size: 30px 30px;
    padding: 5px 20px;
  }
`

export const StyledLink = styled(Link)<{activeTab: boolean}>`
  padding: -3px 10px;
  text-decoration: none;
  font-size: var(--large-fs);
  color: ${(props) => (props.activeTab ? 'orange' : '#FFF')};
  background: var(--color-bg-variant);
  border-radius: 16px;
  align-items: start;
  font-weight: 700;
  outline: ${(props) => (props.activeTab ? `2px orange solid` : undefined)};
  min-width: 240px;
  text-align: center;
  transition: .3s;
  @media (max-width: 968px) {
    font-size: var(--small-fs);
    min-width: 160px;
  }
  @media (max-width: 400px) {
    font-size: var(--small-fs);
    min-width: 100px;
  }
`;
