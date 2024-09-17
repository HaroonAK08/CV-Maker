import Header from "../components/Header/Header";
import styled from "styled-components";
import { useNavigate } from "react-router";
import imgg from '../assets/hero.gif'

const Home = () => {
  const navigate = useNavigate();
  const handleCV = () => {
    navigate("./personal");
  };
  return (
    <AppContainer>
      <Header />
      <Hero>
        <Small>ONLINE CV MAKER</Small>
        <Title>
          Make an impressive CV <br /> in minutes.
        </Title>
        <Middle>
          You don’t need to spend hours writing the perfect CV. Create one in 5
          minutes or less and start
          <br /> getting more interviews with our CV builder tool.
        </Middle>
        <Btn>
          <button title="Build CV" onClick={handleCV}>
            Build CV Now
          </button>
        </Btn>
      </Hero>
      <PicDiv>

      <Pic src={imgg} alt="Image" />
      </PicDiv>
    </AppContainer>
  );
};

export default Home;
const AppContainer = styled.div`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f4f7fc;
  min-height: 100vh;
`;
const Hero = styled.div`
  // background: red;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Small = styled.p`
  font-size: 16px;
  color: grey;
  margin-top: 30px;
`;
const Title = styled.h1`
  font-size: 4rem;
  color: #333;
  font-weight: 900;
  margin-top: -10px;
  text-align: center;
`;

const Middle = styled.h2`
  font-size: 1rem;
  font-weight: 400;
  color: grey;
  text-align: center;
  line-height: 20px; 
  `;

const Btn = styled.div`
  button {
    padding: 15px 30px;
    font-size: 1.2rem;
    font-weight: bold;
    color: white;
    background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
    border: none;
    border-radius: 50px;
    box-shadow: 0px 15px 20px rgba(106, 17, 203, 0.4);
    cursor: pointer;
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    position: relative;
    overflow: hidden;
    z-index: 1;
  }

  button:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 300%;
    width: 300%;
    background: rgba(255, 255, 255, 0.2);
    transition: all 0.4s ease;
    border-radius: 50%;
    z-index: -1;
    transform: translate(-50%, -50%);
  }

  button:hover {
    box-shadow: 0px 20px 25px rgba(37, 117, 252, 0.6);
    background: linear-gradient(135deg, #2575fc 0%, #6a11cb 100%);
    color: #fff;
    transform: translateY(-5px);
  }

  button:hover:before {
    height: 100%;
    width: 100%;
    transform: translate(0, 0);
  }
`;
const PicDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 40px;
`
const Pic = styled.img`
  /* Add your styles here */
  width: 70%;
  height: auto;
  border-radius: 10px
`;