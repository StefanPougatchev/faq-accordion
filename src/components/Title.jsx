import styled from 'styled-components';
import logo from '../assets/svgs/icon-star.svg';

const Title = () => {
  return (
    <TitleContainer>
      <Img
        src={logo}
        alt='star-icon'
      />
      <TitleText>FAQs</TitleText>
    </TitleContainer>
  );
};

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  align-self: stretch;
`;

const TitleText = styled.h1`
  font-size: 32px;
  font-weight: 700;
  line-height: normal;
  margin: 0;
  padding: 0;
  color: #301534;
  font-weight: 700;
  font-style: normal;
  @media (min-width: 768px) {
    font-size: 56px;
  }
`;

const Img = styled.img`
  width: 24px;
  height: 24px;

  @media (min-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;
export default Title;
