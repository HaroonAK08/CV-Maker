import styled from 'styled-components';


const Header = () => {
  return (
    <HeaderContainer>
      <HeaderTitle>MasterCV</HeaderTitle>
      <HeaderSubtitle>The Place Where CVs Come to Life – Ready for Success?</HeaderSubtitle>
    </HeaderContainer>
  );
};

export default Header;
const HeaderContainer = styled.header`
  background: linear-gradient(90deg, #4e54c8, #8f94fb);
  padding: 30px;
  text-align: center;
  color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-top: -8px;
`;

const HeaderTitle = styled.h1`
  margin: 0;
  font-size: 3rem;
  font-weight: bold;
  letter-spacing: 1.5px;
`;

const HeaderSubtitle = styled.p`
  margin: 5px 0 0;
  font-size: 1.2rem;
  opacity: 0.8;
`;
