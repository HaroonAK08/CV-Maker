
import Header from '../components/Header/Header';
import styled from 'styled-components';
import cvImage from '../assets/cv.jpg'
import { useNavigate } from 'react-router';



const Home = () => {
    const navigate = useNavigate();
    const handleCV = () =>{
        navigate('./personal')

    }
  return (
    <AppContainer>
      <Header />
      <ContentSection>
        <Image 
          src= {cvImage} 
          alt="Placeholder"
        />
        <TextContainer>
          <Title>CV Builder</Title>
          <Paragraph>
  Your career starts here! Build a stunning CV with ease and stand out in the job market.
  Tailor your resume to showcase your unique skills, experience, and achievements.
  Let your CV reflect your personal brand – polished, professional, and ready to impress.
  Start today and create a CV that captures the attention of recruiters in seconds!
</Paragraph>

  <Btn>

            <button title='Create CV' onClick={handleCV} >Create CV</button>
  </Btn>
        </TextContainer>
      </ContentSection>
    </AppContainer>
  );
};

export default Home;
const AppContainer = styled.div`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f4f7fc;
  min-height: 100vh;
`;

const ContentSection = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 50px;
  max-width: 1200px;
  margin: 50px auto;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
`;

const Image = styled.img`
  width: 50%;
  height: auto;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
`;

const TextContainer = styled.div`
  width: 40%;
  text-align: left;
  padding-left: 20px;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #333;
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #555;
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
    content: '';
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