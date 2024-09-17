import styled from 'styled-components';
import Header from '../components/Header/Header';
import Slide from '../components/Slide/Slide';
import PersonalDetailsForm from '../components/Form/PersonalDetailsForm';
import ExperienceForm from '../components/Form/ExperienceForm';
import StateManager from '../State/StateManager';
import EducationForm from '../components/Form/EducationForm';
import Template from '../components/Form/Template';
// import Generate from '../components/Form/Generate';
// import Skills from '../components/Form/SkillsForm'
import SkillsForm from '../components/Form/SkillsForm';

const PersonalDetails = () => {
  const { currentStep, handleNext, handleBack, setStep } = StateManager(1);

  const statuses = {
    personal: currentStep === 1 ? 'process' : 'wait',
    education: currentStep === 2 ? 'process' : 'wait',
    skills: currentStep === 3 ? 'process' : 'wait',
    experiences: currentStep === 4 ? 'process' : 'wait',
    template: currentStep === 5 ? 'process' : 'wait',
  };

  const renderForm = () => {
    switch (currentStep) {
      case 1:
        return <PersonalDetailsForm />;
      case 2:
        return <EducationForm />;
      case 3:
        return <SkillsForm />;
      case 4:
        return <ExperienceForm />;
      case 5:
        return <Template />;
      default:
        return <PersonalDetailsForm />;
    }
  };

  return (
    <Main>
      <Header />
      <Content>
        <Slide statuses={statuses} setStep={setStep} />
        {renderForm()}
        <ButtonContainer>
          <Button onClick={handleBack} disabled={currentStep === 1}>
            Back
          </Button>
          <Button onClick={handleNext} disabled={currentStep === 5}>
            Next
          </Button>
        </ButtonContainer>
      </Content>
    </Main>
  );
};

export default PersonalDetails;

const Main = styled.div`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f4f7fc;
  min-height: 100vh;
  padding: 20px;
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 40px !important;
  background-color: white;
  padding: 50px;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
`;

const Button = styled.button`
  background-color: #5C62D3;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;
