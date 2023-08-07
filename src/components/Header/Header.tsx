import React, { FunctionComponent, useEffect } from 'react';
import { HeaderContainer, HeaderWrapper, StyledLink, Logo } from './Header.styles';
import { TEXT } from '../../utils/Text';
import { useLocation, useNavigate } from 'react-router-dom';

export const Header: FunctionComponent = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname === '/' || pathname !== '/courses') navigate('/main');
  }, [navigate, pathname])

  return (
    <HeaderContainer>
      <HeaderWrapper>
        <StyledLink activeTab={pathname === '/main'} to="/main">{TEXT.HEADER_FIRST_TAB}</StyledLink>
        <Logo/>
        <StyledLink activeTab={pathname === '/courses'} to="/courses">{TEXT.HEADER_SECOND_TAB}</StyledLink>
      </HeaderWrapper>
    </HeaderContainer>
  );
};

export default Header;