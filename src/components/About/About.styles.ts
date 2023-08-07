import styled from 'styled-components';

export const MainWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

export const Title = styled.h1`
  font-size: 30px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 30px auto 16px;
`;

export const SmallTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 0 0 8px;
`;

export const Text = styled.p`
  font-size: var(--default-fs);
  text-align: center;
  margin: 16px auto;
  max-width: 60%;
  @media (max-width: 968px) {
    font-size: var(--small-fs);
  }
`;

export const Description = styled.p`
  font-size: var(--default-fs);
  text-align: center;
  margin: 10px auto;
  max-width: 60%;
  color: var(--color-light);
  @media (max-width: 968px) {
    font-size: var(--small-fs);
  }
`;

export const MainPic = styled.img`
  width: 40%;
  height: 40%;
  display: inline-block;
  border-radius: 32px;
  box-shadow: 0px -2px 10px 8px rgba(238, 238, 238, 0.6);
  @media (max-width: 968px) {
    width: 60%;
    height: 60%;
  }
`;
