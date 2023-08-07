import React, { FunctionComponent } from 'react';
import { MainWrapper, Title, Text, MainPic, SmallTitle, Description } from './About.styles';
import AboutImg from '../../assets/images/main-picture.png'
import { TEXT } from '../../utils/Text';

export const About: FunctionComponent = () => {
  return (
    <MainWrapper>
      <Title>{TEXT.MAIN_HELLO}</Title>
      <SmallTitle>{TEXT.MAIN_PSEUDO}</SmallTitle>
      <Text>{TEXT.MAIN_SUBTITLE}</Text>
      <MainPic src={AboutImg} alt={TEXT.MAIN_ALT} />
      <Description>{TEXT.MAIN_DESCRIPTION}</Description>
    </MainWrapper>
  );
};

export default About;