/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from "styled-components";
import { useState } from "react";
import { postExperienceDetails } from "../../api/api";
import { notification } from "antd"; 

const ExperienceForm = () => {
  const [experienceData, setExperienceData] = useState({
    companyName: "",
    title: "",
    years: "",
    description: "",
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setExperienceData({ ...experienceData, [name]: value });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    // Call the API to save the experience details
    postExperienceDetails(experienceData)
      .then(() => {
        notification.success({
          message: 'Success',
          description: 'Experience details saved successfully!',
        });
      })
      .catch((error) => {
        notification.error({
          message: 'Error',
          description: 'An error occurred while saving your experience details.',
        });
        console.error('Error saving data:', error);
      });
  };

  return (
    <>
      <Title>Experience Details</Title>
      <Container>
        <FormContainer>
          <Form onSubmit={handleSubmit}>
            <Section>
              <Label>
                Company Name*
                <Input
                  type="text"
                  name="companyName"
                  value={experienceData.companyName}
                  onChange={handleChange}
                  placeholder="Enter Company name"
                  required
                />
              </Label>
              <Label>
                Job Title*
                <Input
                  type="text"
                  name="title"
                  value={experienceData.title}
                  onChange={handleChange}
                  placeholder="Enter job title"
                  required
                />
              </Label>
              <Label>
                Years of Experience
                <Input
                  type="text"
                  name="years"
                  value={experienceData.years}
                  onChange={handleChange}
                  placeholder="Enter your years of experience"
                />
              </Label>
              <Label>
                Job Description
                <Input
                  type="text"
                  name="description"
                  value={experienceData.description}
                  onChange={handleChange}
                  placeholder="Enter your job description"
                />
              </Label>
              <SubmitButton type="submit">Save Details</SubmitButton>
            </Section>
          </Form>
        </FormContainer>
      </Container>
    </>
  );
};

export default ExperienceForm;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 40px 0;
  background: linear-gradient(135deg, #f5f7fa, #c3cfe2);
`;

const FormContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 80%;
  max-width: 900px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 40px 60px;
  width: 100%;
`;

const Section = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-size: 1rem;
  margin-bottom: 8px;
  color: #555;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 12px;
  margin-top: 8px;
  font-size: 1rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  outline: none;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:focus {
    border-color: #6a11cb;
    box-shadow: 0 4px 12px rgba(106, 17, 203, 0.2);
  }
`;

const SubmitButton = styled.button`
  padding: 14px 28px;
  font-size: 1.1rem;
  font-weight: bold;
  color: white;
  background: linear-gradient(135deg, #6a11cb, #2575fc);
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: background 0.3s ease, box-shadow 0.3s ease;
  margin-top: 30px;

  &:hover {
    background: linear-gradient(135deg, #2575fc, #6a11cb);
    box-shadow: 0 8px 20px rgba(37, 117, 252, 0.3);
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #5c62d3;
  margin-bottom: 40px;
  font-weight: bold;
  text-align: center;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 80%;
    height: 5px;
    background: linear-gradient(90deg, #ff7e5f, #feb47b);
    border-radius: 5px;
    transform: translateX(-50%);
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;
